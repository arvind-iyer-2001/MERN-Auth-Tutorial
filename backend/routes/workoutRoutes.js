const { Router }  = require('express');
const router = new Router();
const {
    workoutsGET, 
    workoutPOST, 
    workoutGETbyID, 
    workoutPATCH, 
    workoutDELETE
} = require('../controllers/workoutContollers');

// GET workout data by ID
router.get('/:id', workoutGETbyID);

// GET all workouts data
router.get('/', workoutsGET);

// POST workout data
router.post('/', workoutPOST);

// PATCH workout data
router.patch('/:id', workoutPATCH);

// DELETE a workout from database
router.delete('/:id', workoutDELETE);

module.exports = router;