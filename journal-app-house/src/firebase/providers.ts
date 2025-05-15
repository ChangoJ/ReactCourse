import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleAuthProvider = new GoogleAuthProvider(); 

export const singInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleAuthProvider);
        //const credentials = GoogleAuthProvider.credentialFromResult(result);
        //console.log({ credentials });
        const {displayName, email, photoURL, uid} = result.user;

        return {
            ok: true,
            displayName, email, photoURL, uid
        }

    } catch (error:any) {
        
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage
        }
    }

}

export const registerUserWithEmailPassword = async({email,password, displayName}: {email:string, password:string, displayName:string}) => {
    try {

        const resp = await createUserWithEmailAndPassword(FirebaseAuth,email, password)
        const {uid, photoURL } = resp.user
        console.log(uid, photoURL);
        
    } catch (error:any) {
        
        return {ok: false, errorMessage: error.message}
    }
}