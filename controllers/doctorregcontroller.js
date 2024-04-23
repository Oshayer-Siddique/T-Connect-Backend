const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require('uuid');


const User = require("../models/doctors");

async function register(req,res){
    
        const {name,email,username,password,phone,gender,age,address,specialized} = req.body;
    try{
        const userId = Math.floor(10000000 + Math.random() * 90000000);

        const newUser = new User(
            {_id: userId,name,email,username,password,phone,gender,age,address,specialized
 
          });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully',userId });


    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
    

}


async function getdoctors(req,res){
    try {
        // const doctors = await User.find();
        const doctors = await User.find({},{name : 1,specialized : 1,email:1,phone : 1}); // Projection to include only the name field
        res.json(doctors);
      } catch (error) {
        console.error("Error fetching doctors:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }

}






module.exports = {
    register,
    getdoctors
}