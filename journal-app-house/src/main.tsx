import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { JournalApp } from "./JournalApp.tsx";
import { BrowserRouter } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <HeroUIProvider>
      <main className="dark text-foreground bg-background">
        <JournalApp />
      </main>
      </HeroUIProvider>
    </BrowserRouter>
  </StrictMode>
);
