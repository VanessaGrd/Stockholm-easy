import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Choice from "./pages/Choice";
import "./App.module.scss";
import ActivityList from "./components/ActivityList";
import AdminDashbord from "./pages/AdminDashbord";
import AdminAdd from "./pages/AdminAdd";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/choice" element={<Choice />} />
      <Route path="/activities" element={<ActivityList />} />
      <Route path="/admin-dashbord" element={<AdminDashbord />} />
      <Route path="/admin-add" element={<AdminAdd />} />
    </Routes>
  );
}

export default App;
