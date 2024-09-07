import {
  InstagramLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t py-4">
      <div>
        <ul className="flex justify-center gap-4">
          <li>
            <Link
              className="cursor-pointer"
              href={"https://instagram.com/thisizha"}
            >
              <InstagramLogoIcon className="h-5 w-5" />
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer"
              href={"https://twitter.com/ThisIzha"}
            >
              <TwitterLogoIcon className="h-5 w-5" />
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer"
              href={"https://github.com/justizha"}
            >
              <GitHubLogoIcon className="h-5 w-5" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-center mt-2">
        <p className="text-sm">©JustIzha</p>
      </div>
    </footer>
  );
}
