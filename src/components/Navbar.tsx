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
      <header className="z-50 w-full bg-indigo-50 dark:bg-darkMode ">
        <nav className="p-2 px-6 py-3 md:px-24 lg:px-40">
          <div className="flex items-center justify-between">
            <Link href={"/"} className="text-2xl font-semibold md:text-3xl">
              <img
                src="https://avatars.githubusercontent.com/u/111278617?v=4"
                alt="logo"
                className="h-8 w-8 rounded-md"
              />
            </Link>
            <ul className="hidden items-center gap-8 md:flex">
              <li className=" text-xl">
                <Link
                  href={"/blogs"}
                  className="duration-200 hover:text-indigo-200 "
                >
                  Blogs
                  <div className="" />
                </Link>
              </li>
              <li className=" text-xl">
                <Link
                  href={"/contact"}
                  className="duration-200 hover:text-indigo-200 "
                >
                  Contact
                  <div className="" />
                </Link>
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
        <div className="flex justify-center">
          <div className="fixed top-14 z-50 block h-1/2 w-[90%] overflow-hidden rounded-md border bg-indigo-50 shadow-lg dark:bg-darkMode md:hidden">
            <div className="flex justify-end px-5 py-3">
              <button
                type="button"
                onClick={() => setToggle(!isToggle)}
                className="text-2xl font-bold dark:text-white"
              >
                X
              </button>
            </div>
            <ul className="list-none  p-5">
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
