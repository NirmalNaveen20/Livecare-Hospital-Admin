import mongoose from "mongoose";

//create table for departments
const departmentsSchema = new mongoose.Schema({

    departmentName: {type: String, required: true, unique: true}, //only one name
    departmentHead: {type: String, required: true},
    departmentEmail: {type: String, required: true},
    departmentPhone: {type: String, required: true},
    totalEmployee: {type: Number, required: true},

}, {
    timestamps: true //add date
});

const Departments = mongoose.model('Departments', departmentsSchema);
export default Departments;