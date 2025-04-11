import { protectEducator } from '../Middlewares/authMiddleware';

const express = require('express');
const { updateEducator , addCourse } = require('../Controllers/Educator.controller');
const EducatorRouter = express.Router();
const {upload} = require('../Config/Multer');

EducatorRouter.get('/', (req, res) => {
    res.send('Educator route is working');
});

EducatorRouter.get('/updateEducator', updateEducator);
EducatorRouter.post('/add-course',upload.single('image'),protectEducator,addCourse)

export default EducatorRouter;