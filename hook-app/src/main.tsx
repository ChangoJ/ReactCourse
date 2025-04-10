import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

/* import { CallbackHook } from './06-memos/CallbackHook'
import { Padre } from './07-tarea-memo/Padre'
import { TodoApp } from './08-UseReducer/TodoApp' */
import { MainApp } from "./09-useContext/MainApp";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <MainApp />
    </StrictMode>
  </BrowserRouter>
);
