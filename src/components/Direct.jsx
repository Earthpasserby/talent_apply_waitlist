import upload from "../assets/Pngs/upload.png";
import review from "../assets/Pngs/review.png";


const Direct = () => {
  return (
    <>
      <div className="bg-[#FEFCE6] h-400px]">
        <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-5xl mx-auto ">
            <div className="lg:pt-[100px] pt-4 md:pt-12 lg:pl-[70px]  sm:pl-0">
              <h2 className="text-[#08121D] md:text-[26px] tablet:text-[24px] font-bold leading-8 md:w-[400px] sm:w-[350px] text-[26px]">
                Let Talent Apply Co-Pilot get you to where you need to be in few
                seconds <span className="text-[#0967D2]  text-3xl">.</span>
              </h2>
              <p className="text-[#373D43] tablet:text-[14px]  text-[16px] font-normal leading-[1.5]  md:max-w-[400px]">
                With Co-pilot, you have a capable support by your side to aid
                you with any information you need to find.
              </p>
            </div>
            <div className="flex gap-2">
              <div className="pt-4">
                <img src={review} className="w-full" alt="Review-img" />
              </div>
              <div>
                <img src={upload} className="w-full" alt="Upload-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Direct;
