"use client";

import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
import { useState } from "react";

export default function Navbar() {
	const [isToggle, setToggle] = useState(false);

	return (
		<>
			<header className="z-10 w-full border-b shadow">
				<nav className="p-2 px-12 py-4 md:px-32 lg:px-52">
					<div className="flex items-center justify-between">
						<Link href={"/"} className="text-2xl font-semibold md:text-3xl">
							Alfath
						</Link>
						<ul className=" hidden items-center gap-8 md:flex">
							<li className="text-xl mb-4">
								<Link href={"/about"}>About</Link>
							</li>
							<li className="text-xl mb-4">
								<Link href={"/projects"}>Project</Link>
							</li>
							<li className="text-xl mb-4">
								<Link href={"/contact"}>Contact</Link>
							</li>
						</ul>
						<ToggleTheme className="outline-none"/>
						<div className="md:hidden">
							<button
								type="button"
								onClick={() => {
									setToggle(!isToggle);
								}}
							>
								Menu
							</button>
						</div>
					</div>
				</nav>
			</header>
			{isToggle && (
				<div className="md:hidden z-10 absolute shadow bg-background w-full">
					<ul className="list-none p-8">
						<li className="text-xl mb-4">
							<Link href={"/about"}>About</Link>
						</li>
						<li className="text-xl mb-4">
							<Link href={"/projects"}>Projects</Link>
						</li>
						<li className="text-xl mb-4">
							<Link href={"/contact"}>Contact</Link>
						</li>
					</ul>
				</div>
			)}
		</>
	);
}
