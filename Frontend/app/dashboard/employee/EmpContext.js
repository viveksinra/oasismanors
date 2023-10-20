'use client';
import { createContext, useEffect, useReducer, useRef,lazy } from "react"
const EntryArea = lazy(() => import("./EntryArea"));
export const EmpContext = createContext()

const initialState = {
    personalData:{fristName:"Raghav"}
 }

export const EmpProvider =(props)=>{
    const [state, dispatch] = useReducer(EmpReducer, initialState);
  
    return <EmpContext.Provider value={{state, dispatch}}> <EntryArea {...props}/></EmpContext.Provider>
}


const EmpReducer = (state, action)=>{
    switch(action.type){
        case "RESET":
            // setAuthToken(action.payload.token);
            return {...action.payload};
        case "SETPERSONAL":{
            return {   ...state, personalData:{...action.payload}}
        }
        default:
            return state;
    
    }

}

export default EmpContext