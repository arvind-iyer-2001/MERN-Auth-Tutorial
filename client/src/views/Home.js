/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import WorkoutForm from '../component/WorkoutForm';
import WorkoutDetails from '../component/WorkoutDetails';
import { useFetchWorkouts } from '../hooks/workouts/useFetchWorkouts';
// import { useAuthContext } from '../hooks/auth/useAuthContext';


const Home = () => {
    const {workouts, fetchWorkouts, error} = useFetchWorkouts();
    // const { user } = useAuthContext();
    useEffect(() => {
        fetchWorkouts();
    })

    if (error) {
        return <div>{error}</div>; // Display error message
    }
    
    return (
        <div className="home">
            <div className="workouts">{
                workouts && workouts.map((workout) => ( 
                    <WorkoutDetails 
                        key={workout._id} 
                        workout={workout}
                    />
                ))
            }</div> 
            <WorkoutForm />
        </div>
    )
}

export default Home