import Express from "express";
import { dbErrors, deleteUser, queryAllUsers, registerUser } from "../../controllers/users/controller.js";

const userRoutes = Express.Router();

const validationCallback = (res) => {
    return (err) => {
        if(err){
            res.status(500).send(`${err}`);
        }else{
            res.status(200);
        }
    }
}

const genericCallback = (res) => {
    return (err, result) => {
        if(err){
            console.log(err)
            res.status(500).send(dbErrors[err["code"]]);
        }else{
            res.status(200).json(result);
        }
    }
}

userRoutes.route('/registerUser').post((req, res) => {
    console.log(req.body);
    registerUser(req.body, genericCallback(res), validationCallback(res));
});

userRoutes.route('/users').get((req, res) => {
    queryAllUsers(genericCallback(res));
});

userRoutes.route('/deleteUser/:id').patch((req, res) => {
    deleteUser(req.params.id, genericCallback(res));
});

export default userRoutes;
