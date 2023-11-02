import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SelectedCategoryProvider from "./context/SelectedCategoryContext.jsx";
import AllPostProvider from "./context/AllPostContext.jsx";

import AuthProvider from "./context/AuthContext.jsx";
import UserProvider from "./context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <AuthProvider>
          <AllPostProvider>
            <SelectedCategoryProvider>
              <App />
            </SelectedCategoryProvider>
          </AllPostProvider>
        </AuthProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
