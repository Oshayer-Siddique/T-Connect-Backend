// Importing required modules
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const multer = require('multer');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const fs = require('fs');
const app = express();

dotenv.config();



// Define a route
const mongourl = process.env.DB;


//console.log(mongourl);



mongoose
  .connect(mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });



app.use(express.json());

app.use(cors({
  origin : "http://localhost:3000",
}));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");



// Set storage engine
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, __dirname + "/uploads");
    },
    // Sets file(s) to be saved in uploads folder in same directory
    filename: function (req, file, callback) {
      callback(null, file.originalname);
    },
    // Sets saved filename(s) to be original filename(s)
  });
  
  // Initialize multer with storage configuration
  
  // // Set saved storage options:
  const upload = multer({ storage: storage });

  // Upload endpoint
  app.post("/tconnect/upload", upload.array("files", 5), async (req, res) => {
    // Middleware setup to handle multiple file uploads with the field name "files"
  
    try {
      let documents = req.files; // Access the uploaded files details from the request object
  
      // Do something with the uploaded files, such as saving them to a database or processing them
  
      res.status(200).send({ message: "Files Upload OK", files: documents }); // Send response indicating successful file upload along with files details
    } catch (error) {
      res.status(500).send({ message: "Error uploading files", error: error.message }); // Send error response if an error occurs during file upload
    }
  });


// Endpoint to get all files


// Endpoint to download all files
// Endpoint to get all files
app.get('/tconnect/files', (req, res) => {
  const directoryPath = path.join(__dirname, 'uploads');

  // Read the directory
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    res.json({ files });
  });
});


app.get('/tconnect/files/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'uploads', filename);

  // Check if the file exists
  fs.exists(filePath, (exists) => {
    if (exists) {
      // Stream the file to the client
      const fileStream = fs.createReadStream(filePath);
      fileStream.pipe(res);
    } else {
      res.status(404).send('File not found');
    }
  });
});





app.get('/',(req,res)=>{
  res.send("Is IT OKK::??");

})


const RegisterRouter = require('./routers/patientRegRouter');
const LoginRouter = require('./routers/patientlogrouter');
const HospitalRouter = require('./routers/hospitalRegRouter');
const HospitalLoginRouter = require('./routers/hospitallogrouter');
const DoctorRegRouter = require('./routers/doctorregrouter');
const DoctorLoginRouter = require('./routers/doctorlogrouter');
const AdminRouter = require('./routers/adminrouter');




app.use('/',RegisterRouter);
app.use('/',LoginRouter);
app.use('/',HospitalRouter);
app.use('/',HospitalLoginRouter);
app.use('/',DoctorRegRouter);
app.use('/',DoctorLoginRouter);
app.use('/',AdminRouter);






// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
