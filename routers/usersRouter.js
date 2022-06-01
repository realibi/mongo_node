const express = require("express");
const usersRouter = express.Router();
const models = require('./../Models.js');

usersRouter.get('/', (req, res) => {
    models.User.find({}, (err, results) => {
        if(err) return console.log(err);
        res.send(results);
    });
});

usersRouter.post('/', (req, res) => {
    const { login, password, fullName } = req.body;

    const user = new models.User({
        login: login,
        password: password,
        fullName: fullName,
        cars: []
    });

    user.save(err => {
        if(err) return console.log(err);
        res.send("user saved");
    });
});

usersRouter.post('/addCar', async (req, res) => {
    const { userId, car } = req.body;

    let user = await models.User.findById(userId);
    user.cars.push(car);

    await models.User.findByIdAndUpdate(userId, user);
    res.send("car added");
});

module.exports = usersRouter;
