"use client";

import { useState } from "react";
import { NavBar } from "../NavBar";

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openSideBar, setOpenSideBar] = useState(false);
  console.log(openSideBar);
  return (
    <main className="w-full h-full bg-white">
      <NavBar handleClickOpenSideBar={() => setOpenSideBar(!openSideBar)} />
      {children}
    </main>
  );
}
