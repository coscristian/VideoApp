import { getDB } from "../../db/db.js";

const dbErrors = {
    11000: "User is already registered with that ID"
};

function validateUserFields(userInfo) {
    return new Promise((resolve, reject) => {
        if (!userInfo._id) {
            throw new Error('Please add an _Id');
        }
        if (!userInfo.name) {
            throw new Error('Please add a name');
        }
        if (!userInfo.lastName) {
            throw new Error('Please add a lastname');
        }
        if (!userInfo.email) {
            throw new Error('Please add a email');
        }
        resolve();
    });
}

const registerUser = async (userInfo, callback, validationCall) => {
    const connection = getDB();
    validateUserFields(userInfo)
        .then(async () => {
            await connection.collection('users').insertOne(userInfo, callback);
        })
        .catch(validationCall);
}

const queryAllUsers = async (callback) => {
    const connection = getDB();
    await connection
        .collection('users')
        .find()
        .toArray(callback);
}

export { registerUser, queryAllUsers, dbErrors};