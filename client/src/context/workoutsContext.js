import {createContext, useReducer } from "react";

export const WorkoutsContext = createContext();


/**
 * This function is a reducer for the workouts state.
 * 
 * Here are some additional details about the workoutReducer function:
 * 
 * The workoutReducer function is a reducer for the workouts state. This means that it is used to update the workouts state when an action is dispatched.
 * 
 * The workoutReducer function takes two arguments: the current state and the action object. The current state is the state of the workouts before the action is dispatched. The action object is an object that describes the action that is being dispatched.
 * 
 * The workoutReducer function returns a new state. The new state is the state of the workouts after the action is dispatched.
 * 
 *  @param {Object} state The reliable previous state.
 * @param {Object} action The action object.
 * @returns {Object} The new state.
 */
export const workoutsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            // Returns the payload because the payload is going to be all the workouts
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            // Returns the payload with the previous state of workouts
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            // Returns the payload with the previous state of workouts
            return {
                workouts: state.workouts.filter(workout => workout._id !== action.payload._id)
            }
        default:
            // Returns the previous state
            return state
    }
}

/**
 * WorkoutContextProvider - provides the WorkoutContext object to the React Component Tree 
 * @param {Component} children 
 * @returns 
 */
export const WorkoutsContextProvider = ({children}) => {    
    /*
        The useReducer function is a React hook that allows you to manage complex state in your components. It takes two arguments: a reducer function and an initial state. The reducer function is a function that takes the current state and an action as input and returns the new state. The action is an object that describes the change that is being made to the state.
        The useReducer function returns an array of two values: the current state and a dispatch function. The dispatch function is a function that you can use to update the state. When you call the dispatch function, you pass it an action object. The reducer function will then be called with the current state and the action object as input and will return the new state.
        The useReducer function is a more powerful way to manage state than the useState function. The useState function can only be used to manage state that is not dependent on other state. The useReducer function can be used to manage state that is dependent on other state.
    */
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })


    return (
        <WorkoutsContext.Provider value={{...state, dispatch}}>
            {children}
        </WorkoutsContext.Provider>
    )
}