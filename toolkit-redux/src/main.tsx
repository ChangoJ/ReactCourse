import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { PokemonApp } from "./PokemonApp.tsx";
import { TodoApp } from "./TodoApp.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
   <TodoApp />
   {/*  <PokemonApp /> */}
    {/* <App /> */}
  </Provider>
);
