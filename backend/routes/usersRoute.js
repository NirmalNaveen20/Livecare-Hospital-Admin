import express from 'express'
import Users from '../models/usersModel.js';
import bcrypt from 'bcryptjs'

const usersRoute = express.Router();

//get all users
usersRoute.get('/all', async(req, res) => {
    const users = await Users.find();
    res.send(users);
});

//add user
usersRoute.post('/add', async(req, res) => {

    const newUser = new Users({
        userId: req.body.userId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        mobile: req.body.mobile,
        role: req.body.role,
        roleType: req.body.roleType,
        password: bcrypt.hashSync(req.body.password)
    });

    const user = await newUser.save();
    res.send({
        userId: user.userId,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        mobile: user.mobile,
        role: user.role,
        roleType: user.roleType
    })

});

//delete user
usersRoute.delete('/delete/:id', async(req, res) => {
    try {

        await Users.findByIdAndDelete(req.params.id);
        res.status(200).json('User has been deleted!');

    } catch(error) {
        console.log('Can`t be deleted!');
    }
});

//Count users
usersRoute.get('/countUsers', async(req, res) => {
    try{ 

        const countUsers = await Users.countDocuments();
        res.status(200).json({count: countUsers});

    } catch(error) {
        console.log(error.message);    
    }
});

export default usersRoute;