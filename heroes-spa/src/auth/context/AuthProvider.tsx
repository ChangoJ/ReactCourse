import {  useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { AuthReducer } from "./AuthReducer";
import { types } from "../types/types";

const initialState = {
    logged: false,
}

const init = () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return {
        logged: !!user,
        user: user,
    }
}

export const AuthProvider = ({children}: {children: React.ReactNode}) => {

    const [authState, dispatch] = useReducer(AuthReducer, initialState, init);


    const login = (name: string) => {

        const user = {id: '123', name: name};
        
        const action = {
            type: types.login,
            payload: user
        }
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(action);
    }

    
    
    return (
    <AuthContext.Provider value={{...authState, login}}>
        {children}
    </AuthContext.Provider>
  )
}

