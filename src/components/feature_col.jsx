import search from "../assets/Pngs/search.png";
import generate from "../assets/Pngs/generate.png";
import analysis from "../assets/Pngs/analysis.png";
import view from "../assets/Pngs/view.png";
import rep from "../assets/Pngs/rep.png";
import create from "../assets/Pngs/create.png";
import expand from "../assets/Pngs/expand.png";
import track from "../assets/Pngs/track.png";

const Feature_col = () => {
  return (
    <>
      <div className="w-[90vw]  tablet:mt-0 mx-auto max-w-[1280px]">
        <div className="w-full grid grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 tablet:gap-2 tablet:gap-y-4 tablet:justify-between justify-center flex-wrap  *:max-w-[430px] *:tablet:max-w-full *:bg-white  *:shadow-sm  *:rounded-[10px] *:border-[0.5px] *:border-[#E9EAF2] *:p-5 *:tablet:p-[30px] ">
          <div className=" w-full nine:w-[49.2%] laptop:w-[32.333%] mb-4">
            <div className=" justify-start items-center gap-2 ">
              <div className="">
                <img src={search} className="w-[47.5px]" alt="Review-img" />
              </div>
              <h2 className="text-base text-[12.67px] mt-2 tablet:leading-9 leading-6 font-bold text-[#08121D]">
                Effortlessly search for jobs.
              </h2>
              <p className="text-[9.5px] text-left mt-2 text-[#373D43]">
                Find your dream jobs and seamlessly apply with the improved AI.
              </p>
            </div>
          </div>
          <div className=" w-full nine:w-[49.2%] laptop:w-[32.333%] mb-4">
            <div className=" justify-start items-center gap-2">
              <div className="">
                <img src={analysis} className="w-[47.5px]" alt="Review-img" />
              </div>
              <h2 className="text-base text-[12.67px] mt-2 tablet:leading-9 leading-6 font-bold text-[#08121D]">
                Analyze your CV/Resume , get instant results.
              </h2>
              <p className="text-[9.5px] text-left mt-2 text-[#373D43]">
                Optimize your resume with personalized feedback for maximum
                impact.
              </p>
            </div>
          </div>
          <div className=" w-full nine:w-[49.2%] laptop:w-[32.333%] mb-4">
            <div className=" justify-start items-center gap-2">
              <div className="">
                <img src={generate} className="w-[47.5px]" alt="Review-img" />
              </div>
              <h2 className="text-base text-[12.67px] mt-2 tablet:leading-9 leading-6 font-bold text-[#08121D]">
                Generate cover letter with ease.
              </h2>
              <p className="text-[9.5px] text-left mt-2 text-[#373D43]">
                Create tailored cover letters that stand out with AI-driven
                suggestions.
              </p>
            </div>
          </div>
          <div className=" w-full nine:w-[49.2%] laptop:w-[32.333%] mb-4">
            <div className=" justify-start items-center gap-2">
              <div className="">
                <img src={rep} className="w-[47.5px]" alt="Review-img" />
              </div>
              <h2 className="text-base text-[12.67px] mt-2 tablet:leading-9 leading-6 font-bold text-[#08121D]">
                Prepare for your interviews.
              </h2>
              <p className="text-[9.5px] text-left mt-2 text-[#373D43]">
                Get ready for your next interview with expert-guided practice
                and insights.
              </p>
            </div>
          </div>
          <div className=" w-full nine:w-[49.2%] laptop:w-[32.333%] mb-4">
            <div className=" justify-start items-center gap-2">
              <div className="">
                <img src={track} className="w-[47.5px]" alt="Review-img" />
              </div>
              <h2 className="text-base text-[12.67px] mt-2 tablet:leading-9 leading-6 font-bold text-[#08121D]">
                Track all your job applications in one place.
              </h2>
              <p className="text-[9.5px] text-left mt-2 text-[#373D43]">
                Stay organized by tracking all your job applications in one
                place.
              </p>
            </div>
          </div>{" "}
          <div className=" w-full nine:w-[49.2%] laptop:w-[32.333%] mb-4">
            <div className=" justify-start items-center gap-2">
              <div className="">
                <img src={view} className="w-[47.5px]" alt="Review-img" />
              </div>
              <h2 className="text-base text-[12.67px] mt-2 tablet:leading-9 leading-6 font-bold text-[#08121D]">
                Review your profile and get to learn more.
              </h2>
              <p className="text-[9.5px] text-left mt-2 text-[#373D43]">
                Enhance your professional profiles with detailed improvement
                tips.
              </p>
            </div>
          </div>{" "}
          <div className=" w-full nine:w-[49.2%] laptop:w-[32.333%] mb-4">
            <div className=" justify-start items-center gap-2">
              <div className="">
                <img src={create} className="w-[47.5px]" alt="Review-img" />
              </div>
              <h2 className="text-base text-[12.67px] mt-2 tablet:leading-9 leading-6 font-bold text-[#08121D]">
                Create a job pipeline tailored to you.
              </h2>
              <p className="text-[9.5px] text-left mt-2 text-[#373D43]">
                Build a strong pipeline of opportunities and stay ahead in your
                career search.
              </p>
            </div>
          </div>{" "}
          <div className=" w-full nine:w-[49.2%] laptop:w-[32.333%] mb-4">
            <div className=" justify-start items-center gap-2">
              <div className="">
                <img src={expand} className="w-[47.5px]" alt="Review-img" />
              </div>
              <h2 className="text-base text-[12.67px] mt-2 tablet:leading-9 leading-6 font-bold text-[#08121D]">
                Expand your search and get to see more jobs.
              </h2>
              <p className="text-[9.5px] text-left mt-2 text-[#373D43]">
                Login to your ProDevs account to see how this works.
              </p>
            </div>
          </div>{" "}
          <div className=" w-full nine:w-[49.2%] laptop:w-[32.333%] mb-4 !bg-[#0967D2] tablet:text-center">
            <div className=" justify-center items-center gap-2 text-center">
              <h2 className="text-base mt-2 tablet:leading-9 text-[16px] leading-6 font-bold text-[#fff]">
                Don’t miss out, join over 10,000+ job seekers and start
                applying. 🥳💃🕺🪩☺️🙌
              </h2>
              <button className="mt-4  text-[16px] border-[0.5px] border-0 py-2 bg-[#fff] md:py-[10px] px-5 md:px-[25px] rounded-xl text-[#0967d2] text-base font-normal">
                Join the waitlist
              </button>
            </div>
          </div>
        </div>  
      </div>
      
    </>
  );
};
export default Feature_col;
