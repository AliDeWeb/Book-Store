import React, { useCallback, useState } from "react";

//? Packages
import { Link } from "react-router-dom";

//? Images
import siteIcon from "../../assets/icons/site-icon.svg";

//? Icons
import { IoMdSearch } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { IoMdLogIn } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineModeEdit } from "react-icons/md";
import { GiSpeedBoat } from "react-icons/gi";
import { FaAngleRight } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function Header() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  //? Funcs
  const hamburgerMenuToggler = useCallback(() => {
    setShowHamburgerMenu((prev) => !prev);
  }, []);

  return (
    <header className="bg-main-color/50 py-2.5 relative">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center gap-2.5">
              <div className="size-10">
                <img src={siteIcon} alt="img" className="size-full" />
              </div>
              <h1 className="text-lg sm:text-2xl text-white">OpenSea</h1>
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
          <div className="flex items-center gap-4 sm:gap-1.5">
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
                <span className="xl:inline  hidden">Login</span>
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
                <button onClick={hamburgerMenuToggler}>
                  {!showHamburgerMenu ? (
                    <IoMenu color="#fff" size="1.5em" />
                  ) : (
                    <IoIosClose color="#fff" size="1.5em" />
                  )}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {showHamburgerMenu && (
        <div className="bg-[#252525] w-screen h-[calc(100dvh-60px)] absolute top-[60px] right-0 left-0 bottom-0">
          <div className="container">
            <div className="relative h-[calc(100dvh-80px)]">
              <ul className="child:text-white flex flex-col gap-10 mt-5">
                <li>
                  <Link
                    to="/"
                    className="flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <FaRegCalendarAlt color="#fff" size="1.5em" />
                      Drops
                    </div>
                    <FaAngleRight />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <MdBarChart color="#fff" size="1.5em" />
                      States
                    </div>
                    <FaAngleRight />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <IoNewspaperOutline color="#fff" size="1.5em" />
                      Resources
                    </div>
                    <FaAngleRight />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <MdOutlineModeEdit color="#fff" size="1.5em" />
                      Create
                    </div>
                    <FaAngleRight />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <GiSpeedBoat color="#fff" size="1.5em" />
                      OpenSea Pro
                    </div>
                    <FaAngleRight />
                  </Link>
                </li>
              </ul>
              <div className="absolute right-0 left-0 bottom-8">
                <hr />
                <div className="flex items-center justify-center gap-3 mt-4">
                  <div>
                    <Link to="/">
                      <FaTwitter size="1.5em" color="#FFF" />
                    </Link>
                  </div>
                  <div>
                    <Link to="/">
                      <FaInstagram size="1.5em" color="#FFF" />
                    </Link>
                  </div>
                  <div>
                    <Link to="/">
                      <FaDiscord size="1.5em" color="#FFF" />
                    </Link>
                  </div>
                  <div>
                    <Link to="/">
                      <FaRedditAlien size="1.5em" color="#FFF" />
                    </Link>
                  </div>
                  <div>
                    <Link to="/">
                      <FaYoutube size="1.5em" color="#FFF" />
                    </Link>
                  </div>
                  <div>
                    <Link to="/">
                      <FaTiktok size="1.5em" color="#FFF" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
