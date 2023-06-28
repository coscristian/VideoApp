import Express from "express";
import { dbErrors} from "../../controllers/users/controller.js";
import { deletePolitic, queryAllPolitics, registerPolitic } from "../../controllers/politics/controller.js";

const politicRoutes = Express.Router();

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

politicRoutes.route('/registerPolitic').post((req, res) => {
    console.log(req.body);
    registerPolitic(req.body, genericCallback(res), validationCallback(res));
});

politicRoutes.route('/politics').get((req, res) => {
    queryAllPolitics(genericCallback(res));
});

politicRoutes.route('/deletePolitic/:id').patch((req, res) => {
    deletePolitic(req.params.id, req.body, genericCallback(res), validationCallback(res));
});

export default politicRoutes;
