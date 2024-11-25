import React, { useState } from "react";
import close from "../assets/Pngs/close.png";

const Modal = ({ isOpen, closeModal, showSecondModal }) => {
  const [inputValue, setInputValue] = useState("");

  if (!isOpen) return null; // Do not render if modal is not open
  const isInputActive = inputValue.trim() !== "";

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[#08121DB2] bg-opacity-100 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-[533px] relative">
        <button
          onClick={closeModal}
          className="absolute top-6 right-4 text-[#000] text-[24px] font-normal "
        >
          <img src={close} className="w-[30px]" alt="Review-img" />
        </button>
        <h2 className="text-[16px] font-normal text-[#08121D] mb-2">
          Join the Waitlist
        </h2>
        <hr className="border-t border-gray-100 my-3" />
        <label className="text-[#616B68] text-[16px]">Email address</label>
        <div className="pt-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full border border-[#E9EAF2] rounded-lg py-2 px-4 mb-4 h-[50px] placeholder:text-[#949E9B] placeholder:opacity-50  placeholder:text-sm outline-0  focus:ring-1 focus:ring-[#B8D2EE]-200  "
            placeholder="Enter your email address"
          />
        </div>
        <hr className="border-t border-gray-100 my-2" />
        <div className="flex justify-end gap-4 pt-4">
          <button
            onClick={showSecondModal}
            disabled={!isInputActive} // Disable button if input is empty
            className={`px-4 py-2 text-[16px] rounded-lg w-full h-[40px] ${
              isInputActive
                ? "bg-[#0967D2] text-white hover:bg-[#074c9f]"
                : "bg-[#B8D2EE] text-[#438CDF] cursor-not-allowed"
            }`}
          >
            Join waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

const SecondModal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[#08121DB2] bg-opacity-100 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-[400px] relative">
        <button
          onClick={closeModal}
          className="absolute top-6 right-4 text-[#000]"
        >
          <img src={close} className="w-[30px]" alt="Review-img" />
        </button>

        <h2 className="text-[20px] font-bold text-[#08121D] mb-2 text-center pt-4">
          Congratulations! We have successfully received your email
        </h2>
        <p className="text-center text-[16px] text-[#67737E] mb-2">
          You will be among the first to know when we launch 🚀🚀🚀🚀
        </p>
      </div>
    </div>
  );
};
export { Modal, SecondModal };
