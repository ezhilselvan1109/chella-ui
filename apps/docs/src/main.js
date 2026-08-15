import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@chella/ui";
import App from "./App";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(ThemeProvider, { defaultTheme: "system", children: _jsx(App, {}) }) }));
