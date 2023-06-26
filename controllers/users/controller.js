import { getDB } from "../../db/db.js";

const dbErrors = {
    11000: "User is already registered with that ID"
};

const registerUser = async (userInfo, callback) => {
    const connection = getDB();
    console.log(userInfo);
    await connection.collection('users').insertOne(userInfo, callback);
}

export {registerUser, dbErrors};