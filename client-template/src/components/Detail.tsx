import { AiFillStar } from "react-icons/ai";

const Detail = () => {
  return (
    <div className="bg-white min-h-screen flex justify-between mt-7 rounded-md p-10">
      <div className="w-full flex justify-center gap-14 mt-14">
        <div>
          <div className="w-[300px] h-[300px] border-4 border-[#FF8DD8]">
            <img className="w-[100%]" src="../images/mizuhara.jpg" alt="img" />
          </div>
          <button className="w-[300px] py-3 rounded-md text-xl text-white font-bold bg-[#FF8DD8] mt-5">
            Booking
          </button>
        </div>
        <div className="flex flex-col w-[600px]">
          <div className="w-full text-white font-bold bg-[#FF8DD8] px-5 py-3 rounded-md">
            <div className="flex items-center gap-5">
              <p className="text-4xl">Mizuhara Chizuru</p>
              <p className="text-black text-2xl">(水原 千鶴)</p>
            </div>
            <div className="flex items-center gap-20 mt-3">
              <div className="flex items-center gap-3">
                <AiFillStar className="text-[#F9C40B] text-4xl" />
                <p className="text-xl font-bold">5.0</p>
              </div>
              <p className="text-xl">#Booking: 152</p>
              <p className="text-xl">#Popularity: 1</p>
            </div>
          </div>
          <p className="text-2xl font-bold mt-10">Description:</p>
          <p className="text-xl text-justify mt-3">
            A college student who moonlights as a rental girlfriend for the
            Diamond company.Ch. 1–3 On campus, she goes under her real name
            Chizuru Ichinose, and utilizes a nerdy appearance with large
            dark-framed glasses and braided pigtails.Ch. 1–2 It is later
            revealed that Chizuru and Kazuya are next-door neighbors in their
            apartment complex.Ch. 2 She continues to let Kazuya rent her
            services in order to help his grandmother Nagomi, and to help him
            get over his breakup with Mami
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
