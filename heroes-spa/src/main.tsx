import { createRoot } from "react-dom/client";
import { HeroUIProvider } from "@heroui/react";
import { HeroesApp } from "./HeroesApp";
import { BrowserRouter } from "react-router-dom";


import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <HeroUIProvider>
      <HeroesApp />
    </HeroUIProvider>
  </BrowserRouter>
);
