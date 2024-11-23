import Feature_col from "./feature_col";

const Features = () => {
  return (
    <>
      <div className="bg-[#E8F2FC] ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
          <div className="text-center pt-24 pb-14">
            <h1 className="text-[#08121D] font-bold md:text-[44px] text-[26px]">
              Some of the features we have built for you
            </h1>
            <p className="text-[#67737E] font-normal md:text-[20px]">
              We have built some amazing features to aid you all the way
              through.
            </p>
          </div>
          <Feature_col />
        </div>
      </div>
    </>
  );
};
export default Features;
