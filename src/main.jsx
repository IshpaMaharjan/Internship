<<<<<<< HEAD
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react"; 
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider> 
      <App />
    </ChakraProvider>
  </StrictMode>
);
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { ConnectionProvider } from './context/ConnectionContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ConnectionProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConnectionProvider>
    </AuthProvider>
  </React.StrictMode>,
)
>>>>>>> 7d407f7015e4d83d8849d6c136458eed869d7b06
