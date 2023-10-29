import { Routes, Route } from "react-router-dom";
import "./App.css";

import Slidebar from "./components/Slidebar";

import Home from "./pages/Home";
import Booking from "./pages/Booking";

const App = () => {
  return (
    <div className="bg-[#FFEAF8] w-full flex">
      <Slidebar />
      <div className="w-[100%] p-5">
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
