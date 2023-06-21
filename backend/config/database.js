require('dotenv').config();
const mongoose = require('mongoose');

let db = null;
function connectToDatabase(callbackFunction) {
    mongoose.connect(process.env.MONGO_URI).then(
        async (conn) => {
            // const db = conn.connection.db;
            // const workoutCollection = db.collection('workouts');
            // const workout = await workoutCollection.findOne({title:"Hip Thrust"});
            // console.log(workout);
            console.log('Connected to MongoDB database');
            callbackFunction();
            
        }
    ).catch(err => {
        console.log('Error in connection with MongoDB database');
    });
}

module.exports = {connectToDatabase}
