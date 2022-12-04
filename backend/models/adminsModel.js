import mongoose from "mongoose";

//create table for admins
const adminsSchema = new mongoose.Schema({

    adminId: {type: String, required: true, unique: true}, //only one id 
    adminName: {type: String, required: true},
    adminPassword: {type: String, required: true},
    adminIs: {type: Boolean, required: true, default: true}

}, {
    timestamps: true //add date
});

const Admins = mongoose.model('Admins', adminsSchema);
export default Admins;