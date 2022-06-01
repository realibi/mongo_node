const express = require("express");
const carsRouter = express.Router();
const models = require('./../Models.js');

carsRouter.get('/', (req, res) => {
    models.Car.find({}, (err, results) => {
        if(err) return console.log(err);
        res.send(results);
    });
});

carsRouter.post('/', (req, res) => {
    const { model, color, year } = req.body;

    const car = new models.Car({model, color, year});

    car.save(err => {
        if(err) return console.log(err);
        res.send("car saved");
    });
});

module.exports = carsRouter;
