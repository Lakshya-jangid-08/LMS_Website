import { clerkClient } from '@clerk/express';
const Course = require('../models/Course.model'); // Assuming you have a Course model
const {v2: cloundary} = require('../Config/Cloundinary'); // Assuming you have a Cloudinary configuration file
const updateEducator = async (req, res) => {
    try {
        const userId = req.auth.userId; // Assuming you have a way to get the userId from the request
        await clerkClient.users.updateUserMetadata(userId, {
            public_metadata: {
                role: 'educator',
            },
        });
        res.json({ message: 'You can now create courses', success: true });
        console.log('Educator updated successfully');
    } catch (error) {
        console.error('Error updating educator:', error);
        console.log('Error updating educator:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

const addCourse = async (req, res) => {
    try {
        const { courseData } = req.body;
        const imageFile = req.file; // Assuming you're using multer for file uploads
        const educatorId = req.auth.userId; // Assuming you have a way to get the userId from the request

        if(!imageFile) {
            return res.status(400).json({ message: 'Image file is required' });
        }

        const parsedCourseData = JSON.parse(courseData); // Parse the course data from the request body
        parsedCourseData.educator = educatorId; // Add the educatorId to the course data

        const newCourse = await Course.create(parsedCourseData); // Save the course data to the database
        const imgUpload = await cloundary.uploader.upload(imageFile.path);

        newCourse.courseThumnail = imgUpload.secure_url; // Set the image URL in the course data
        await newCourse.save(); // Save the updated course data to the database

        res.json({ message: 'Course added successfully', success: true });
    } catch (error) {
        console.error('Error adding course:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    updateEducator,
    addCourse    
};