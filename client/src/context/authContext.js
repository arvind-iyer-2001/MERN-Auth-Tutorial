import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

/**
 * This function is a reducer for the auth state.
 * 
 * The authReducer function takes two arguments: the current state and the action object.
 * The authReducer function returns a new state based on the action type.
 * 
 * @param {Object} state The previous state.
 * @param {Object} action The action object.
 * @returns {Object} The new state.
 */
export const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_AUTH":
      return {
        user: action.payload,
      };
    case "CLEAR_AUTH":
      return {
        user: null,
      };
    default:
      return state;
  }
};

/**
 * AuthContextProvider - provides the AuthContext object to the React Component Tree 
 * @param {Component} children 
 * @returns 
 */
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      dispatch({ type: 'LOGIN', payload: user }) 
    }
  }, [])

  console.log('AuthContext state:', state)

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
        { children }
    </AuthContext.Provider>
  );
};
