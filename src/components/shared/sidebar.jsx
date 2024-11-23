import { useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import {
  InfoCircle,
  ArrowUpToggle,
  ArrowDownToggle,
  ArrowCurved,
  Attachment,
  ArrowRight,
  MessageEnter,
} from "@/assets/generated";

const Sidebar = () => {
  const ref = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTooltip = () => {
    setIsTooltipVisible(!isTooltipVisible);
  };

  useClickOutside(ref, () => {
    setIsTooltipVisible(false);
  });

  return (
    <div
      className={`relative w-full ${isMenuOpen ? "h-[80vh]" : "md:h-[100%]"}`}
    >
      <div
        className={`flex justify-between items-center gap-1 md:border-b-[0.5px] md:border-[#E8EDF2] pt-2 ${
          !isMenuOpen && "pb-2 md:pb-4"
        } p-4 md:mb-4`}
      >
        <div className="flex items-center gap-2">
          <div className="w-[10px] h-[10px] rounded-full bg-[#0967D2]" />
          <h6 className="text-[#08121D] text-xs font-normal">
            TalentApply Co-pilot
          </h6>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative flex items-center">
            <button ref={ref} onClick={toggleTooltip}>
              <InfoCircle width={24} height={24} alt="info" />
            </button>
            {isTooltipVisible && (
              <div className="absolute z-20 top-[140%] -right-[14px] w-52 p-[15px] bg-[#1B2020] text-white text-xs rounded-xl shadow-lg">
                <p className="mb-2 font-bold">About Talent Apply Co-pilot</p>
                <p>
                  This AI prompt tool helps you seamlessly find anything on the
                  Talent Apply platform.
                </p>
                {/* Tooltip arrow */}
                <div className="absolute top-[-5px] right-[20px] w-3 h-3 bg-[#1B2020] rotate-45"></div>
              </div>
            )}
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden w-6 h-6 flex items-center justify-center border-[0.5px] border-[#B9C0C6] rounded-full"
          >
            {isMenuOpen ? (
              <ArrowUpToggle width={12} height={12} alt="toggle" />
            ) : (
              <ArrowDownToggle width={12} height={12} alt="toggle" />
            )}
          </button>
        </div>
      </div>

      <div className="hidden w-full md:flex flex-col gap-3">
        <div className="w-full flex flex-col gap-1">
          <div className="block bg-[#E8F2FC] py-2 px-3 text-[#1B2020] text-xs font-normal rounded-[8px]">
            Hello! Welcome to Talent Apply Co-pilot
          </div>
          <div className="block w-fit bg-[#E8F2FC] py-2 px-3 text-[#1B2020] text-xs font-normal rounded-[8px]">
            What can I help you with?
          </div>
        </div>
        <div className="w-full flex items-center">
          <div className="w-[90%] text-[#67737E] text-xs font-normal">
            You can always type your request in the input box below, and I’ll
            assist you with whatever you need!
          </div>
          <button className="w-[10%] mt-6">
            <ArrowCurved width={36.17} height={29.26} alt="request" />
          </button>
        </div>
      </div>

      <div className="hidden md:inline w-full absolute bottom-0">
        <div className="flex flex-col justify-center items-end bg-white border-t-[0.5px] border-[#E8EDF2] py-3 gap-3">
          <button className="border-[0.5px] border-[#E8EDF2] py-2 px-3 text-xs text-[#08121D] text-right font-normal rounded-[8px]">
            Search for a job
          </button>
          <button className="border-[0.5px] border-[#E8EDF2] py-2 px-3 text-xs text-[#08121D] text-right font-normal rounded-[8px]">
            Review your CV or Resume
          </button>
          <button className="border-[0.5px] border-[#E8EDF2] py-2 px-3 text-xs text-[#08121D] text-right font-normal rounded-[8px]">
            Generate tailored cover letters
          </button>
          <button className="border-[0.5px] border-[#E8EDF2] py-2 px-3 text-xs text-[#08121D] text-right font-normal rounded-[8px]">
            Search for a job
          </button>
        </div>
        <button className="w-full flex flex-nowrap justify-between items-center bg-[#E8F2FC] px-[10px] pt-3 pb-7 -mb-4 rounded-t-2xl gap-2">
          <div className="flex items-center gap-1">
            <Attachment width={24} height={24} alt="link" />
            <h6 className="text-xs text-black font-normal">Upload CV</h6>
          </div>
          <ArrowRight width={24} height={24} alt="upload" />
        </button>
        <div className="w-full flex flex-nowrap justify-between items-center py-2 px-3 border-[0.5px] border-[#E8EDF2] bg-white rounded-2xl gap-2">
          <input
            type="text"
            placeholder="Enter message"
            className="w-full outline-none text-base font-normal text-[#08121D] placeholder:text-[#9DA6AF]"
          />
          <MessageEnter width={44} height={44} alt="message-enter" />
        </div>
      </div>

      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="w-full flex flex-col gap-3">
          <div className="w-full flex flex-col gap-1">
            <div className="block bg-[#E8F2FC] py-2 px-3 text-[#1B2020] text-xs font-normal rounded-[8px]">
              Hello! Welcome to Talent Apply Co-pilot
            </div>
            <div className="block w-fit bg-[#E8F2FC] py-2 px-3 text-[#1B2020] text-xs font-normal rounded-[8px]">
              What can I help you with?
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-[90%] text-[#67737E] text-xs font-normal">
              You can always type your request in the input box below, and I’ll
              assist you with whatever you need!
            </div>
            <button className="w-[10%] mt-6">
              <ArrowCurved width={36.17} height={29.26} alt="request" />
            </button>
          </div>
        </div>

        <div className="w-full absolute bottom-0">
          <div className="flex flex-col justify-center items-end bg-white border-t-[0.5px] border-[#E8EDF2] py-3 gap-3">
            <button className="border-[0.5px] border-[#E8EDF2] py-2 px-3 text-xs text-[#08121D] text-right font-normal rounded-[8px]">
              Search for a job
            </button>
            <button className="border-[0.5px] border-[#E8EDF2] py-2 px-3 text-xs text-[#08121D] text-right font-normal rounded-[8px]">
              Review your CV or Resume
            </button>
            <button className="border-[0.5px] border-[#E8EDF2] py-2 px-3 text-xs text-[#08121D] text-right font-normal rounded-[8px]">
              Generate tailored cover letters
            </button>
            <button className="border-[0.5px] border-[#E8EDF2] py-2 px-3 text-xs text-[#08121D] text-right font-normal rounded-[8px]">
              Search for a job
            </button>
          </div>
          <button className="w-full flex flex-nowrap justify-between items-center bg-[#E8F2FC] px-[10px] pt-3 pb-7 -mb-4 rounded-t-2xl gap-2">
            <div className="flex items-center gap-1">
              <Attachment width={24} height={24} alt="link" />
              <h6 className="text-xs text-black font-normal">Upload CV</h6>
            </div>
            <ArrowRight width={24} height={24} alt="upload" />
          </button>
          <div className="w-full flex flex-nowrap justify-between items-center py-2 px-3 border-[0.5px] border-[#E8EDF2] bg-white rounded-2xl gap-2">
            <input
              type="text"
              placeholder="Enter message"
              className="w-full outline-none text-base font-normal text-[#08121D] placeholder:text-[#9DA6AF]"
            />
            <MessageEnter width={44} height={44} alt="message-enter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
