import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Choice from "./pages/Choice";
import "./App.module.scss";
import ActivityList from "./pages/ActivityList";
import AdminDashbord from "./pages/AdminDashbord";
import ActivityModify from "./pages/ActivityModify";
import Program from "./pages/Program";
import ChatBot from "./pages/ChatBot";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/choice" element={<Choice />} />
        <Route path="/activities" element={<ActivityList />} />
        <Route path="/admin-dashbord" element={<AdminDashbord />} />
        <Route path="/activity-modify" element={<ActivityModify />} />
        <Route path="/program" element={<Program />} />
        <Route path="/chatbot" element={<ChatBot />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
