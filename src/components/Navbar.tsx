"use client";

import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
import { useState } from "react";

export default function Navbar() {
  const [isToggle, setToggle] = useState(false);

  return (
    <>
      <header className="fixed z-10 w-full border-b  bg-white shadow dark:bg-darkMode">
        <nav className="p-2 px-6 py-3 md:px-32 lg:px-52">
          <div className="flex items-center justify-between">
            <Link href={"/"} className="text-2xl font-semibold md:text-3xl">
              Izha
            </Link>
            <ul className="hidden items-center gap-8 md:flex">
              <li className=" text-xl">
                <Link href={"/about"}>About</Link>
              </li>
              <li className=" text-xl">
                <Link href={"/blogs"}>Blogs</Link>
              </li>
              <li className=" text-xl">
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
            <ToggleTheme className="hidden md:flex" />
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
                >
                  <title>Menu</title>
                  <rect y="4" width="24" height="2" fill="black" />
                  <rect y="11" width="24" height="2" fill="black" />
                  <rect y="18" width="24" height="2" fill="black" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* toggle Menu */}

      {isToggle && (
        <div className="fixed top-10 block h-screen w-full overflow-hidden bg-background shadow-lg md:hidden">
          <div className="px-4">
            <ul className="list-none p-8 pt-12">
              <li className="mb-4 border-b text-lg duration-200 hover:text-[#9EC8FF]">
                <Link href={"/about"}>About</Link>
              </li>
              <li className="mb-4 border-b text-lg duration-200 hover:text-[#9EC8FF]">
                <Link href={"/blogs"}>Blogs</Link>
              </li>
              <li className="mb-4 border-b text-lg duration-200 hover:text-[#9EC8FF]">
                <Link href={"/contact"}>Contact</Link>
              </li>
              <li className="mt-6 flex justify-center">
                <div className="rounded-md">
                  <ToggleTheme className="" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
