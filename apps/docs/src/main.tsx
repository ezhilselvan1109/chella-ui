import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, ToastProvider } from "@chellaa/ui";
import App from "./App";
import "./index.css";
import "@chellaa/ui/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="chellaa-docs-theme">
      <ToastProvider placement="top-right">
        <App />
      </ToastProvider>
    </ThemeProvider>
  </React.StrictMode>
);
