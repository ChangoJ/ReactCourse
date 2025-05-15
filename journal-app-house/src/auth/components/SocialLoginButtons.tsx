import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { startGoogleSignIn } from "../../store/auth";
import { useMemo } from "react";

export const SocialLoginButtons = ({ typeForm }: { typeForm?: string }) => {
  const dispatch = useDispatch<any>();

  const { status } = useSelector((state: any) => state?.auth);

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const handleSocialLogin = (provider: "google" | "github") => {
    dispatch(startGoogleSignIn());
  };

  return (
    <div className="flex flex-col gap-2">
      <Button
        disabled={isAuthenticating}
        onPress={() => handleSocialLogin("google")}
        startContent={<Icon icon="flat-color-icons:google" width={24} />}
        variant="bordered"
      >
        {typeForm === "Register"
          ? "Regístrate con Google"
          : "Inicia sesión con Google"}
      </Button>
      <Button
        disabled={isAuthenticating}
        onPress={() => handleSocialLogin("github")}
        startContent={
          <Icon className="text-default-500" icon="fe:github" width={24} />
        }
        variant="bordered"
      >
        {typeForm === "Register"
          ? "Regístrate con Github"
          : "Inicia sesión con Github"}
      </Button>
    </div>
  );
};
