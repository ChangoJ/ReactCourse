import { Button } from "@heroui/react";

export const Navbar = () => {
  return (
    <nav className="w-full bg-black border-b border-white/5 font-['Inter',-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif] text-white">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        <div className="flex items-center space-x-8">
          <a
            href="#"
            className="text-lg font-light tracking-wider uppercase hover:text-white/70 transition duration-200"
          >
            Inicio
          </a>
          <a
            href="#"
            className="text-sm font-light tracking-wide hover:text-white/70 transition duration-200"
          >
            Perfil
          </a>
          <a
            href="#"
            className="text-sm font-light tracking-wide hover:text-white/70 transition duration-200"
          >
            Configuración
          </a>
        </div>
        <Button
          className="bg-white/10 text-white font-light py-1.5 px-4 rounded text-sm tracking-wide hover:bg-white/20 transition duration-200"
          onPress={() => console.log("Salir clickeado")}
        >
          Salir
        </Button>
      </div>
    </nav>
  );
};
