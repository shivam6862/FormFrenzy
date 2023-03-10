import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_apiKey,
  authDomain: import.meta.env.VITE_REACT_authDomain,
  projectId: import.meta.env.VITE_REACT_projectId,
  storageBucket: import.meta.env.VITE_REACT_storageBucket,
  messagingSenderId: import.meta.env.VITE_REACT_messagingSenderId,
  appId: import.meta.env.VITE_REACT_appId,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
