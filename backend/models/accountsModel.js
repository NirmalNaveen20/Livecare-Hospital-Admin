import mongoose from "mongoose";

//create table for accounts
const accountsSchema = new mongoose.Schema({

    invoiceNo: {type: String, required: true, unique: true}, //only one invoice
    clients: {type: String, required: true},
    type: {type: String, required: true},
    status: {type: Boolean, required: true, default: false},
    amount: {type: String, required: true}

}, {
    timestamps: true //add date
});

const Accounts = mongoose.model('Accounts', accountsSchema);
export default Accounts;