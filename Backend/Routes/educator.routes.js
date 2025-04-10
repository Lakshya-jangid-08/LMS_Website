const express = require('express');
const { updateEducator } = require('../Controllers/Educator.controller');
const EducatorRouter = express.Router();

EducatorRouter.get('/', (req, res) => {
    res.send('Educator route is working');
});

EducatorRouter.post('/updateEducator', updateEducator);

export default EducatorRouter;