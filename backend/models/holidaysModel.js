import mongoose from "mongoose";

//create table for holidays
const holidaysSchema = new mongoose.Schema({

    day: {type: String, required: true},
    date: {type: String, required: true},
    holiday: {type: String, required: true},

}, {
    timestamps: true //add date
});

const Holidays = mongoose.model('Holidays', holidaysSchema);
export default Holidays;