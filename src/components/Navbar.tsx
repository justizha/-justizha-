"use client";

import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
import { useState } from "react";

export default function Navbar() {
  const [isToggle, setToggle] = useState(false);
  const LinkClass =
    "mb-4 rounded-md bg-indigo-400 p-2 px-4 text-lg text-white duration-200 dark:hover:text-indigo-500 hover:text-indigo-100 dark:bg-indigo-950";

  return (
    <>
      <header className="fixed z-10 w-full border-b border-indigo-400 bg-white shadow dark:bg-darkMode dark:shadow dark:shadow-indigo-900">
        <nav className="p-2 px-6 py-3 md:px-32 lg:px-52">
          <div className="flex items-center justify-between">
            <Link href={"/"} className="text-2xl font-semibold md:text-3xl">
              Izha
            </Link>
            <ul className="hidden items-center gap-8 md:flex">
              <li className=" text-xl">
                <Link href={"/blogs"}>Blogs</Link>
              </li>
              <li className=" text-xl">
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
            <ToggleTheme className="hidden md:flex" />
            <ToggleTheme className="flex justify-center md:hidden" />
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => {
                  setToggle(!isToggle);
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-black dark:fill-white"
                >
                  <title>Menu</title>
                  <rect y="4" width="24" height="2" />
                  <rect y="11" width="24" height="2" />
                  <rect y="18" width="24" height="2" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* toggle Menu */}

      {isToggle && (
        <div className="fixed top-10 block h-screen w-full overflow-hidden bg-white shadow-lg dark:bg-darkMode md:hidden">
          <div className="px-2">
            <ul className="list-none p-8 pt-12">
              <li className={`${LinkClass}`}>
                <Link href={"/"} onClick={() => setToggle(!isToggle)}>
                  Home
                </Link>
              </li>
              <li className={`${LinkClass}`}>
                <Link href={"/blogs"} onClick={() => setToggle(!isToggle)}>
                  Blogs
                </Link>
              </li>
              <li className={`${LinkClass}`}>
                <Link href={"/contact"} onClick={() => setToggle(!isToggle)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
