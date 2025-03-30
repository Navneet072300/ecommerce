import { FaUser } from "react-icons/fa6";
import { IoBag } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="">
          <Link to="/" className="text-2xl font-medium">
            Rabbit
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link
            to="#"
            className="text-grey-700 text-sm hover:text-black font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to="#"
            className="text-grey-700 text-sm hover:text-black font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to="#"
            className="text-grey-700 text-sm hover:text-black font-medium uppercase"
          >
            Top Wear
          </Link>
          <Link
            to="#"
            className="text-grey-700 text-sm hover:text-black font-medium uppercase"
          >
            Bottom Wear
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/profile" className=" hover:text-black ">
            <FaUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button className="relative hover:text-black">
            <IoBag className="h-6 w-6 text-gray-700" />
            <span className="absolute bg-rabbit-red text-white text-xs rounded-full px-2 py-0.5 -top-1.5">
              4
            </span>
          </button>

          <div className="overflow-hidden">
            <SearchBar />
          </div>

          <button className="md:hidden">
            <RxHamburgerMenu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
