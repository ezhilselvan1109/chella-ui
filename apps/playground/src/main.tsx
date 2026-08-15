import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, ToastProvider } from "@chellaa/ui";
import PlaygroundView from "./PlaygroundView";
import "./index.css";
import "@chellaa/ui/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="chellaa-theme">
      <ToastProvider placement="top-right">
        <PlaygroundView />
      </ToastProvider>
    </ThemeProvider>
  </React.StrictMode>
);
