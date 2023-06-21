import { useState } from "react";
import { useCreateNewWorkout } from "../hooks/workouts/useCreateNewWorkout";

const WorkoutForm = () => {
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');

  const {createNewWorkout, error, emptyFields} = useCreateNewWorkout();

  const resetFields = () => {
    setTitle('');
    setLoad('');
    setReps('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await createNewWorkout(title, load, reps, resetFields);
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New Workout</h3>

        <label>Exercise Title:</label>
        <input 
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className={emptyFields.includes('title') ? 'error' : ''}
        />

        <label>Load (in kg):</label>
        <input 
            type="number"
            onChange={(e) => setLoad(e.target.value)}
            value={load}
            className={emptyFields.includes('load') ? 'error' : ''}
        />

        <label>Reps:</label>
        <input 
            type="number"
            onChange={(e) => setReps(e.target.value)}
            value={reps}
            className={emptyFields.includes('reps') ? 'error' : ''}
        />

        <button>Add Workout</button>
        {error && <div className="error">{error}</div>}
    </form>
  );
}

export default WorkoutForm