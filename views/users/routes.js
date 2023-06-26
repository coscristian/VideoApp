import Express from "express";
import { dbErrors, registerUser } from "../../controllers/users/controller.js";

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
    // Get all registered users
    res.send('Showing all registered users');
});

userRoutes.route('/deleteUser/:id').patch((req, res) => {
    // Delete user = Change user state
});

export default userRoutes;
