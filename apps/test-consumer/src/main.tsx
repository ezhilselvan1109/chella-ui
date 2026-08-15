import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, ToastProvider } from "@chellaa/ui";
import App from "./App";
import "@chellaa/ui/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system">
      <ToastProvider placement="top-right">
        <App />
      </ToastProvider>
    </ThemeProvider>
  </React.StrictMode>
);
