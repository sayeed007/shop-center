import { Inter } from "next/font/google";

import HeroSection from "@/components/HeroSection";
import SignUpCard from "@/components/SignUpCard";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <HeroSection
        withoutText={true}
      />

      {children}

      <SignUpCard />
      <Footer />
    </>
  );
}
