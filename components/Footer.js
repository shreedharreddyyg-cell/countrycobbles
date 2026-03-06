import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer(){

return(

<footer className="bg-[#f5fffa] border-t border-gray-200 mt-32">

<div className="max-w-5xl mx-auto px-6 py-20 text-center">


{/* Brand */}

<h2 className=" text-black text-3xl font-semibold tracking-wide mb-6">

Country Cobbles

</h2>

<p className="text-gray-600 max-w-xl mx-auto leading-relaxed mb-12">

An interior design studio crafting elegant interiors
through thoughtful materials, refined textures and
timeless spatial design.

</p>


{/* Social */}

<div className="flex justify-center gap-6 mb-12 text-gray-700">

<a href="#" className="hover:text-black">
<FaInstagram size={20}/>
</a>

<a href="#" className="hover:text-black">
<FaFacebookF size={20}/>
</a>

<a href="#" className="hover:text-black">
<FaTwitter size={20}/>
</a>

</div>


{/* Legal */}

<div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600 mb-10">

<Link href="/disclaimer">Disclaimer</Link>
<Link href="/terms">Terms & Conditions</Link>
<Link href="/privacy">Privacy Policy</Link>

</div>


{/* Copyright */}

<p className="text-sm text-gray-500">

© {new Date().getFullYear()} Country Cobbles. All rights reserved.

</p>

</div>

</footer>

)
}