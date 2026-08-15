import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, ToastProvider } from "@chellaa/ui";
import App from "./App";
import "@chellaa/ui/styles.css";
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(ThemeProvider, { defaultTheme: "system", children: _jsx(ToastProvider, { placement: "top-right", children: _jsx(App, {}) }) }) }));
