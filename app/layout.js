"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";

import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {

const pathname = usePathname()

// detect admin pages
const isAdmin = pathname.startsWith("/admin")

return (
<html lang="en">

<body className={`bg-[#f5fffa] ${geistSans.variable} ${geistMono.variable}`}>

{/* Hide header on admin pages */}
{!isAdmin && <Header />}

{children}

{/* Hide footer on admin pages */}
{!isAdmin && <Footer />}

</body>

</html>
)

}