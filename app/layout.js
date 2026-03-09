import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import HeaderFooterWrapper from "../components/HeaderFooterWrapper";
import ShareButtons from "../components/ShareButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Country Cobbles",
  description: "Interior Design Studio",
};

export default function RootLayout({ children }) {

return (
<html lang="en">

<body className={`bg-[#f5fffa] ${geistSans.variable} ${geistMono.variable}`}>

<HeaderFooterWrapper>
{children}
</HeaderFooterWrapper>

<ShareButtons />

</body>

</html>
)
}