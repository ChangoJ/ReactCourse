import { Button, Checkbox, Input } from "@heroui/react"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useState } from "react";
import { Link } from "react-router-dom"

export const AuthForm = ({ typeForm }: { typeForm?: string }) => {


    const [isVisible, setIsVisible] = useState(false);
    const [isConfirmVisible, setIsConfirmVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);
    const toggleConfirmVisibility = () => setIsConfirmVisible(!isConfirmVisible);

  return (
<form
          className="flex flex-col gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col">
           { typeForm == "Register" && <Input
              isRequired
              classNames={{
                base: "-mb-[2px]",
                inputWrapper:
                  "rounded-b-none data-[hover=true]:z-10 group-data-[focus-visible=true]:z-10",
              }}
              label="Nombre de usuario"
              name="username"
              placeholder="Ingresa tu usuario"
              type="text"
              variant="bordered"
            />}
            <Input
              isRequired
              classNames={{
                base: "-mb-[2px]",
                inputWrapper:
                  "rounded-none data-[hover=true]:z-10 group-data-[focus-visible=true]:z-10",
              }}
              label="Dirección de correo electrónico"
              name="email"
              placeholder="Ingresa tu correo electrónico"
              type="email"
              variant="bordered"
            />
            <Input
              isRequired
              classNames={{
                base: "-mb-[2px]",
                inputWrapper:
                  "rounded-none data-[hover=true]:z-10 group-data-[focus-visible=true]:z-10",
              }}
              endContent={
                <button type="button" onClick={toggleVisibility}>
                  {isVisible ? (
                    <Icon
                      className="pointer-events-none text-2xl text-default-400"
                      icon="solar:eye-closed-linear"
                    />
                  ) : (
                    <Icon
                      className="pointer-events-none text-2xl text-default-400"
                      icon="solar:eye-bold"
                    />
                  )}
                </button>
              }
              label="Contraseña"
              name="password"
              placeholder="Ingresa tu contraseña"
              type={isVisible ? "text" : "password"}
              variant="bordered"
            />
          { typeForm == "Register" &&    <Input
              isRequired
              classNames={{
                inputWrapper: "rounded-t-none",
              }}
              endContent={
                <button type="button" onClick={toggleConfirmVisibility}>
                  {isConfirmVisible ? (
                    <Icon
                      className="pointer-events-none text-2xl text-default-400"
                      icon="solar:eye-closed-linear"
                    />
                  ) : (
                    <Icon
                      className="pointer-events-none text-2xl text-default-400"
                      icon="solar:eye-bold"
                    />
                  )}
                </button>
              }
              label="Confirmar contraseña"
              name="confirmPassword"
              placeholder="Confirma tu contraseña"
              type={isConfirmVisible ? "text" : "password"}
              variant="bordered"
            /> }
          </div>
          <Checkbox className="py-4">
          Estoy de acuerdo con los&nbsp;
            <Link className="relative z-[1] text-primary"  to="#">
              Terminos
            </Link>
            &nbsp; y&nbsp;
            <Link className="relative z-[1] text-primary" to="#">
            Política de privacidad
            </Link>
          </Checkbox>
          <Button color="primary" type="submit">
          Regístrarse
          </Button>
        </form>

)
}
