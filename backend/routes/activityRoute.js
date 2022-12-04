import express from 'express'
import Activity from '../models/activityModel.js';

const activityRoute = express.Router();

//get all activities
activityRoute.get('/all', async(req, res) => {
    const activities = await Activity.find();
    res.send(activities);
});

//add activities
activityRoute.post('/add', async(req, res) => {

    const newActivity= new Activity({
        title: req.body.title,
        message: req.body.message,
        author: req.body.author
    });

    const activity = await newActivity.save();
    res.send({
        title: activity.title,
        message: activity.message,
        author: activity.author,
        isAdmin: activity.isAdmin
    })

});

export default activityRoute;