import { useWorkoutsContext } from './useWorkoutsContext';
import {useState} from 'react';
export const useFetchWorkouts = () => {
    // Without React Context Hooks
    // const [workouts, setWorkouts] = useState(null)
    const {workouts, dispatch} =  useWorkoutsContext();
    const [error, setError] = useState(null);
    const fetchWorkouts = async () => {
        try {
            const response = await fetch('/api/workouts');
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