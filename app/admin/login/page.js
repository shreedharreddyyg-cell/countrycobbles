"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminLogin(){

const router = useRouter()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [error,setError] = useState("")

const handleLogin = (e)=>{
e.preventDefault()

const adminEmail = "admin@countrycobbles.com"
const adminPassword = "admin123"

if(email === adminEmail && password === adminPassword){

localStorage.setItem("adminLoggedIn","true")

router.push("/admin/dashboard")

}else{

setError("Invalid login credentials")

}

}

return(

<div className="min-h-screen bg-[#f5fffa] flex items-center justify-center">

<div className="w-full max-w-md bg-white p-10 rounded-xl shadow-lg">

<h1 className="text-3xl text-black mb-8 text-center font-semibold">
Admin Login
</h1>

<form onSubmit={handleLogin} className="space-y-6">

{/* EMAIL */}

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full border-b border-gray-400 py-3 text-black bg-white placeholder-gray-500 focus:border-black outline-none"
/>

{/* PASSWORD */}

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="w-full border-b border-gray-400 py-3 text-black bg-white placeholder-gray-500 focus:border-black outline-none"
/>

{error && (
<p className="text-red-500 text-sm">
{error}
</p>
)}

<button
type="submit"
className="w-full border border-black py-3 text-black hover:bg-black hover:text-white transition"
>
Login
</button>

</form>

</div>

</div>

)

}