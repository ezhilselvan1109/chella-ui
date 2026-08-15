import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, ToastProvider } from "@chellaa/ui";
import PlaygroundView from "./PlaygroundView";
import "./index.css";
import "@chellaa/ui/styles.css";
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(ThemeProvider, { defaultTheme: "system", storageKey: "chellaa-theme", children: _jsx(ToastProvider, { placement: "top-right", children: _jsx(PlaygroundView, {}) }) }) }));
