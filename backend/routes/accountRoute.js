import express from 'express'
import Accounts from '../models/accountsModel.js';

const accountsRoute = express.Router();

//get all accounts
accountsRoute.get('/all', async(req, res) => {
    const users = await Accounts.find();
    res.send(users);
});

//delete account


//Count accounts
accountsRoute.get('/countAccounts', async(req, res) => {
    try{ 

        const countAccounts = await Accounts.countDocuments();
        res.status(200).json({count: countAccounts});

    } catch(error) {
        console.log(error.message);    
    }
});

export default accountsRoute;