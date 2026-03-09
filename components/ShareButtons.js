"use client"

import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram, FaLink } from "react-icons/fa"

export default function ShareButtons(){

const [url,setUrl] = useState("")
const [open,setOpen] = useState(false)
const [visible,setVisible] = useState(true)

const panelRef = useRef(null)

const pathname = usePathname()

useEffect(()=>{
setUrl(window.location.href)
},[])


// hide on homepage hero

useEffect(()=>{

if(pathname !== "/") return

const handleScroll = ()=>{

if(window.scrollY < 500){
setVisible(false)
}else{
setVisible(true)
}

}

handleScroll()

window.addEventListener("scroll",handleScroll)

return ()=> window.removeEventListener("scroll",handleScroll)

},[pathname])


// auto close on scroll

useEffect(()=>{

const closeOnScroll = ()=> setOpen(false)

window.addEventListener("scroll",closeOnScroll)

return ()=> window.removeEventListener("scroll",closeOnScroll)

},[])


// close when clicking outside

useEffect(()=>{

const handleClickOutside = (e)=>{

if(panelRef.current && !panelRef.current.contains(e.target)){
setOpen(false)
}

}

document.addEventListener("mousedown",handleClickOutside)

return ()=> document.removeEventListener("mousedown",handleClickOutside)

},[])



const shareWhatsapp = ()=>{
window.open(`https://wa.me/?text=${url}`,"_blank")
}

const shareFacebook = ()=>{
window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`,"_blank")
}

const shareTwitter = ()=>{
window.open(`https://twitter.com/intent/tweet?url=${url}`,"_blank")
}

const openInstagram = ()=>{
window.open("https://instagram.com","_blank")
}

const copyLink = ()=>{
navigator.clipboard.writeText(url)
alert("Link copied")
}


if(!visible) return null


return(

<div
ref={panelRef}
className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center"
>

{/* ICON PANEL */}

<div className={`bg-white shadow flex flex-col items-center py-3 px-2 transform transition-all duration-300 ease-out ${
open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
}`}>

<button onClick={shareWhatsapp} className="group relative py-3">
<FaWhatsapp className="text-[#25D366] text-lg hover:scale-110 transition"/>
<span className="absolute right-10 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
WhatsApp
</span>
</button>

<div className="w-6 h-px bg-gray-200"/>

<button onClick={shareFacebook} className="group relative py-3">
<FaFacebookF className="text-[#1877F2] text-lg hover:scale-110 transition"/>
<span className="absolute right-10 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
Facebook
</span>
</button>

<div className="w-6 h-px bg-gray-200"/>

<button onClick={shareTwitter} className="group relative py-3">
<FaTwitter className="text-[#1DA1F2] text-lg hover:scale-110 transition"/>
<span className="absolute right-10 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
Twitter
</span>
</button>

<div className="w-6 h-px bg-gray-200"/>

<button onClick={openInstagram} className="group relative py-3">
<FaInstagram className="text-[#E4405F] text-lg hover:scale-110 transition"/>
<span className="absolute right-10 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
Instagram
</span>
</button>

<div className="w-6 h-px bg-gray-200"/>

<button onClick={copyLink} className="group relative py-3">
<FaLink className="text-black text-lg hover:scale-110 transition"/>
<span className="absolute right-10 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
Copy Link
</span>
</button>

</div>


{/* SHARE TAB */}

<button
onClick={()=>setOpen(!open)}
className="bg-white shadow px-2 py-3 text-[10px] tracking-[0.35em] uppercase text-black"
style={{writingMode:"vertical-rl"}}
>
Share
</button>

</div>

)
}