import { getDB } from "../../db/db.js";

const dbErrors = {
    11000: "Politic is already registered with that ID"
};

function validateVideoFields(videoInfo) {
    return new Promise((resolve, reject) => {
        if (!videoInfo.user_id) {
            throw new Error('Please add an user ID');
        }
        if (!videoInfo.politic_id) {
            throw new Error('Please add a politic ID');
        }
        if (!videoInfo.video) {
            throw new Error('Please add a video');
        }
        resolve();
    });
}

const queryAllVideos = async (callback) => {
    const connection = getDB();
    await connection
        .collection('videos')
        .find()
        .toArray(callback);
}

const createVideo = async (videoInfo, callback, validationCall) => {
    const connection = getDB();
    videoInfo.status = 1;
    validateVideoFields(videoInfo)
        .then(async () => {
            await connection.collection('videos').insertOne(videoInfo, callback);
        })
        .catch(validationCall);
}

export {createVideo, queryAllVideos};