import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";
import logoImg from "../logo.png";

type NavBarProps = {
  handleClickOpenSideBar(): void;
};

export function NavBar(props: NavBarProps) {
  return (
    <nav
      className={classNames({
        "w-full h-16 py-4 px-2 md:px-8 ": true,
        "text-black bg-white": true,
        "flex justify-between items-center": true,
        relative: true,
      })}
    >
      <div className="hidden md:flex">
        <Link href="/">
          <p className="text-slate-600 text-sm">About me</p>
        </Link>
        <Link href="/">
          <p className="text-slate-600 text-sm ml-3">Resume</p>
        </Link>
      </div>

      <div className="md:hidden" onClick={props.handleClickOpenSideBar}>
        <Bars3Icon className="w-8 h-8" />
      </div>

      <Image
        src={logoImg}
        alt="logo"
        className={classNames({
          "rounded-full w-10 h-10": true,
          "select-none": true,
        })}
      />
      <button
        className={classNames({
          "py-2 px-2 md:px-4 rounded-full": true,
          "bg-gray-200": true,
          "text-black text-xs md:text-sm font-medium": true,
          "select-none": true,
        })}
      >
        Contact me
      </button>
    </nav>
  );
}
