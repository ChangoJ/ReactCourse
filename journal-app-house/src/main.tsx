import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { JournalApp } from "./JournalApp.tsx";
import { BrowserRouter } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "./theme/context/ThemeContext.tsx";

import { Provider } from "react-redux";
import { store } from "./store";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <Provider store={store}>
    <ThemeProvider>
        <BrowserRouter>
          <HeroUIProvider>
            <main className="min-h-screen text-foreground bg-background transition-colors">
              <JournalApp />
            </main>
          </HeroUIProvider>
        </BrowserRouter>
    </ThemeProvider>
      </Provider>
  </StrictMode>
);
