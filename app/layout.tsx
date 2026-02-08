import type { Metadata } from "next";
import { Manrope, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../ui/navbar";
import Footer from "../ui/footer"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AN Studios - Web Development & Design Agency",
  description: "Web Development & Design Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="main">
      <head>
      </head>
      <body
        className={`${manrope.variable} ${dmSans.variable} antialiased bg-base-300`}
      >
        <div className="flex flex-col min-h-screen mx-auto max-w-sm md:max-w-xl">
          {/* <Banner /> */}
          <Navbar />
          <div className="">
            {children}
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  );
}
