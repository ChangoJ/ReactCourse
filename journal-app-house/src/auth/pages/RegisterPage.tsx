
import { AuthForm } from "../components/AuthForm";
import { SocialLoginButtons } from "../components/SocialLoginButtons";
import { Divider } from "@heroui/react";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
 

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
    {/*  <LanguageSelector /> */}

      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large">
        <div className="flex flex-col items-center pb-6">
          <hr />
          <p className="text-xl font-medium ">Bienvenido</p>
          <p className="text-small text-default-500">
            Crear una cuenta para empezar
          </p>
        </div>

        <AuthForm typeForm="Register"/>

        <div className="flex items-center gap-4 py-2">
          <Divider className="flex-1" />
          <p className="shrink-0 text-tiny text-default-500">OR</p>
          <Divider className="flex-1" />
        </div>
        <SocialLoginButtons typeForm="Register" />
        <p className="text-center text-small">
          ¿No tienes cuenta?&nbsp;
          <Link to="/auth/login">Registrarse</Link>
        </p>
      </div>
    </div>
  );
};
