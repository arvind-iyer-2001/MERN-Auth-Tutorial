import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const logout = async () => {
    setIsLoading(true);
    setError(null);

    try {
        // Perform logout logic, such as clearing authentication tokens or session
        // You can make an API request here or perform any necessary cleanup
        //   const response = await fetch('/api/user/logout', {
        //     method: 'POST',
        //     body: JSON.stringify({email, password}),
        //     headers: {
        //       'Content-Type': 'application/json'
        //     }
        //   })


        // Clear User from Local Storage
        localStorage.removeItem("user");

        // Update the Auth Context
        dispatch({ type: "CLEAR_AUTH" });

        setIsLoading(false);
        setError(null);
    } catch (error) {
        setIsLoading(false);
        setError("Failed to logout. Please try again later.");
    }
  };

  return { logout, isLoading, error };
};
