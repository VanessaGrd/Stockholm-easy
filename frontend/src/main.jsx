import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
import App from "./App";
import { ActivityContextProvider } from "./contexts/ActivityContext";
import { ProgramContextProvider } from "./contexts/ProgramContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <UserContextProvider>
      <ActivityContextProvider>
        <ProgramContextProvider>
          <App />
        </ProgramContextProvider>
      </ActivityContextProvider>
    </UserContextProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
