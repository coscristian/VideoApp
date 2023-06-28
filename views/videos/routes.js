import Express from "express";
import { dbErrors } from "../../controllers/users/controller.js";
import { createVideo, queryAllVideos } from "../../controllers/videos/controller.js";

const videoRoutes = Express.Router();

const validationCallback = (res) => {
    return (err) => {
        if (err) {
            res.status(500).send(`${err}`);
        } else {
            res.status(200);
        }
    }
}

const genericCallback = (res) => {
    return (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).send(dbErrors[err["code"]]);
        } else {
            res.status(200).json(result);
        }
    }
}

videoRoutes.route('/videos').get((req, res) => {
    queryAllVideos(genericCallback(res));
});

videoRoutes.route('/createVideo').post((req, res) => {
    console.log(req.body);
    createVideo(req.body, genericCallback(res), validationCallback(res));
});

export default videoRoutes;