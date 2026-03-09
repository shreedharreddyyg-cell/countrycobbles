"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Allura } from "next/font/google";

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {

const pathname = usePathname();
const [menuOpen,setMenuOpen] = useState(false);

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

<div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-4">

{/* Logo */}

<Link
href="/"
className={`${allura.className} text-[40px] md:text-[50px] tracking-wide text-black`}
>
Country Cobbles
</Link>


{/* Desktop Navigation */}

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


{/* Hamburger */}

<button
className="md:hidden flex flex-col gap-1"
onClick={()=>setMenuOpen(true)}
>

<span className="w-6 h-[2px] bg-black"></span>
<span className="w-6 h-[2px] bg-black"></span>
<span className="w-6 h-[2px] bg-black"></span>

</button>

</div>


{/* Overlay */}

<div
className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 
${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
onClick={()=>setMenuOpen(false)}
></div>


{/* MOBILE MENU */}

<div
className={`fixed inset-0 bg-[#f5fffa] z-50 flex flex-col items-center justify-center md:hidden transition-all duration-500 ${
menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
}`}
>

<button
onClick={()=>setMenuOpen(false)}
className="absolute top-8 right-8 text-3xl"
>
✕
</button>

<nav className="flex flex-col items-center gap-8 text-2xl uppercase tracking-widest">

{menuItems.map((item,i)=>(

<Link
key={item.path}
href={item.path}
onClick={()=>setMenuOpen(false)}
className="mobileMenuItem"
style={{animationDelay:`${i*0.1}s`}}
>

{item.name}

</Link>

))}

</nav>

</div>

</header>

);
}