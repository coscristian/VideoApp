import Express from "express";

const app = Express();
const PORT = 5000;
app.use(Express.json());

const main = () => {
    return app.listen(PORT, () => {
        console.log("Listening on PORT " + PORT);
    });
}

main();