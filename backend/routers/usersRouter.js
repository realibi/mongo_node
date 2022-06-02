const express = require("express");
const usersRouter = express.Router();
const models = require('./../Models.js');

usersRouter.get('/', (req, res) => {
    models.User.find({}, (err, results) => {
        if(err) return console.log(err);
        res.send(results);
    });
});

usersRouter.get('/:id', async (req, res) => {
    let id = req.params.id;
    let user = await models.User.findById(id);
    res.status(200).send(user);
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
        if(err) res.status(500).send("error");
        res.send("user saved");
    });
});

usersRouter.post('/addCar', async (req, res) => {
    const { userId, carId } = req.body;

    let car = await models.Car.findById(carId);

    let user = await models.User.findById(userId);
    user.cars.push(car);

    await models.User.findByIdAndUpdate(userId, user);
    res.send("car added");
});

module.exports = usersRouter;
