import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Choice from "./pages/Choice";
import "./App.module.scss";
import ActivityList from "./components/ActivityList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/choice" element={<Choice />} />
      <Route path="/activities" element={<ActivityList />} />
    </Routes>
  );
}

export default App;
