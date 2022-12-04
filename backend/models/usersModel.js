import mongoose from "mongoose";

//create table for users
const usersSchema = new mongoose.Schema({

    userId: {type: String, required: true, unique: true}, //only one id
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true}, //only one email
    mobile: {type: String, required: true},
    role: {type: String, required: true},
    roleType: {type: String, required: true},
    password: {type: String, required: true}

}, {
    timestamps: true //add date
});

const Users = mongoose.model('Users', usersSchema);
export default Users;