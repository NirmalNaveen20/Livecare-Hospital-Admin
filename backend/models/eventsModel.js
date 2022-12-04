import mongoose from "mongoose";

//create table for users
const eventsSchema = new mongoose.Schema({

    startAt: {type: String, required: true},
    endAt: {type: String, required: true},
    timezoneStartAt: {type: String, required: true, default: 'Europe/Belgrade'},
    summary: {type: String, required: true},
    color: {type: String, required: true},

}, {
    timestamps: true //add date
});

const Events = mongoose.model('Events', eventsSchema);
export default Events;