import mongoose from "mongoose";

//create table for acitivities
const activitySchema = new mongoose.Schema({

    title: {type: String, required: true},
    message: {type: String, required: true},
    author: {type: String, required: true},
    isAdmin: {type: String, required: true, default: true}

}, {
    timestamps: true //add date
});

const Activity = mongoose.model('Activity', activitySchema);
export default Activity;