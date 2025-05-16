import { CircularProgress } from "@heroui/react";
import { ThemeToggleButton } from "../../theme/components/ThemeToggleButton";

export const CheckingAuth = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      {/*  <LanguageSelector /> */}
      <div className="absolute top-3 right-2">
        <ThemeToggleButton />
      </div>
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large  p-6 shadow-md  dark:bg-neutral-950 ">
        <div className="flex flex-col items-center pb-6">
          <hr />
          <p className="text-xl font-medium ">Cargando</p>
          <p className="text-sm text-default-500 mt-5">
            Espere un momento mientras verificamos su cuenta {/*    Crear una cuenta para empezar */}
          </p>
        </div>
        <div className="flex w-full items-center justify-center">

        <CircularProgress aria-label="Loading..." color="warning" />
        </div>
      </div>
    </div>
  );
};
