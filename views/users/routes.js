import Express from "express";
import { dbErrors, registerUser } from "../../controllers/users/controller.js";

const userRoutes = Express.Router();

const genericCallback = (res) => {
    return (err, result) => {
        if(err){
            res.status(500).send(dbErrors[err["code"]]);
        }else{
            res.status(200).json(result);
        }
    }
}

userRoutes.route('/registerUser').post((req, res) => {
    console.log(req.body);
    registerUser(req.body, genericCallback(res));
    //registerUser(req.body);
    //const userInfo = req.body;
    //console.log(userInfo);
});

userRoutes.route('/users').get((req, res) => {
    // Get all registered users
    res.send('Showing all registered users');
});

userRoutes.route('/deleteUser/:id').patch((req, res) => {
    // Delete user = Change user state
});

export default userRoutes;
