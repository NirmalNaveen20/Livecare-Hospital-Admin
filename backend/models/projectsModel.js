import mongoose from "mongoose";

//create table for projects
const projectsSchema = new mongoose.Schema({

    clientName: {type: String, required: true},
    project: {type: String, required: true},
    projectCost: {type: Number, required: true},
    payment: {type: String, required: true, default: 'Pending'},
    status: {type: String, required: true, default: 'Submit'}

}, {
    timestamps: true //add date
});

const Projects = mongoose.model('Projects', projectsSchema);
export default Projects;