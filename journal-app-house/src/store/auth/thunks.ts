import {
  loginWithEmailPassword,
  LogoutFirebase,
  registerUserWithEmailPassword,
  singInWithGoogle,
} from "../../firebase/providers";
import { clearNotesLogout } from "../journal";
import {
  checkingCredentials,
  clearErrorMessage,
  login,
  logout,
} from "./authSlice";

export const checkingAuthentication = () => {
  return async (dispatch: any) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch: any) => {
    dispatch(checkingCredentials());
    const result = await singInWithGoogle();

    if (!result.ok) {
      return dispatch(logout((await result).errorMessage));
    }

    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}: {
  email: string;
  password: string;
  displayName: string;
}) => {
  return async (dispatch: any) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, errorMessage } =
      await registerUserWithEmailPassword({
        email,
        password,
        displayName,
      });
    console.log("eRROR", errorMessage, ok);
    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ uid, displayName, email, photoURL }));
  };
};

export const startLoginWithEmailPassword = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return async (dispatch: any) => {
    dispatch(checkingCredentials());
    const { ok, uid, displayName, photoURL, errorMessage } =
      await loginWithEmailPassword({
        emailP: email,
        password,
      });
    console.log("eRROR", errorMessage, ok);
    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ uid, displayName, email, photoURL }));
  };
};

export const clearErrors = () => {
  return async (dispatch: any) => {
    dispatch(clearErrorMessage());
  };
};

export const startLogout = () => {
  return async (dispatch: any) => {
    await LogoutFirebase();
    dispatch(clearNotesLogout());
    dispatch(logout(null));
  };
};
