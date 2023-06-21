const Workout = require('../models/Workout');
const mongoose = require('mongoose');

const workoutsGET = async (req, res, next) => {
    try {
        const user_id = req.user._id;
        const workouts = await Workout.find({user_id}).sort({createdAt: -1});
        res.status(200).json(workouts);
    } catch (err) {
        res.status(400).json({error: err.message});
        // console.log(err);
    }
};

const workoutPOST = async (req, res, next) => {
    const {title, load, reps} = req.body
    console.log(req.body)
    let emptyFields = []

    if(!title) {
        emptyFields.push('title')
    }
    if(!load) {
        emptyFields.push('load')
    }
    if(!reps) {
        emptyFields.push('reps')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }
    
    // add doc to db
    try {
        const user_id = req.user._id;
        const workout = await Workout.create({title, load, reps, user_id})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const workoutGETbyID = (req, res, next) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    try {
        const workout = WorkoutsCollection.findById(id);
        if (!workout) {
            return res.status(404).json({error: 'No such workout exists'});
        }
        res.status(200).json(workout);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
};

const workoutPATCH = async (req, res, next) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!workout) {
        return res.status(400).json({error: 'No such workout'})
    }

    res.status(200).json(workout);
};

const workoutDELETE =  async (req, res, next) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such workout'})
    }
  
    const workout = await Workout.findOneAndDelete({_id: id})
  
    if (!workout) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    res.status(200).json(workout)
}

module.exports = {
    workoutsGET, 
    workoutPOST, 
    workoutGETbyID, 
    workoutPATCH, 
    workoutDELETE
}