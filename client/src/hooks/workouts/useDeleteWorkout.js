import { useWorkoutsContext } from "./useWorkoutsContext";
import { useAuthContext } from '../auth/useAuthContext';

export const useDeleteWorkout = () => {
    const { user } = useAuthContext();
    const { dispatch } = useWorkoutsContext()
    const deleteWorkout = async (workout) => {
        if (!user){
            return;
        }
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE',
            headers: {                
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
      
        if (response.ok) {
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }

    return {deleteWorkout};
}
