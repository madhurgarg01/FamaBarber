// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App.jsx";
// src/main.jsx
// ... other imports
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Add this line
// ... rest of the file

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
