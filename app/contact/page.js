"use client"

import { useState } from "react"

export default function Contact(){

const [form,setForm] = useState({
name:"",
email:"",
phone:"",
message:""
})

const handleChange = (e)=>{
setForm({
...form,
[e.target.name]:e.target.value
})
}

const handleSubmit = async (e)=>{
e.preventDefault()

await fetch("/api/contact",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(form)
})

alert("Message sent successfully!")

setForm({
name:"",
email:"",
phone:"",
message:""
})
}

return(

<div className="bg-[#f5fffa] min-h-screen">

{/* PAGE TITLE */}

<section className="text-center pt-32 pb-12">

<h1 className="text-7xl font-allura">
Contact Us
</h1>

</section>



{/* INTRO TEXT */}

<section className="max-w-xl mx-auto text-center px-6 mb-16">

<p className="text-gray-700 leading-relaxed text-lg">

Tell us about your space and your vision.
Whether you are designing a new home or
reimagining an existing one, we would love
to help craft it with thoughtful design.

</p>

</section>



{/* CONTACT FORM */}

<section className="max-w-2xl mx-auto px-6 pb-32">

<form
onSubmit={handleSubmit}
className="space-y-8"
>

{/* FULL NAME */}

<div>

<label className="block text-sm mb-2 text-gray-700">
Full Name
</label>

<input
type="text"
name="name"
value={form.name}
onChange={handleChange}
placeholder="Enter your name"
required
className="w-full border-b border-gray-400 bg-transparent py-3 text-black placeholder-gray-400 focus:border-black focus:outline-none transition"
/>

</div>



{/* EMAIL */}

<div>

<label className="block text-sm mb-2 text-gray-700">
Email Address
</label>

<input
type="email"
name="email"
value={form.email}
onChange={handleChange}
placeholder="Enter your email"
required
className="w-full border-b border-gray-400 bg-transparent py-3 text-black placeholder-gray-400 focus:border-black focus:outline-none transition"
/>

</div>



{/* PHONE */}

<div>

<label className="block text-sm mb-2 text-gray-700">
Phone Number
</label>

<input
type="text"
name="phone"
value={form.phone}
onChange={handleChange}
placeholder="Enter your phone number"
required
className="w-full border-b border-gray-400 bg-transparent py-3 text-black placeholder-gray-400 focus:border-black focus:outline-none transition"
/>

</div>



{/* MESSAGE */}

<div>

<label className="block text-sm mb-2 text-gray-700">
Message
</label>

<textarea
name="message"
value={form.message}
onChange={handleChange}
placeholder="Tell us about your project"
maxLength="200"
required
className="w-full border-b border-gray-400 bg-transparent py-3 text-black placeholder-gray-400 focus:border-black focus:outline-none transition h-28 resize-none"
/>

</div>



{/* SUBMIT BUTTON */}

<div className="pt-4">

<button
type="submit"
className="border border-black px-10 py-4 hover:bg-black hover:text-white transition"
>

Submit

</button>

</div>

</form>

</section>

</div>

)

}