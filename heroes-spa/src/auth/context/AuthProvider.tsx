import {  useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { types } from "../types/types";
import { authReducer } from "./authReducer";

const initialState = {
    logged: false,
}

const init = () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return {
        logged: !!user && typeof user.id === 'string' && typeof user.name === 'string',
        user: user || undefined,
    }
}

export const AuthProvider = ({children}: {children: React.ReactNode}) => {

    const [authState, dispatch] = useReducer(authReducer, initialState, init);


    const login = (name: string) => {

        const user = {id: '123', name: name};
        
        const action = {
            type: types.login,
            payload: user
        }
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem('user');
        const action = {type: types.logout, payload: {} }
        dispatch(action);
    }
    
    return (
    <AuthContext.Provider value={{...authState, login, logout}}>
        {children}
    </AuthContext.Provider>
  )
}

