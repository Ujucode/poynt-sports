import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StyledEngineProvider } from "@mui/material";
import "dayjs/locale/en-in.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-in">
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </LocalizationProvider>
  </React.StrictMode>,
);
