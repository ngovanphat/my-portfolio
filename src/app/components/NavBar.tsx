"use client";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";
import logoImg from "../logo.png";
import { useRouter } from "next/navigation";

type NavBarProps = {
  handleClickOpenSideBar(): void;
};

export function NavBar(props: NavBarProps) {
  const router = useRouter();
  function navigateToContact() {
    router.push("/contact");
  }

  return (
    <nav
      className={classNames({
        "w-full h-16 p-2 sm:px-16": true,
        "text-black bg-transparent": true,
        "flex justify-between items-center": true,
      })}
    >
      <div className="hidden sm:flex">
        <Link href="/">
          <p className="text-slate-600 text-sm">About me</p>
        </Link>
        <Link href="/resume">
          <p className="text-slate-600 text-sm ml-8 ">Resume</p>
        </Link>
      </div>

      <div className="sm:hidden" onClick={props.handleClickOpenSideBar}>
        <Bars3Icon className="w-8 h-8" />
      </div>

      <Image
        src={logoImg}
        alt="logo"
        className={classNames({
          "rounded-full w-14 h-14": true,
          "select-none": true,
        })}
      />
      <button
        className={classNames({
          "py-2 px-2 sm:px-4 rounded-full": true,
          "bg-gray-200": true,
          "text-black text-xs sm:text-xs font-medium": true,
          "select-none": true,
          "hidden sm:block": true,
        })}
        onClick={navigateToContact}
      >
        Contact me
      </button>
    </nav>
  );
}
