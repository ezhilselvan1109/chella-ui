import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./theme";
import App from "./App";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="chella-theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
