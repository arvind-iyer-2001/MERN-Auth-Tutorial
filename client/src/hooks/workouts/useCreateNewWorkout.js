import {useState} from 'react';
import { useWorkoutsContext } from './useWorkoutsContext';
import { useAuthContext } from '../auth/useAuthContext';

export const useCreateNewWorkout = () => {
    const { dispatch } = useWorkoutsContext()
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);
    const { user } = useAuthContext();
    const createNewWorkout = async (title, load, reps, resetFields) => {
        if (!user){
            setError('User is not logged in, you cannot log a workout before login.')
            return;
        }
        const workout = {title, load, reps}

        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
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