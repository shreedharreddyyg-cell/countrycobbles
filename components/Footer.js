import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { Allura } from "next/font/google";

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
});

export default function Footer(){

return(

<footer className="bg-[#f5fffa] border-t border-gray-200 mt-01">

<div className="max-w-5xl mx-auto px-6 py-20 text-center">


{/* Brand */}

<h2 className={`${allura.className} text-black text-4xl md:text-5xl tracking-wide mb-6`}>
Country Cobbles
</h2>

<p className="text-gray-600 max-w-xl mx-auto leading-relaxed mb-12 text-sm md:text-base">

An interior design studio crafting elegant interiors
through thoughtful materials, refined textures and
timeless spatial design.

</p>


{/* Social */}

<div className="flex justify-center gap-8 mb-12 text-xl text-gray-700">

<a
href="#"
className="text-[#E4405F] hover:opacity-80 transition"
>
<FaInstagram />
</a>

<a
href="#"
className="text-[#1877F2] hover:opacity-80 transition"
>
<FaFacebookF />
</a>

<a
href="#"
className="text-[#1DA1F2] hover:opacity-80 transition"
>
<FaTwitter />
</a>

</div>


{/* Legal */}

<div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-gray-600 mb-10">

<Link href="/disclaimer">Disclaimer</Link>
<Link href="/terms">Terms & Conditions</Link>
<Link href="/privacy">Privacy Policy</Link>

</div>


{/* Copyright */}

<p className="text-sm text-gray-500">

© {new Date().getFullYear()} Country Cobbles LLP. All rights reserved.

</p>

</div>

</footer>

)
}