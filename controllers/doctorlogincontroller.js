const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const path = require("path");



const User = require("../models/doctors");


async function profile(req,res){

    const{userId} = req.params;
    const user = await User.findOne({ _id: userId });


    if(user){
        res.send({user});
    }
    else{
        res.send("Failed");
    }
    


}






async function login(req, res) {
    const { userId, password } = req.body;

    try {
        // Find the user by userId
        const user = await User.findOne({ _id: userId });

        // If user not found
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if the provided password matches the user's password
        if (user.password === password) {
            // Password matches, login successful
            res.redirect(`/tconnect/doctorprofile/${user._id}`);

            //console.log(userId);
        } else {
            // Password doesn't match
            res.status(401).json({ message: 'Invalid password' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}


module.exports = {
    login,
    profile,
}
