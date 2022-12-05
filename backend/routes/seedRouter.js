import express from 'express'
import data from '../data.js';
import Accounts from '../models/accountsModel.js';
import Activity from '../models/activityModel.js';
import Admins from '../models/adminsModel.js';
import Departments from '../models/departmentsModel.js';
import Employee from '../models/employeeModel.js';
import Projects from '../models/projectsModel.js';
import Events from '../models/eventsModel.js';
import Users from '../models/usersModel.js';
import Holidays from '../models/holidaysModel.js';

const seedRouter = express.Router();

//import all data into db
seedRouter.get('/', async(req, res) => {
    
    // //Seed Admins into DB
    // await Admins.remove({});
    // const createdAdmins = await Admins.insertMany(data.admins);

    // //Seed Users into DB
    // await Users.remove({});
    // const createdUsers = await Users.insertMany(data.users);

    // //Seed Departments into DB
    // await Departments.remove({});
    // const createdDepartments = await Departments.insertMany(data.departments);

    // //Seed Employee into DB
    // await Employee.remove({});
    // const createdEmployee = await Employee.insertMany(data.employee);

    // //Seed Activities into DB
    // await Activity.remove({});
    // const createdActivity = await Activity.insertMany(data.activity);

    //Seed Holidays into DB
    // await Holidays.remove({});
    // const createdHolidays = await Holidays.insertMany(data.holidays);

    // //Seed Accounts into DB
    await Accounts.remove({});
    const createdAccounts = await Accounts.insertMany(data.accounts);

    // //Seed Events into DB
    // await Events.remove({});
    // const createdEvents = await Events.insertMany(data.events);

    //Seed Projects into DB
    // await Projects.remove({});
    // const createdProjects = await Projects.insertMany(data.projects);

    //res.send({createdAdmins, createdUsers, createdDepartments, createdEmployee, createdActivity, createdHolidays, createdAccounts, createdEvents, createdProjects});

    res.send({createdAccounts});
});

export default seedRouter;