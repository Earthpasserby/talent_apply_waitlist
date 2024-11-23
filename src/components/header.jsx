import  TALogoWhite  from "../assets/Pngs/TALogoWhite.png";

const Header = () => {
  return (
    <nav className="">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-4">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          <div className="flex flex-1 items-center  sm:items-stretch sm:justify-start px-2">
            <div className="flex shrink-0 items-center">
              <img
                src={TALogoWhite}
                width="102px"
                alt="logo"
              />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex shrink-0 items-center">
              <div
                to="/register"
                className="border-[0.5px] border-0 py-2 bg-[#fff]  md:py-[10px] px-5 md:px-[25px] rounded-xl text-[#0967d2] text-base font-normal"
              >
                Join the waitlist
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
