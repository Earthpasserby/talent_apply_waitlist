import { useState } from "react";
import { Modal, SecondModal } from "./Modal";
import Header from "./header";
import Direct from "./Direct";
import h from "../assets/Pngs/h.png";
import Features from "./features";

const Waitlist = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openSecondModal = () => {
    setIsModalOpen(false);
    setIsSecondModalOpen(true);
  };
  const closeSecondModal = () => setIsSecondModalOpen(false);

  return (
    <>
      <div className="bg-[#0967D2] relative">
        <Header />
        <div className="text-center laptop:pb-12 tablet:pt-[124px] pt-[100px] w-[90vw] mx-auto max-w-[1280px]">
          <h1 className="text-[#fff] font-normal lg:text-[44px] md:text-[44px] sm:text-[26px] text-[26px] pb-2">
            Job search + AI - enhance
          </h1>
          <h1 className="text-[#fff] font-normal  md:text-[44px] sm:text-[26px] text-[26px] pb-8">
            your job application process
          </h1>
          <p className="text-[#B8D2EE] pb-8 md:text-[20px] sm:text-[16px] text-[16px]">
            An hassle free product to get the job you want with minimal effort.
          </p>
        </div>
        <div className="w-[90vw] mx-auto max-w-[780px] justify-center items-center">
          <div className="w-full max-w-[780px] text-center justify-center">
            <p className="text-[#B8D2EE]  pb-4 flex md:text-[16px] text-[13px] sm:text-center">
              Be the first to know when we launch 🚀. Join the waitlist today.
            </p>

            <div className="relative flex justify-center items-center">
              <input
                id="searchInput"
                className="pl-4 pr-4 flex py-2  w-full mx-auto max-w-[100%] tablet:max-w-[600px] laptop:max-w-[780px]  h-[64px] px-4 placeholder:text-white placeholder:opacity-50  placeholder:text-sm bg-transparent outline-0 focus:outline-none border border-[#F8FBFF] rounded-[18px]"
                placeholder="Enter your email address"
                type="text"
              />
              <button
                onClick={openModal}
                className=" absolute border-0 py-2 bg-[#fff] right-2 top-1/2 transform -translate-y-1/2  md:py-[10px] px-5 md:px-[25px] rounded-xl text-[#0967d2] text-base font-normal"
              >
                Join the waitlist
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[1280px] px-2 sm:px-6 lg:px-8 pt-14 ">
          <div className="w-full max-w-[1280px] pb-24 ">
            <img src={h} className="w-full" alt="logo" />
          </div>
        </div>

        {/* Modal */}
      </div>
      <Direct />
      <Features />

      {/* Modals */}
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        showSecondModal={openSecondModal}
      />
      <SecondModal isOpen={isSecondModalOpen} closeModal={closeSecondModal} />
    </>
  );
};

export default Waitlist;
