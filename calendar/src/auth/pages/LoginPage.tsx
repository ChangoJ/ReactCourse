import { Input, Button, Form } from "@heroui/react";

export const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 font-['Inter',-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif]">
      <div className="flex w-full max-w-2xl mx-4 bg-black  border-white/5 rounded-xl overflow-hidden">
        <div className="w-1/2 p-5 bg-black">
          <h2 className="text-xl font-light mb-5 text-center text-white tracking-wider uppercase">
            Iniciar Sesión
          </h2>
          <div className="space-y-2.5">
            <Form>
              <Input
                placeholder="Correo electrónico"
                type="email"
                className="w-full bg-black text-white/90  border-white/10 rounded p-2 text-sm focus:ring-1 focus:ring-white/30 outline-none transition-all placeholder:text-white/50"
              />
              <Input
                placeholder="Contraseña"
                type="password"
                className="w-full bg-black text-white/90  border-white/10 rounded p-2 text-sm focus:ring-1 focus:ring-white/30 outline-none transition-all placeholder:text-white/50"
              />
              <Button
                className="w-full bg-white/10 text-white font-light py-2 rounded- hover:bg-white/20 transition duration-200 text-sm tracking-wide"
                onPress={() => console.log("Login clickeado")}
              >
                Ingresar
              </Button>
            </Form>
          </div>
        </div>

        <div className="w-1/2 p-5 border-l bg-white">
          <h2 className="text-xl mb-5 text-center font-semibold text-black tracking-wider uppercase">
            Regístrate
          </h2>
          <div className="space-y-2.5">
            <Form>
              <Input
                placeholder="Nombre"
                className="w-full text-black/90 border-white/10 rounded p-2 text-sm focus:ring-1 focus:ring-black/30 outline-none transition-all placeholder:text-black/50"
              />
              <Input
                placeholder="Correo electrónico"
                type="email"
                className="w-full text-black/90 border-white/10 rounded p-2 text-sm focus:ring-1 focus:ring-black/30 outline-none transition-all placeholder:text-black/50"
              />
              <Input
                placeholder="Contraseña"
                type="password"
                className="w-full text-black/90 border-white/10 rounded p-2 text-sm focus:ring-1 focus:ring-black/30 outline-none transition-all placeholder:text-black/50"
              />
              <Input
                placeholder="Repetir contraseña"
                type="password"
                className="w-full text-black/90 border-black/10 rounded p-2 text-sm focus:ring-1 focus:ring-black/30 outline-none transition-all placeholder:text-black"
              />
              <Button
                className="w-full bg-black text-white font-light py-2 rounded-lg hover:bg-black/250 transition duration-200 text-sm tracking-wide"
                onPress={() => console.log("Registro clickeado")}
              >
                Crear cuenta
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
