import React from "react";

//? packages
import { Link } from "react-router-dom";

//? images
import siteIcon from "../../assets/icons/site-icon.svg";

//? icons
import { IoMdSearch } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { IoMdLogIn } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

export default function Header() {
  return (
    <header className="bg-main-color/50 py-2.5">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center gap-2.5">
              <div className="size-10">
                <img src={siteIcon} alt="img" className="size-full" />
              </div>
              <h1 className="text-2xl text-white">OpenSea</h1>
            </div>
            <div className="hidden sm:block mx-6 h-8 w-0.5 bg-gray-300 rounded-lg"></div>
            <nav className="hidden sm:block ">
              <ul className="child:text-white flex items-center gap-5 md:gap-8">
                <li>
                  <Link to={"/"}>Drops</Link>
                </li>
                <li>
                  <Link to={"/"}>State</Link>
                </li>
                <li>
                  <Link to={"/"}>Create</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <div className="hidden xl:flex bg-white/10 px-2 py-3 rounded-lg">
              <IoMdSearch color="#FFF" size="1.5em" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent mx-2 outline-none border-none text-white w-[450px] focus:border"
              />
              <IoIosClose color="#FFF" size="1.5em" />
            </div>
          </div>
          <div className="flex items-center gap-4 sm:gap-2.5">
            <div className="xl:hidden block">
              <Link
                to="/"
                className="flex gap-2 text-white bg-white/10 p-2 rounded-lg"
              >
                <IoMdSearch color="#fff" size="1.5em" className="p-0.5" />
              </Link>
            </div>
            <div>
              <Link
                to="/"
                className="flex gap-2 text-white bg-white/10 p-2 rounded-lg"
              >
                <IoMdLogIn color="#fff" size="1.5em" />
                <span className="xl:inline inline sm:hidden">Login</span>
              </Link>
            </div>
            <div className="hidden sm:block">
              <Link
                to="/"
                className="flex gap-2 text-white bg-white/10 p-2 rounded-lg"
              >
                <FaUser color="#fff" size="1.5em" className="p-1" />
              </Link>
            </div>
            <div className="hidden sm:block">
              <Link
                to="/"
                className="flex gap-2 text-white bg-white/10 p-2 rounded-lg"
              >
                <IoMdCart color="#fff" size="1.5em" className="p-0.5" />
              </Link>
            </div>
            <div className="block sm:hidden">
              <Link
                to="/"
                className="flex gap-2 text-white bg-white/10 p-2 rounded-lg"
              >
                <IoMenu color="#fff" size="1.5em" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
