const express = require("express");
const carsRouter = express.Router();
const models = require('./../Models.js');

carsRouter.get('/', (req, res) => {
    models.Car.find({}, (err, results) => {
        if(err) return console.log(err);
        res.send(results);
    });
});

carsRouter.get('/:id', async (req, res) => {
    let id = req.params.id;
    let car = await models.Car.findById(id);
    res.status(200).send(car);
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
