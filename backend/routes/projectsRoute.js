import express from 'express'
import Projects from '../models/projectsModel.js';

const projectsRoute = express.Router();

//get all projects
projectsRoute.get('/all', async(req, res) => {
    const projects = await Projects.find();
    res.send(projects);
});

export default projectsRoute;