import { createRoot } from "react-dom/client";
import "./styles.css";
import { CalendarApp } from "./CalendarApp";

import { HeroUIProvider } from "@heroui/react";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <HeroUIProvider>
      <CalendarApp />
    </HeroUIProvider>
  </BrowserRouter>
);
