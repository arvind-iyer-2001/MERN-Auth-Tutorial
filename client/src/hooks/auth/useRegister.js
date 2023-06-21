import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useRegister = () => {
    const { dispatch } = useAuthContext();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null)

    const register = async (email, password) => {
        setIsLoading(true);
        setError(null);
    
        const response = await fetch('/api/user/register', {
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
            console.log('New User has been created', json);
            
            // Save User to Local Storage
            localStorage.setItem('user', JSON.stringify(json));

            // Update the Auth Context
            dispatch({type: 'SET_AUTH', payload: json});

            setIsLoading(false);
            setError(null);
        }
    }

    return {register, isLoading, error}; 
}