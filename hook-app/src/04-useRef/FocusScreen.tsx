import { useRef } from "react";

export const FocusScreen = () => {

  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    inputRef.current!.select();
  };

  return (
    <div className="container mt-4">
      <h1>Pantalla de Enfoque</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control mb-3"
        aria-label="Nombre"
      />

      <button 
        className="btn btn-primary"
        onClick={onClick}
        type="button"
      >
        Enfocar
      </button>
    </div>
  );
};