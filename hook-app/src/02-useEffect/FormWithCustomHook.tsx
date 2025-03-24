import { useEffect, useState } from "react";
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onResetForm, onInputChange, username, email, password } = useForm({
    username: "",
    email: "",
    password: "",
  });

  /* const { username, email, password } = formState;
 */


  useEffect(() => {
    // console.log('useEffect called');
  }, []);

  useEffect(() => {
    // console.log('formState Changed');
  }, [formState]);

  useEffect(() => {
    // console.log('Email Changed');
  }, [email]);

  return (
    <>
      <div>
        <h1>Formulario con Custom Hook</h1>
      </div>
      <hr />
      <div>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Username"
          name="username"
          value={username}
          onChange={onInputChange}
        />
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onInputChange}
        />
        <input
          type="password"
          className="form-control mt-2"
          placeholder="Contraseña"
          name="password"
          value={password}
          onChange={onInputChange}
        />
      </div>


      <button  onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>

      {/*  { (username === "strider2") && <Message /> } */}
    </>
  );
};
