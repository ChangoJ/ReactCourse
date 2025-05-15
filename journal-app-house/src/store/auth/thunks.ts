import {
  registerUserWithEmailPassword,
  singInWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email: string, password: string) => {
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
    const resp = await registerUserWithEmailPassword({
      email,
      password,
      displayName,
    });
    console.log(resp);
  };
};
