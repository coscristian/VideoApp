import Express from "express";
import userRoutes from "./views/users/routes.js";
import { connectDB } from "./db/db.js";
import Cors from 'cors';
import politicRoutes from "./views/politics/routes.js";
import videoRoutes from "./views/videos/routes.js";

const app = Express();

app.use(Express.json());
app.use(Cors());
app.use(userRoutes);
app.use(politicRoutes);
app.use(videoRoutes);

const usuarios = [
    {
        id: "1087489628",
        name: "Cristian",
        lastName: "Quesada Cossio",
        email: "crisquesadaco@gmail.com"
    }
]

const main = () => {
    return app.listen(process.env.PORT, () => {
        console.log("Listening on PORT " + process.env.PORT);
    });
}

connectDB(main);
