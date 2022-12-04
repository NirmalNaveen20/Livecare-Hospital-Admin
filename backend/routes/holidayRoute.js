import express from 'express'
import Holidays from '../models/holidaysModel.js';

const holidaysRoute = express.Router();

//get all holidays
holidaysRoute.get('/all', async(req, res) => {
    const holidays = await Holidays.find();
    res.send(holidays);
});

//Count users
holidaysRoute.get('/countHolidays', async(req, res) => {
    try{ 

        const countHolidays = await Holidays.countDocuments();
        res.status(200).json({count: countHolidays});

    } catch(error) {
        console.log(error.message);    
    }
});

export default holidaysRoute;
