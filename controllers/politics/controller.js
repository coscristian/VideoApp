import { getDB } from "../../db/db.js";

const dbErrors = {
    11000: "Politic is already registered with that ID"
};

function validatePoliticFields(politicInfo) {
    return new Promise((resolve, reject) => {
        if (!politicInfo._id) {
            throw new Error('Please add an _Id');
        }
        if (!politicInfo.name) {
            throw new Error('Please add a name');
        }
        if (!politicInfo.lastName) {
            throw new Error('Please add a lastname');
        }
        if (!politicInfo.email) {
            throw new Error('Please add a email');
        }
        if (!politicInfo.department) {
            throw new Error('Please add a department');
        }
        resolve();
    });
}

const registerPolitic = async (politicInfo, callback, validationCall) => {
    const connection = getDB();
    politicInfo.status = 1;
    validatePoliticFields(politicInfo)
        .then(async () => {
            await connection.collection('politics').insertOne(politicInfo, callback);
        })
        .catch(validationCall);
}

const queryAllPolitics = async (callback) => {
    const connection = getDB();
    await connection
        .collection('politics')
        .find()
        .toArray(callback);
}

const politicExists = (politicId, politicInfo) => {
    return new Promise(async (resolve, reject) => {
        const connection = getDB();
        await connection
            .collection('politics')
            .find({ "_id": politicId, "email": politicInfo.email })
            .toArray((err, result) => {
                if (err) return reject(err);
                if (result.length == 0)
                    return reject("Not existing politic with that ID or email");
                return resolve();
            });
    }
    );
}

const checkNotDeleted = (id) => {
    return new Promise(async (resolve, reject) => {
        const connection = getDB();
        await connection
            .collection('politics')
            .find({ "_id": id })
            .toArray((err, result) => {
                if (err) return reject(err);
                if (result[0].status) return resolve();
                return reject("Not exists!! Politic was deleted");
            })
    });
}

const deletePolitic = async (politicId, politicInfo, callback, validationCallback) => {
    const connection = getDB();

    politicExists(politicId, politicInfo)
        .then(() => {
            checkNotDeleted(politicId)
                .then(async () => {
                    await connection
                        .collection('politics')
                        .updateOne(
                            { "_id": politicId },
                            {
                                $set: { "status": 0 }
                            }, callback);
                })
                .catch(validationCallback)
        })
        .catch(validationCallback);
}

export { registerPolitic, queryAllPolitics, deletePolitic, dbErrors };