import mongoose from "mongoose";

//create table for Employee
const employeeSchema = new mongoose.Schema({

    employeeId: {type: String, required: true, unique: true}, //only one id
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    specialization: {type: String}, //only one email
    address: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    availability: {type: String}

}, {
    timestamps: true //add date
});

const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;