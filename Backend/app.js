//Using express to send requests.
const express = require('express');
//to handle retrived data.
const bodyParser = require('body-parser');
const Course = require('./models/course')
const mongoose = require('mongoose');

const app = express();
//connecting to the database
mongoose.connect("mongodb+srv://hakan:" + process.env.MONGO_ATLAS_PW + "@cluster0.pyxbz.mongodb.net/Courses?retryWrites=true&w=majority")
.then(()=>{
  console.log("Connected to the databbase!");
}). catch(()=>{
  console.log("Connection failed.");
});
app.use(bodyParser.json());

//Middleware for handling cors errors.
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,OPTIONS");
next();
});

app.post('/api/courses',(req,res,next)=>{
  //instantiating the course via the courseModel. Allows for saving user input through the new Course object.
  const course = new Course({
    courseName: req.body.courseName,
    courseDescription: req.body.courseDescription,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    courseFee: req.body.courseFee
  });
  course.save();
  res.status(201).json({
    message: 'added a pist!'
  });
});
//retrieving course data from the database
app.get('/api/courses', (req,res,next)=>{
  Course.find().then(data =>{
    res.status(200).json({
      message: "got the data",
      courses: data
    });
  });


});


module.exports = app;
