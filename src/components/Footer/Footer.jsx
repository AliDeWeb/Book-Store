import React from "react";

//? React Router
import { Link } from "react-router-dom";

//? Images
import siteIcon from "../../assets/icons/site-icon.svg";

//? Icons
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="pt-6 pb-4">
      <div className="container">
        <div>
          <div className="py-4 md:py-5 lg:py-6 2xl:py-10 flex xl:flex-row flex-col xl:gap-0 gap-10">
            <div className="xl:w-1/2 px-4 text-white">
              <p className="text-xl">Stay in the loop</p>
              <p className="text-sm font-Inter-Regular mt-3">
                Join our mailing list to stay in the loop with our newest
                feature releases, NFT drops, and tips and tricks for navigating
                OpenSea.
              </p>
              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="py-2.5 rounded-lg px-3 bg-transparent outline-none border border-gray-700 focus:border-gray-500 w-[calc(100%-(100px+12px))] font-Inter-Regular"
                />
                <button className="w-[100px] py-2.5 rounded-lg bg-blue-600 ml-3">
                  Sign up
                </button>
              </div>
            </div>
            <div className="xl:w-1/2 px-4 text-white">
              <p className="text-xl">Join the community</p>

              <div className="mt-5 flex items-center gap-2 flex-wrap">
                <div className="p-3 bg-[#ffffff0a] rounded-lg">
                  <Link>
                    <FaTwitter color="#fff" size="1.6em" />
                  </Link>
                </div>
                <div className="p-3 bg-[#ffffff0a] rounded-lg">
                  <Link>
                    <FaInstagram color="#fff" size="1.6em" />
                  </Link>
                </div>
                <div className="p-3 bg-[#ffffff0a] rounded-lg">
                  <Link>
                    <FaDiscord color="#fff" size="1.6em" />
                  </Link>
                </div>
                <div className="p-3 bg-[#ffffff0a] rounded-lg">
                  <Link>
                    <FaRedditAlien color="#fff" size="1.6em" />
                  </Link>
                </div>
                <div className="p-3 bg-[#ffffff0a] rounded-lg">
                  <Link>
                    <FaYoutube color="#fff" size="1.6em" />
                  </Link>
                </div>
                <div className="p-3 bg-[#ffffff0a] rounded-lg">
                  <Link>
                    <FaTiktok color="#fff" size="1.6em" />
                  </Link>
                </div>
                <div className="p-3 bg-[#ffffff0a] rounded-lg">
                  <Link>
                    <MdEmail color="#fff" size="1.6em" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-center justify-center py-4 md:py-5 lg:py-6 2xl:py-20 border-t-4 border-b-4 border-white text-white text-xl">
            <div className="px-4 lg:w-1/4">
              <div className="size-11 mx-auto lg:mx-0">
                <img className="size-full" src={siteIcon} alt="icon" />
              </div>
              <p className="mt-1.5 text-center lg:text-start">Sea Book</p>
              <p className="mt-3 text-sm font-Inter-Regular text-center lg:text-start">
                The world’s first and largest digital marketplace for crypto
                collectibles and non-fungible tokens (NFTs). Buy, sell, and
                discover exclusive digital items.
              </p>
            </div>
            <div className="px-4 lg:w-3/4 flex flex-wrap items-start justify-center gap-10 text-sm font-Inter-Regular child:child:mb-2 hover:child:child:child:text-red-400 child:child:child:transition-all">
              <ul>
                <li className="footer-title">
                  <Link>Marketplace</Link>
                </li>
                <li>
                  <Link>Gaming</Link>
                </li>
                <li>
                  <Link>Art</Link>
                </li>
                <li>
                  <Link>Memberships</Link>
                </li>
                <li>
                  <Link>PFPs</Link>
                </li>
                <li>
                  <Link>Music</Link>
                </li>
              </ul>
              <ul>
                <li className="footer-title">
                  <Link>My Account</Link>
                </li>
                <li>
                  <Link>Profile</Link>
                </li>
                <li>
                  <Link>Favorites</Link>
                </li>
                <li>
                  <Link>Watchlist</Link>
                </li>
                <li>
                  <Link>OpenSea Pro</Link>
                </li>
                <li>
                  <Link>Settings</Link>
                </li>
              </ul>
              <ul>
                <li className="footer-title">
                  <Link>Resources</Link>
                </li>
                <li>
                  <Link>Blog</Link>
                </li>
                <li>
                  <Link>Learn</Link>
                </li>
                <li>
                  <Link>Help center</Link>
                </li>
                <li>
                  <Link>Community standards</Link>
                </li>
                <li>
                  <Link>Taxes</Link>
                </li>
              </ul>
              <ul>
                <li className="footer-title">
                  <Link>Company</Link>
                </li>
                <li>
                  <Link>About</Link>
                </li>
                <li>
                  <Link>Careers</Link>
                </li>
                <li>
                  <Link>Ventures</Link>
                </li>
                <li>
                  <Link>Developer platform</Link>
                </li>
                <li>
                  <Link>Platform status</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-2 flex flex-col md:flex-row gap-2 items-center justify-between text-white font-Inter-Regular text-sm">
            <p>© 2018 - 2024 Ozone Networks, Inc</p>
            <div className="flex items-center gap-4">
              <Link>Privacy Policy</Link>
              <Link>Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
