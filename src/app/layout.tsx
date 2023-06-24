import { NavBar } from "./components/NavBar";
import DashBoardLayout from "./components/layouts/DashboardLayout";
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";

const font = Noto_Sans_JP({ subsets: ["vietnamese"] });

export const metadata = {
  title: "Phat's portfolio",
  description: "Phat Ngo Van portfolio page",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Phat&apos;s Portfolio</title>
      </head>
      <body className={font.className} style={{ backgroundColor: "white" }}>
        <DashBoardLayout>{children}</DashBoardLayout>
      </body>
    </html>
  );
}
