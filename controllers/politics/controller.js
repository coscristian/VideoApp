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
        if(!politicInfo.department){
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

const deletePolitic = async (politicId, callback) => {
    const connection = getDB();
    await connection
        .collection('politics')
        .updateOne(
            {"_id": politicId},
            {
                $set: {"status":0}
            }, callback);
}

export { registerPolitic, queryAllPolitics, deletePolitic, dbErrors};