import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("AuthContext is used outside an AuthContextProvider");
  }

  return context;
}
