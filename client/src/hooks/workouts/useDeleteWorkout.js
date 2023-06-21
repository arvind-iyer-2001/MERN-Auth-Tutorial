import { useWorkoutsContext } from "./useWorkoutsContext" 
export const useDeleteWorkout = () => {
    
    const { dispatch } = useWorkoutsContext()
    const deleteWorkout = async (workout) => {
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()
      
        if (response.ok) {
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }

    return {deleteWorkout};
}
