import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'
import Navbar from "@/components/navbar/navbr";


const captionfont = localFont({src : '../public/assets/Fonts/Jost-Medium.ttf'})
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern Landing",
  description: "Modern Landing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <Navbar />
      {children}
      
      </body>
  </html>
  );
}
