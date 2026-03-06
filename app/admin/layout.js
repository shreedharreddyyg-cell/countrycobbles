"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import {
LayoutDashboard,
FileText,
Image,
Folder,
Mail,
Share2,
LogOut
} from "lucide-react"

export default function AdminLayout({ children }) {

const pathname = usePathname()

// Hide admin UI on login page
if (pathname === "/admin/login") {
  return children
}

const menu = [
{ name: "Dashboard", icon: LayoutDashboard, link: "/admin/dashboard" },
{ name: "Content Manager", icon: FileText, link: "/admin/content" },
{ name: "Portfolio", icon: Folder, link: "/admin/portfolio" },
{ name: "Inspirations", icon: Image, link: "/admin/inspirations" },
{ name: "Contacts", icon: Mail, link: "/admin/contacts" },
{ name: "Social Media", icon: Share2, link: "/admin/social" },
{ name: "Portfolio", icon: Folder, link: "/admin/portfolio" }
]

return (

<div className="min-h-screen flex bg-[#f8fafc]">

{/* SIDEBAR */}

<div className="w-64 bg-[#0f172a] text-white flex flex-col">

<div className="p-6 border-b border-slate-700">

<h2 className="text-lg font-semibold">
Country Cobbles
</h2>

</div>

<nav className="flex-1 p-4 space-y-2">

{menu.map((item,index)=>{

const Icon = item.icon
const active = pathname === item.link

return(

<Link
key={index}
href={item.link}
className={`flex items-center gap-3 p-3 rounded-lg transition 
${active ? "bg-[#1e293b]" : "hover:bg-[#1e293b]"}`}
>

<Icon size={18} />

<span>{item.name}</span>

</Link>

)

})}

</nav>


{/* LOGOUT */}

<div className="p-4 border-t border-slate-700">

<button
className="flex items-center gap-2 text-sm hover:text-red-400"
onClick={()=>{
localStorage.removeItem("adminLoggedIn")
window.location.href="/admin/login"
}}
>

<LogOut size={18} />

Logout

</button>

</div>

</div>



{/* MAIN AREA */}

<div className="flex-1 flex flex-col">


{/* TOPBAR */}

<div className="bg-white border-b px-10 py-4 flex justify-end">

<h2 className="text-gray-700 font-medium">
Welcome Tejaswi
</h2>

</div>


{/* PAGE CONTENT */}

<div className="p-10">

{children}

</div>

</div>

</div>

)

}