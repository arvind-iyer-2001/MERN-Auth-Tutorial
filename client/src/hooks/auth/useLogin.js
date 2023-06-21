import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const { dispatch } = useAuthContext();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null)

    const login = async (email, password) => {
        setIsLoading(true);
        setError(null);
    
        const response = await fetch('/api/user/login', {
          method: 'POST',
          body: JSON.stringify({email, password}),
          headers: {
            'Content-Type': 'application/json'
          }
        })
    
        const json = await response.json()
    
        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }
        if (response.ok) {
            console.log('User has logged in', json);
            
            // Save User to Local Storage
            localStorage.setItem('user', JSON.stringify(json));

            // Update the Auth Context
            dispatch({type: 'SET_AUTH', payload: json});

            setIsLoading(false);
            setError(null);
        }
    }

    return {login, isLoading, error}; 
}