import { useContext } from "react";
import MenuIcon from "./header/MenuIcon";
import { UserStatusContext } from "@/context/userStatus";
import { logout } from "@/lib/actions";
import { Link } from "react-router-dom";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserStatusContext);

  const handleLogout = async () => {
    await logout();
    setIsLoggedIn(false);
  };
  return (
    <header className="bg-white md:py-4 sticky top-0 z-[100] shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex justify-between items-center md:justify-normal md:gap-6 w-full">
            <MenuIcon />

            <Link className="block max-md:mx-auto" to="/">
              <label className="sr-only">Home</label>
              <img src="/assets/images/logo.svg" alt="logo" />
            </Link>
          </div>

          {/* login buttons */}
          <div className="flex gap-4 items-center">
            {!isLoggedIn ? (
              <>
                <Link
                  to={"/register"}
                  className="w-52 text-center cursor-pointer hidden md:block border bg-main px-6 py-2 rounded-lg font-bold text-white hover:bg-white hover:text-main"
                >
                  إنشاء حساب
                </Link>
                <Link
                  to={"/login"}
                  className="w-52 text-center cursor-pointer hidden md:block border bg-main px-6 py-2 rounded-lg font-bold text-white hover:bg-white hover:text-main"
                >
                  تسجيل الدخول
                </Link>
              </>
            ) : (
              <>
                <p className="w-max">مرحبا بك</p>
                <button
                  className="w-52 text-center cursor-pointer hidden md:block border bg-main px-6 py-2 rounded-lg font-bold text-white hover:bg-white hover:text-main"
                  onClick={handleLogout}
                >
                  تسجيل الخروج
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
