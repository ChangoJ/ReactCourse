import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { JournalApp } from "./JournalApp.tsx";
import { BrowserRouter } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "./theme/context/ThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
    <BrowserRouter>
      <HeroUIProvider>
      <main className="min-h-screen text-foreground bg-background transition-colors">
        <JournalApp />
      </main>
      </HeroUIProvider>
    </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
