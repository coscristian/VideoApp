import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config({path: './.env'})

const uri = process.env.DATABASE_URL;
let connection;

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connectDB = (callback) => {
    client.connect((err, db) => {
        if(err){
            console.log('Error connecting to DB');
            return 'error';
        }
        connection = db.db('videoAppDB');
        console.log("Success Connection");
        return callback();
    });
}

const getDB = () => {
    return connection;
}

export {connectDB, getDB};