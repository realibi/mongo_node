const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarSchema = new Schema({
    model: String,
    color: String,
    year: Number
});

const UserSchema = new Schema({
    login: String,
    password: String,
    fullName: String,
    cars: [CarSchema]
});

module.exports = {
    CarSchema,
    UserSchema
}
