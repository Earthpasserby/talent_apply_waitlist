import upload from "../assets/Pngs/upload.png";
import review from "../assets/Pngs/review.png";


const Direct = () => {
  return (
    <>
      <div className="bg-[#FEFCE6] h-400px]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
          <div className="grid grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:pt-[100px] pt-4 tablet:pt-[20px]">
              <h2 className="text-[#08121D] md:text-[26px] font-bold leading-8 md:w-[400px] sm:w-[350px] text-[26px]">
                Let Talent Apply Co-Pilot get you to where you need to be in few
                seconds <span className="text-[#0967D2]  text-3xl">.</span>
              </h2>
              <p className="text-[#373D43] text-[16px] font-normal leading-2 md:w-[400px]">
                With Co-pilot, you have a capable support by your side to aid
                you with any information you need to find.
              </p>
            </div>
            <div className="flex gap-2">
              <div className="pt-4">
                <img src={review} className="w-full" alt="logo" />
              </div>
              <div>
                <img src={upload} className="w-full" alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Direct;
