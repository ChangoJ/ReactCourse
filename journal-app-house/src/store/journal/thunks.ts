import { doc } from "firebase/firestore/lite";

export const startNewNote = () => {
    return async (dispatch:any, getState:any) =>{
        
        console.log(getState())

        const {uid} = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const newDoc = doc


    }
}