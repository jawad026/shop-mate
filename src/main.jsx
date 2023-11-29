import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import HashimApp from './AppHashim';
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <BrowserRouter>
    <ThemeProvider>
    <HashimApp />
    </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>,
);
