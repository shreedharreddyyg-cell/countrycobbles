"use client"

import { useState } from "react"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"

export default function Contact(){

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [phone,setPhone] = useState("")
const [message,setMessage] = useState("")
const [loading,setLoading] = useState(false)
const [success,setSuccess] = useState("")

const handleSubmit = async(e)=>{

e.preventDefault()

if(name.length < 3){
alert("Please enter valid name")
return
}

if(!email.includes("@")){
alert("Please enter valid email")
return
}

if(phone.length < 6){
alert("Please enter valid phone number")
return
}

setLoading(true)

const res = await fetch("/api/contact",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name,
email,
phone,
message
})

})

const data = await res.json()

setLoading(false)

if(data.success){

setSuccess("Thank you. Your message has been sent.")

setName("")
setEmail("")
setPhone("")
setMessage("")

}

}

return(

<div className="bg-[#f5fffa]">


{/* PAGE TITLE */}

<section className="text-center pt-50 pb-20">

<h1 className="text-black text-5xl font-allura">
Contact us
</h1>

</section>


{/* CONTACT FORM */}

<section className="p-10 border border-gray-200 hover:shadow-xl transition duration-500 max-w-xl mx-auto px-6 pb-32 text-black">

<form onSubmit={handleSubmit} className="space-y-8">

<input
type="text"
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="w-full border border-gray-300 p-4 bg-transparent"
/>

<input
type="email"
placeholder="Email Address"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full border border-gray-300 p-4 bg-transparent"
/>


<PhoneInput
country={"in"}
enableSearch={true}
searchPlaceholder="Search country..."
value={phone}
onChange={(value)=>setPhone("+" + value)}
containerClass="w-full"
inputClass="!w-full !bg-transparent !border !border-gray-300 !p-4 !pl-14 !h-[56px]"
buttonClass="!border-none !bg-transparent"
dropdownClass="!text-black"
/>


<textarea
placeholder="Message (optional)"
maxLength="200"
value={message}
onChange={(e)=>setMessage(e.target.value)}
className="w-full border border-gray-300 p-4 bg-transparent"
/>


<button
type="submit"
className="w-full bg-black text-white py-4"
>
{loading ? "Submitting..." : "Submit"}
</button>

</form>


{success && (

<p className="text-center mt-6 text-green-600">
{success}
</p>

)}


{/* CONTACT EMAIL */}

<div className="text-center mt-16">

<p className="text-black mb-6">

Contact@countrycobbles.com

</p>


{/* SOCIAL ICONS */}

<div className="flex justify-center gap-8 mt-6 text-xl">

<a
href="#"
className="text-[#E4405F] hover:opacity-80"
>
<FaInstagram />
</a>

<a
href="#"
className="text-[#1877F2] hover:opacity-80"
>
<FaFacebook />
</a>

<a
href="#"
className="text-[#1DA1F2] hover:opacity-80"
>
<FaTwitter />
</a>

</div>

</div>

</section>

</div>

)

}