import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, Input } from "@heroui/react";
import { Link } from "react-router-dom";
import { PasswordInput } from "./PasswordInput";

import { AuthFormProps, FormData } from "./types";
import { loginSchema, registerSchema } from "./schemas";
import { useDispatch, useSelector } from "react-redux";
import { checkingAuthentication } from "../../../store/auth";
import { useMemo } from "react";

export const AuthForm = ({ typeForm, onSubmit }: AuthFormProps) => {
  const schema = typeForm === "Register" ? registerSchema : loginSchema;

  const dispatch = useDispatch<any>();

  const { status } = useSelector((state: any) => state.auth);
  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues:
      typeForm === "Register"
        ? { username: "", email: "", password: "", confirmPassword: "" }
        : { email: "", password: "" },
  });

  const onFormSubmit: SubmitHandler<FormData> = (data) => {
    dispatch(checkingAuthentication(data.email, data.password));
    //onSubmit(data);

    console.log("Formulario enviado:", data);
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onFormSubmit)}>
      <div className="flex flex-col">
        {typeForm === "Register" && (
          <Input
            isRequired
            classNames={{
              base: "-mb-[2px]",
              inputWrapper:
                "rounded-b-none data-[hover=true]:z-10 group-data-[focus-visible=true]:z-10",
            }}
            label="Nombre de usuario"
            placeholder="Ingresa tu usuario"
            type="text"
            variant="bordered"
            autoComplete="username"
            {...register("username")}
            errorMessage={errors.username?.message}
            isInvalid={!!errors.username}
          />
        )}
        <Input
          isRequired
          classNames={{
            base: "-mb-[2px]",
            inputWrapper: `${
              typeForm === "Login" ? "rounded-b-none" : "rounded-none"
            } data-[hover=true]:z-10 group-data-[focus-visible=true]:z-10`,
          }}
          label="Dirección de correo electrónico"
          placeholder="Ingresa tu correo electrónico"
          type="email"
          variant="bordered"
          autoComplete={typeForm === "Register" ? "email" : "username"}
          {...register("email")}
          errorMessage={errors.email?.message}
          isInvalid={!!errors.email}
        />
        <PasswordInput
          label="Contraseña"
          name="password"
          register={register}
          error={errors.password?.message}
          className={`${
            typeForm === "Login" ? "rounded-t-none" : "rounded-none"
          } data-[hover=true]:z-10 group-data-[focus-visible=true]:z-10`}
          autoComplete={
            typeForm === "Register" ? "new-password" : "current-password"
          }
        />
        {typeForm === "Register" && (
          <PasswordInput
            label="Confirmar contraseña"
            name="confirmPassword"
            register={register}
            error={errors.confirmPassword?.message}
            className="rounded-t-none data-[hover=true]:z-10 group-data-[focus-visible=true]:z-10"
            autoComplete="new-password"
          />
        )}
      </div>
      <Checkbox className="py-4">
        Estoy de acuerdo con los{" "}
        <Link className="relative z-[1] text-primary" to="#">
          Términos
        </Link>{" "}
        y{" "}
        <Link className="relative z-[1] text-primary" to="#">
          Política de privacidad
        </Link>
      </Checkbox>
      <Button
        disabled={isAuthenticating}
        color="primary"
        type="submit"
        isLoading={isSubmitting}
      >
        {typeForm === "Register" ? "Registrarse" : "Iniciar sesión"}
      </Button>
    </form>
  );
};
