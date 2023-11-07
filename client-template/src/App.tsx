import { Routes, Route } from "react-router-dom";

import "./App.css";
import "react-datepicker/dist/react-datepicker.css";

import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="bg-[#FFEAF8] w-full flex">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
