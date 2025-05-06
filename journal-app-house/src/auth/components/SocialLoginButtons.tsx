import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const SocialLoginButtons = ( { typeForm }: { typeForm?: string } ) => {
  return (
    <div className="flex flex-col gap-2">
      <Button
        startContent={<Icon icon="flat-color-icons:google" width={24} />}
        variant="bordered"
      >
       {typeForm === "Register"   ?   "Regístrate con Google" : "Inicia sesión con Google"}
      </Button>
      <Button
        startContent={
          <Icon className="text-default-500" icon="fe:github" width={24} />
        }
        variant="bordered"
      >
        {typeForm === "Register"   ? "Regístrate con Github" : "Inicia sesión con Github"}
      </Button>
    </div>
  );
};