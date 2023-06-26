import Express from "express";

const userRoutes = Express.Router();

userRoutes.route('/registerUser').post((req, res) => {
    const userInfo = req.body;
    console.log(userInfo);
    res.send("SigIn user");
});

userRoutes.route('/users').get((req, res) => {
    // Get all registered users
    res.send('Showing all registered users');
});

userRoutes.route('/deleteUser/:id').patch((req, res) => {
    // Delete user = Change user state
});

export default userRoutes;
