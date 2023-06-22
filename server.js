import Express from "express";

const app = Express();
const PORT = 5000;
app.use(Express.json());


app.post('/registerUser', (req, res) => {
    const userInfo = req.body;
    console.log(userInfo);
    res.send("Hello");
});


const main = () => {
    return app.listen(PORT, () => {
        console.log("Listening on PORT " + PORT);
    });
}

main();