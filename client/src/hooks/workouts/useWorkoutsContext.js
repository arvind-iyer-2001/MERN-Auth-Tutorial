import { WorkoutsContext } from "../../context/workoutsContext";
import { useContext } from "react";

export const useWorkoutsContext = () =>{
    const context = useContext(WorkoutsContext);

    if(!context) {
        throw new Error("WorkoutsContext is used outside a WorkoutsContextProvider");
    }

    return context;
}