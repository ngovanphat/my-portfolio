import React, { useRef } from "react";
import classNames from "classnames";
import { useOnClickOutside } from "usehooks-ts";
import Link from "next/link";
type Props = {
  open: boolean;
  setOpen(open: boolean): void;
};
const Sidebar = ({ open, setOpen }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, (e) => {
    setOpen(false);
  });

  return (
    <div
      className={classNames({
        "flex flex-col justify-between": true, // layout
        "bg-blue-300 text-zinc-50": true, // colors
        "md:w-full md:sticky md:top-16 md:z-0 top-0 z-20 fixed": true, // positioning
        "md:h-[calc(100vh_-_64px)] h-full w-[75%]": true, // for height and width
        "transition-transform .3s ease-in-out md:translate-x-0": true, //animations
        "-translate-x-full ": !open, //hide sidebar to the left when closed
      })}
      ref={ref}
    >
      <nav className="md:sticky top-0 md:top-16">
        <ul className="py-2 flex flex-col gap-2 px-2">
          <Link href="/">
            <li
              className={classNames({
                "text-indigo-100 hover:bg-indigo-900 text-xs": true, //colors
                "flex gap-4 items-center ": true, //layout
                "transition-colors duration-300": true, //animation
                "rounded-md p-2 mx-2": true, //self style
              })}
            >
              About me
            </li>
          </Link>
          <Link href="/resume">
            <li
              className={classNames({
                "text-indigo-100 hover:bg-indigo-900 text-xs": true, //colors
                "flex gap-4 items-center ": true, //layout
                "transition-colors duration-300": true, //animation
                "rounded-md p-2 mx-2": true, //self style
              })}
            >
              Resume
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;
