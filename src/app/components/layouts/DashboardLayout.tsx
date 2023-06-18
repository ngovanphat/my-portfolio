"use client";

import { useState } from "react";
import { NavBar } from "../NavBar";
import Sidebar from "../SideBar";

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <main className="w-full h-full bg-white pb-5">
      <div className="w-full h-full bg-[url('/background.png')] bg-contain bg-no-repeat">
        <NavBar handleClickOpenSideBar={() => setOpenSideBar(!openSideBar)} />
        <div className="sm:hidden block">
          <Sidebar open={openSideBar} setOpen={setOpenSideBar} />
        </div>
        {children}
      </div>
    </main>
  );
}
