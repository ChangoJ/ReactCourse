import { Divider } from "@heroui/react";
import { SocialLoginButtons } from "../components/SocialLoginButtons";
import { Link as RouterLink } from "react-router-dom";
import { ThemeToggleButton } from "../../theme/components/ThemeToggleButton";
export const AuthLayout = ({
  title,
  children,
  typeForm,
}: {
  title: string;
  children: any;
  typeForm: string;
}) => {

    const linkTo = typeForm === "Login" ? "/auth/register" : "/auth/login";
    const linkText = typeForm === "Login" ? "Crear cuenta" : "Iniciar sesión";

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      {/*  <LanguageSelector /> */}
<div className="absolute top-3 right-2">
        <ThemeToggleButton />
      </div>
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large  p-6 shadow-md  dark:bg-neutral-950 ">
        <div className="flex flex-col items-center pb-6">
          <hr />
          <p className="text-xl font-medium ">Bienvenido</p>
          <p className="text-small text-default-500">
            {title} {/*    Crear una cuenta para empezar */}
          </p>
        </div>

        {children}

        <div className="flex items-center gap-4 py-2">
          <Divider className="flex-1" />
          <p className="shrink-0 text-tiny text-default-500">OR</p>
          <Divider className="flex-1" />
        </div>
        <SocialLoginButtons typeForm={typeForm} />
        <p className="text-center text-small">
        {typeForm === "login" ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}{" "}
          <RouterLink to={linkTo}  >{linkText}</RouterLink>
        </p>
      </div>
    </div>
  );
};
