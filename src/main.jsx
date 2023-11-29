<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import HashimApp from './AppHashim';
import './index.css'
=======
>>>>>>> 12fdee6a1654d2bdcae9b4f72f39a2801bd00c67
import { ThemeProvider } from "@material-tailwind/react";
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<<<<<<< HEAD
     <BrowserRouter>
    <ThemeProvider>
    <HashimApp />
    </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>,
=======
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
>>>>>>> 12fdee6a1654d2bdcae9b4f72f39a2801bd00c67
);
