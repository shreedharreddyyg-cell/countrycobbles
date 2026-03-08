"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Allura } from "next/font/google";

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
 
const pathname = usePathname();

const menuItems = [
{ name: "Home", path: "/" },
{ name: "Our Story", path: "/our-story" },
{ name: "Portfolio", path: "/portfolio" },
{ name: "Services", path: "/services" },
{ name: "Inspirations", path: "/inspirations" },
{ name: "Blog", path: "/blog" },
{ name: "Contact Us", path: "/contact" },
];

return (

<header className="fixed top-0 left-0 w-full bg-[#f5fffa] border-b border-gray-200 z-50">

<div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

<Link
href="/"
className={`${allura.className} text-[50px] tracking-wide text-black`}
>
Country Cobbles
</Link>

{/* Navigation */}

<nav className="hidden md:flex gap-10 text-sm uppercase tracking-widest text-black">

{menuItems.map((item) => (

<Link key={item.path} href={item.path} className="relative group">

{item.name}

<span
className={`absolute left-0 -bottom-1 h-[1px] bg-black transition-all duration-300 
${pathname === item.path ? "w-full" : "w-0 group-hover:w-full"}`}
></span>

</Link>

))}

</nav>

</div>

</header>

);
}