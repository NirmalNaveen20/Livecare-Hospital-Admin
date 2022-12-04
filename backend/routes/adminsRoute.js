import express from "express"
import Admins from "../models/adminsModel.js";
import bcrypt from 'bcryptjs'

const adminsRoute = express.Router();

//for login admin
adminsRoute.post('/login', async(req, res) => {

    const admin = await Admins.findOne({adminId: req.body.adminId});

    //if admin exists
    if(admin) {
        //hash password
        if(bcrypt.compareSync(req.body.adminPassword, admin.adminPassword)) {
            res.send({
                _id: admin._id,
                adminId: admin.adminId,
                adminName: admin.adminName,
                adminPassword: admin.adminPassword,
                adminIs: admin.adminIs
            });

            return;
        }
    }

    res.status(401).send({message: 'Invalid AdminId or AdminPassword!'});

});

//update admin 
adminsRoute.put('/update', async(req, res) => {
    const admin = await Admins.findById(req.body._id);
    //if admin exists
    if(admin) {
        //for all
        admin.adminId = req.body.adminId || admin.adminId;
        admin.adminName = req.body.adminName || admin.adminName;
        //only password
        if(req.body.newPassword) {
            admin.adminPassword = bcrypt.hashSync(req.body.newPassword);
        }

        const updatedAdmin = await admin.save();
        res.send({
            _id: updatedAdmin._id,
            adminId: updatedAdmin.adminId,
            adminName: updatedAdmin.adminName,
            adminIs: updatedAdmin.adminIs
        });
    } else {
        res.status(401).send({message: 'Admin not Found!'});
    }
});

export default adminsRoute;