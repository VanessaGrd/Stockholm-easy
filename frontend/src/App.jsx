import { Route, Routes } from "react-router-dom";

import Register from "./pages/Register";

import "./App.module.scss";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
