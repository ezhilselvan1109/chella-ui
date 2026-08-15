import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./theme";
import App from "./App";
import "./styles/index.css";
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(ThemeProvider, { defaultTheme: "system", storageKey: "chella-theme", children: _jsx(App, {}) }) }));
