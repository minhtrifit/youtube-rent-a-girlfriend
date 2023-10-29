import { Routes, Route } from "react-router-dom";

import "react-modern-drawer/dist/index.css";

import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Detail from "../components/Detail";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default Home;
