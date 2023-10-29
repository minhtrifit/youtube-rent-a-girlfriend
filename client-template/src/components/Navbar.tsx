import { useState } from "react";

import { SlDiamond } from "react-icons/sl";
import { BsFillBellFill } from "react-icons/bs";

const Navbar = () => {
  const [noti, setNoti] = useState<number>(2);
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className="bg-white h-[150px] flex justify-between rounded-md">
      <div className="w-[200px] flex justify-center items-center gap-5 text-[#FF8DD8]"></div>
      <div className="w-[300px] flex gap-3 justify-center items-center md:gap-5 text-[#FF8DD8] hover:cursor-pointer">
        <SlDiamond className="text-2xl md:text-5xl" />
        <p className="text-xl md:text-4xl font-black">DIAMOND</p>
      </div>
      <div className="w-[200px] flex justify-center items-center gap-5 text-[#FF8DD8]">
        <div
          onClick={() => {
            setActive(!active);
            setNoti(0);
          }}
        >
          <BsFillBellFill className="relative text-3xl hover:cursor-pointer" />
        </div>
        {noti > 0 && (
          <div className="w-[25px] h-[25px] flex justify-center items-center absolute right-[45px] md:right-[85px] top-[60px] rounded-xl bg-red-500">
            <p className="text-white">{noti}</p>
          </div>
        )}
        {active && (
          <div className="w-[350px] flex flex-col gap-5 absolute right-[60px] md:right-[120px] top-[120px] bg-white border-2 border-gray-200">
            <div className="w-full flex p-3 gap-10 hover:cursor-pointer">
              <p className="w-[80%]">Mizuhara has accepted your request</p>
              <div className="w-3 h-3 bg-[#FF8DD8] rounded-full"></div>
            </div>
            <div className="w-full flex p-3 gap-10 hover:cursor-pointer">
              <p className="w-[80%]">Ruka has accepted your request</p>
              <div className="w-3 h-3 bg-[#FF8DD8] rounded-full"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
