import { useState } from "react";

import Modal from "react-modal";

import { AiFillStar, AiOutlineClose } from "react-icons/ai";

const Detail = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleOpenBookingModal = () => {
    setIsOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-white min-h-screen flex justify-between mt-7 rounded-md p-10">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseBookingModal}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(10, 10, 10, 0.7)",
          },
          content: {
            top: "35%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
        ariaHideApp={false}
        contentLabel="Add Booking"
      >
        <div className="flex flex-col px-5 py-3">
          <button className="self-end" onClick={handleCloseBookingModal}>
            <AiOutlineClose />
          </button>
          <form className="mt-5 w-[100%] xl:w-[800px]">
            <p className="text-center text-3xl font-bold text-[#FF8DD8] mb-5">
              BOOKING INFORMATION
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col md:flex-row">
                <p className="w-[300px] text-xl font-bold">Booking ID:</p>
                <p className="text-xl">1542</p>
              </div>
              <div className="flex flex-col md:flex-row">
                <p className="w-[300px] text-xl font-bold">
                  Customer Username:
                </p>
                <p className="text-xl">kazuya123</p>
              </div>
              <div className="flex flex-col md:flex-row">
                <p className="w-[300px] text-xl font-bold">Girl Friend Name:</p>
                <p className="text-xl">Mizuha Chizuru</p>
              </div>
              <div className="flex flex-col md:flex-row">
                <p className="w-[300px] text-xl font-bold">Dating:</p>
                <p className="text-xl">5/11/2023</p>
              </div>
              <div className="flex flex-col md:flex-row">
                <p className="w-[300px] text-xl font-bold">Time (hour):</p>
                <p className="text-xl">2</p>
              </div>
              <div className="flex flex-col md:flex-row">
                <p className="w-[300px] text-xl font-bold">Messages:</p>
                <textarea
                  className="w-[300px] md:w-[400px] block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg
                  border border-gray-300 focus:outline"
                  placeholder="Type your message here..."
                />
              </div>
            </div>
            <div className="mt-10 flex justify-end items-center gap-5">
              <p className="text-3xl font-bold text-[#FF8DD8]">608.84 ¥</p>
              <button className="w-[100px] text-white font-semibold bg-[#F9C40B] p-3 rounded-md">
                Booking
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <div className="w-[100%] flex flex-col items-center xl:flex-row xl:items-start justify-center gap-14 mt-14">
        <div>
          <div className="w-[300px] h-[300px] border-4 border-[#FF8DD8]">
            <img className="w-[100%]" src="../images/mizuhara.jpg" alt="img" />
          </div>
          <button
            className="w-[300px] py-3 rounded-md text-xl text-white font-bold bg-[#FF8DD8] mt-5"
            onClick={() => {
              handleOpenBookingModal();
            }}
          >
            Booking
          </button>
        </div>
        <div className="flex flex-col items-center w-[100%] xl:w-[600px]">
          <div className="w-[100%] flex flex-col text-white font-bold bg-[#FF8DD8] px-5 py-3 rounded-md">
            <div className="flex flex-col xl:flex-row items-center gap-5">
              <p className="text-4xl">Mizuhara Chizuru</p>
              <p className="text-black text-2xl">(水原 千鶴)</p>
            </div>
            <div className="flex gap-10 mt-10 xl:flex-row flex-col items-center xl:gap-20 xl:mt-3">
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
