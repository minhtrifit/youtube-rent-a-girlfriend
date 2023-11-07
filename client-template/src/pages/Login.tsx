import { SlDiamond } from "react-icons/sl";

const Login = () => {
  return (
    <div className="min-h-screen w-[100%]">
      <form className="w-[400px] my-[100px] mx-auto bg-white rounded-md p-5 md:my-[200px] flex flex-col gap-5 items-center">
        <div className="flex items-center gap-5 text-[#FF8DD8]">
          <SlDiamond className="text-2xl md:text-5xl" />
          <p className="text-3xl font-bold">DIAMOND</p>
        </div>
        <p className="text-3xl font-bold text-[#FF8DD8]">Login Account</p>
        <div className="w-[100%] flex flex-col gap-8 my-10">
          <input
            className="w-[100%] p-3 border border-gray-400 focus:outline-none focus:ring-0 focus:border-[#FF8DD8]"
            type="text"
            placeholder="Type username here..."
          />
          <input
            className="w-[100%] p-3 border border-gray-400 focus:outline-none focus:ring-0 focus:border-[#FF8DD8]"
            type="text"
            placeholder="Type username here..."
          />
        </div>
        <button
          type="submit"
          className="w-[100%] p-3 rounded-md text-white font-bold bg-[#FF8DD8]"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
