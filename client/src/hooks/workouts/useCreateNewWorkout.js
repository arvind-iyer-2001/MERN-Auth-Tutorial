import {useState} from 'react';
import { useWorkoutsContext } from './useWorkoutsContext';

export const useCreateNewWorkout = () => {
    const { dispatch } = useWorkoutsContext()
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const createNewWorkout = async (title, load, reps, resetFields) => {

        const workout = {title, load, reps}

        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            resetFields();
            setError(null)
            setEmptyFields([])
            console.log('new workout added', json)
            dispatch({type: 'CREATE_WORKOUT', payload: json})
        }
    }

    return {createNewWorkout, error, emptyFields}
  
}