const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const {connectToDatabase} = require('./config/database');
const workoutRoutes = require('./routes/workoutRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
app.get('/', (req, res) => {
    res.json({message: "Welcome to the App!"})
});


app.use('/api/user', userRoutes);
app.use('/api/workouts', workoutRoutes);

connectToDatabase(
    () => {
        app.listen(PORT, () => {
            console.log(`Express Server App listening on ${process.env.PORT}`);
        })
    }
);