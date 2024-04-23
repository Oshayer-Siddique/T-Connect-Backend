const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require('uuid');


const User = require("../models/hospitals");

async function register(req,res){
    const {name,email,password,phone,address,type,license} = req.body;
    try{
        const userId = Math.floor(10000 + Math.random() * 90000);

        const newUser = new User(
            {_id: userId,name,email,password,phone,address,type,license
 
          });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully',userId });


    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
    

}

module.exports = {
    register,
}