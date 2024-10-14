import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Diu Nguyen",
  description: "My porfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden `}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
