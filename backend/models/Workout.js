const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  load: {
    type: Number,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  user_id:{
    type: String,
    required: true,
    validate: {
      validator: (value) => mongoose.isValidObjectId(value),

      message: (props) => `${props.value} is not a valid Object ID`,
    },
  }
}, {timestamps: true});

module.exports = mongoose.model("Workout", WorkoutSchema);
