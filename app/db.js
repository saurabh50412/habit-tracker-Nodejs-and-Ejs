const dotenv = require("dotenv");

dotenv.config({ path: "config.env" });

const mongoose = require('mongoose');

exports.connectMongoose =()=>{
    mongoose.set("strictQuery", false);
    mongoose.connect('mongodb://localhost:27017/Habit_Tracker', { useNewUrlParser: true })
    .then((e)=>console.log("Connected to Mongodb => Habit-Tracker"))
    .catch((e)=>console.log("Not Connect Mongodb", e));
}
