const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema({
    lectureID : {
        type : String,
        required : true,
    },
    lectureTitle : {
        type : String,
        required : true,
    },
    lectureUrl : {
        type : String,
        required : true,
    },
    lectureDuration : {
        type : Number,
        required : true,
    },
    isPreview : {
        type : Boolean,
        default : true,
    },
    lectureOrder : {
        type : Number,
        required : true,
    }
}, { _id : false });

const chapterSchema = new mongoose.Schema({
    chapterID : {
        type : String,
        required : true,
    },
    chapterOrder : {
        type : Number,
        required : true,
    },
    chapterTitle : {
        type : String,
        required : true,
    },
    chapterContetnt : [lectureSchema],
}, { _id : false });

const CourseSchema = new mongoose.Schema({
    courseTitle : {
        type : String,
        required : true,
    },
    courseDescription : {
        type : String,
        required : true,
    },
    courseThumnail : {
        type : String,
        required : true,
    },
    cousePrice : {
        type : Number,
        required : true,
    },
    isPublished : {
        type : Boolean,
        default : true,
    },
    discount : {
        type : Number,
        required : true,
        min : 0,
        max : 100,
    },
    courseContent : [chapterSchema],
    courseRating : [
        {
            userId : {
                type : String,
            },
            rating : {
                type : Number,
                required : true,
                min : 1,
                max : 5,
            },
        }
    ],
    educator : {
        type : string ,
        ref : 'User',
        required : true,
    },
    enrolledStudents : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User',
        }
    ],
}, { timestamps : true , minimize : false });

const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;