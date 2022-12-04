import express from 'express'
import Events from '../models/eventsModel.js';

const eventsRoute = express.Router();

//get all events
eventsRoute.get('/all', async(req, res) => {
    const events = await Events.find();
    res.send(events);
});

//add events
eventsRoute.post('/add', async(req, res) => {

    const newEvent = new Events({
        startAt: req.body.startDate,
        endAt: req.body.endDate,
        summary: req.body.summary,
        color: req.body.color
    });

    const event = await newEvent.save();
    res.send({
        startAt: event.startAt,
        endAt: event.endAt,
        summary: event.summary,
        color: event.color
    })

});


//Count users
eventsRoute.get('/countEvents', async(req, res) => {
    try{ 

        const countEvents = await Events.countDocuments();
        res.status(200).json({count: countEvents});

    } catch(error) {
        console.log(error.message);    
    }
});

export default eventsRoute;