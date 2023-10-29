import { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";

import "./App.css";

import Slidebar from "./components/Slidebar";
import MyDrawer from "./components/MyDrawer";

import Home from "./pages/Home";
import Booking from "./pages/Booking";

const App = () => {
  const [active, setActive] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    localStorage.setItem("nav", "home");
  }, []);

  useEffect(() => {
    const nav: string | null = localStorage.getItem("nav");
    if (nav !== null) setActive(nav);
  }, []);

  return (
    <div className="bg-[#FFEAF8] w-full flex">
      <Slidebar />
      <MyDrawer
        active={active}
        setActive={setActive}
        isOpen={isOpen}
        toggleDrawer={toggleDrawer}
      />
      <div
        className="fixed h-[50px] w-[50px] bottom-5 right-3 flex justify-center items-center block md:hidden bg-[#FF8DD8] p-2 rounded-full"
        onClick={toggleDrawer}
      >
        <AiOutlineMenu className="text-white relative text-2xl md:text-3xl hover:cursor-pointer" />
      </div>
      <div className="w-[100%] md:ml-[250px] p-5">
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
