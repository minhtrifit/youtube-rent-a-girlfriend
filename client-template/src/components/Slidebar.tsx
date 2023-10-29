import { useState } from "react";
import { FiLogOut } from "react-icons/fi";

import { Link } from "react-router-dom";

const Slidebar = () => {
  const [active, setActive] = useState<string>("home");

  return (
    <div className="w-[250px] h-screen bg-[#FF8DD8] py-14 flex flex-col items-center">
      <div className="w-[150px] h-[150px] border-solid border-4 border-[#FFEAF8] rounded-full">
        <img
          src="../images/avatar.jpg"
          alt="avatar"
          className="rounded-full object-cover"
        />
      </div>
      <div className="w-[60%] p-3 text-white font-semibold flex justify-center items-center gap-3 text-2xl mt-6 my-14">
        <FiLogOut style={{ fontSize: "1.25em" }} />
        <p>Logout</p>
      </div>
      <div className="w-full">
        <Link to="/">
          <div
            className={`p-5 hover:bg-[#FFEAF8] hover:text-[#FF8DD8] hover:cursor-pointer ${
              active === "home"
                ? "bg-white text-[#FF8DD8] "
                : "bg-[#FF8DD8] text-white"
            }`}
            onClick={() => {
              setActive("home");
            }}
          >
            <p className="text-center text-2xl font-semibold">Home</p>
          </div>
        </Link>
        <Link to="/booking">
          <div
            className={`p-5 hover:bg-[#FFEAF8] hover:text-[#FF8DD8] hover:cursor-pointer ${
              active === "booking"
                ? "bg-white text-[#FF8DD8] "
                : "bg-[#FF8DD8] text-white"
            }`}
            onClick={() => {
              setActive("booking");
            }}
          >
            <p className="text-center text-2xl font-semibold">Booking</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Slidebar;
