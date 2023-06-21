import { useWorkoutsContext } from './useWorkoutsContext';
import {useState} from 'react';
import { useAuthContext } from '../auth/useAuthContext';

export const useFetchWorkouts = () => {
    // Without React Context Hooks
    // const [workouts, setWorkouts] = useState(null)
    const {workouts, dispatch} =  useWorkoutsContext();
    const [error, setError] = useState(null);
    const { user } = useAuthContext();

    const fetchWorkouts = async () => {
        try {
            if (!user){
                setError("User is not logged in. Please login to access your workouts.");
                return;
            }
            const response = await fetch('/api/workouts', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const json = await response.json();

            if( response.ok){
                // Without React Context Hooks
                // setWorkouts(json);
                // console.log(json);
                dispatch({type: 'SET_WORKOUTS', payload: json});
            }
        } catch(e) {
            setError("Failed to fetch workouts. Please try again later.");
        }
    }
    return {workouts, fetchWorkouts, error};
}