import { Link } from "react-router-dom";

import { AiFillStar } from "react-icons/ai";

const Card = () => {
  return (
    <div className="w-[300px] h-[450px] border-4 border-[#FF8DD8]">
      <img src="../images/mizuhara.jpg" alt="img" className="w-[100%]" />
      <div className="px-5 py-3 flex flex-col gap-2">
        <p className="text-2xl text-[#FF8DD8] text-center font-bold">
          Mizuhara Chizuru
        </p>
        <p className="text-md text-center font-bold">水原 千鶴</p>
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <AiFillStar className="text-[#F9C40B] text-4xl" />
            <p className="text-xl font-bold">5.0</p>
          </div>
          <Link to="/detail/1">
            <button className="w-[80px] h-[40px] rounded-md text-white font-bold bg-[#FF8DD8]">
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
