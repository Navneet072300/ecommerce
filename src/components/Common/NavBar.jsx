import { FaUser } from "react-icons/fa6";
import { IoBag } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import SearchBar from "./SearchBar";
import CardDrawer from "../Layout/CardDrawer";
import { useState } from "react";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

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
            to="/collections/all"
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
        <div className="flex items-center space-x-4 cursor-pointer">
          <Link
            to="/admin"
            className="block bg-black px-2 rounded text-sm text-white"
          >
            Admin
          </Link>
          <Link to="/profile" className=" hover:text-black ">
            <FaUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black cursor-pointer"
          >
            <IoBag className="h-6 w-6 text-gray-700" />
            <span className="absolute bg-rabbit-red text-white text-xs rounded-full px-2 py-0.5 -top-1.5">
              4
            </span>
          </button>

          <div className="overflow-hidden cursor-pointer">
            <SearchBar />
          </div>

          <button
            onClick={toggleNavDrawer}
            className="md:hidden cursor-pointer"
          >
            <RxHamburgerMenu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CardDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full transition-transform
         bg-white shadow-lg transform duration-300 z-50 ${
           navDrawerOpen ? "translate-x-0" : "-translate-x-full"
         }`}
      >
        <div className="flex justify-end p-4">
          <button className="" onClick={toggleNavDrawer}>
            <RxCross2 className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="flex flex-col space-y-4">
            <Link
              to="/collectio/all"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Men
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Women
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Top Wear
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
