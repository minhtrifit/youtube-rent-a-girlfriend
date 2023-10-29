import Drawer from "react-modern-drawer";

import { AiFillHome, AiOutlineBook } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

import { Link } from "react-router-dom";

interface PropType {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  isOpen: boolean;
  toggleDrawer: () => void;
}

const MyDrawer = (props: PropType) => {
  const { active, setActive, isOpen, toggleDrawer } = props;

  return (
    <div className="block md:hidden">
      <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
        <div className="w-full h-full bg-[#FF8DD8] py-14">
          <div className="flex flex-col items-center">
            <div className="w-[150px] h-[150px] border-solid border-4 border-[#FFEAF8] rounded-full">
              <img
                src="../images/avatar.jpg"
                alt="avatar"
                className="rounded-full object-cover"
              />
            </div>
            <div
              className="p-3 rounded-md text-white font-semibold flex justify-center
                  items-center gap-3 text-2xl mt-6 my-14 hover:cursor-pointer hover:bg-[#FFEAF8] hover:text-[#FF8DD8]"
            >
              <FiLogOut style={{ fontSize: "1.25em" }} />
              <p>Logout</p>
            </div>
          </div>
          <Link to="/">
            <div
              className={`px-12 py-5 flex items-center gap-3 hover:bg-[#FFEAF8] hover:text-[#FF8DD8] hover:cursor-pointer ${
                active === "home"
                  ? "bg-white text-[#FF8DD8] "
                  : "bg-[#FF8DD8] text-white"
              }`}
              onClick={() => {
                setActive("home");
                localStorage.setItem("nav", "home");
              }}
            >
              <AiFillHome className="text-center text-2xl font-semibold" />
              <p className="text-center text-2xl font-semibold">Home</p>
            </div>
          </Link>
          <Link to="/booking">
            <div
              className={`px-12 py-5 flex items-center gap-3 hover:bg-[#FFEAF8] hover:text-[#FF8DD8] hover:cursor-pointer ${
                active === "booking"
                  ? "bg-white text-[#FF8DD8] "
                  : "bg-[#FF8DD8] text-white"
              }`}
              onClick={() => {
                setActive("booking");
                localStorage.setItem("nav", "booking");
              }}
            >
              <AiOutlineBook className="text-center text-2xl font-semibold" />
              <p className="text-center text-2xl font-semibold">Booking</p>
            </div>
          </Link>
        </div>
      </Drawer>
    </div>
  );
};

export default MyDrawer;
