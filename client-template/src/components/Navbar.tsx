import { SlDiamond } from "react-icons/sl";
import { BsFillBellFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="bg-white h-[150px] flex justify-between rounded-md">
      <div className="w-[200px] flex justify-center items-center gap-5 text-[#FF8DD8]"></div>
      <div className="w-[300px] flex gap-3 justify-center items-center md:gap-5 text-[#FF8DD8]">
        <SlDiamond className="text-3xl md:text-5xl" />
        <p className="text-xl md:text-4xl font-bold">DIAMOND</p>
      </div>
      <div className="w-[200px] flex justify-center items-center gap-5 text-[#FF8DD8]">
        <BsFillBellFill className="text-2xl md:text-3xl" />
      </div>
    </div>
  );
};

export default Navbar;
