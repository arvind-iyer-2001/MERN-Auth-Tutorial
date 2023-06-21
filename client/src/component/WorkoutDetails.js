import { useDeleteWorkout } from '../hooks/workouts/useDeleteWorkout'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import React from 'react'

const WorkoutDetails = ({workout}) => {    
    const { deleteWorkout } = useDeleteWorkout();

    const handleClick = async () => {
      deleteWorkout(workout);
    }
    return (
        <div className="workout-details">
          <h4>{workout.title}</h4>
          <p><strong>Load (kg): </strong>{workout.load}</p>
          <p><strong>Reps: </strong>{workout.reps}</p>
          <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
          <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
      )
}

export default WorkoutDetails