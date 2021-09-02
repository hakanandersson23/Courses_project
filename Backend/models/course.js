//allows for the creaton of data schemas
const mongoose = require('mongoose')

//A schema of the course
const courseSchema = mongoose.Schema({

  courseName: {type: String, required: true},
  courseDescription:{type: String, required: true},
  startDate:{type: String, required: true},
  endDate:{type: String, required: true},
  courseFee: {type: String, required: true},
});
//creating a model of the schema and exporting it.
module.exports=mongoose.model('Course', courseSchema);


