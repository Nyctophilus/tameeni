import MenuIcon from "./MenuIcon";

const Header = () => {
  return (
    <header className="bg-white md:py-4 sticky top-0 z-[100] shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex justify-between items-center md:justify-normal md:gap-6 w-full">
            <MenuIcon />

            <a className="block max-md:mx-auto" href="#">
              <label className="sr-only">Home</label>
              <img src="/logo.svg" alt="logo" />
            </a>
          </div>

          <div className="hidden md:flex md:items-center md:gap-12">
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4 w-max">
                <a
                  className="rounded-xl px-6 py-2 font-medium shadow border-2 border-[#1a1a1a]"
                  href="#"
                >
                  تسجيل الدخول
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
