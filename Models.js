const mongoose = require("mongoose");
const schemas = require("./Schemas.js");

const Car = mongoose.model("Car", schemas.CarSchema);
const User = mongoose.model("User", schemas.UserSchema);

module.exports = {
    Car,
    User
}
