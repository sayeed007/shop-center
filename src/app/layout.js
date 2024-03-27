import { Inter } from "next/font/google";
import "./globals.css";
import LWSIcon from '../../public/icons/lws-logo-black.svg';

import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shop Center - Learn with Sumit",
  description: "A Online shop design for different gadgets.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>

        <Navbar />

        {children}

      </body>
    </html>
  );
}
