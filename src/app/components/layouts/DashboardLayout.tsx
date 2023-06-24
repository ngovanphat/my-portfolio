"use client";

import { useMemo, useState } from "react";

import { NavBar } from "../NavBar";
import Sidebar from "../SideBar";
import { usePathname } from "next/navigation";

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openSideBar, setOpenSideBar] = useState(false);
  const pathName = usePathname();

  const style = useMemo(
    () =>
      pathName === "/"
        ? {
            background: "url('/background.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }
        : { background: "white" },
    [pathName]
  );

  return (
    <main className="w-full h-full bg-white pb-5">
      <div className="w-full h-full" style={style}>
        <NavBar handleClickOpenSideBar={() => setOpenSideBar(!openSideBar)} />
        <div className="sm:hidden block">
          <Sidebar open={openSideBar} setOpen={setOpenSideBar} />
        </div>
        {children}
      </div>
    </main>
  );
}
