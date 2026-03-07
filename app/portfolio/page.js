"use client"

import { useState, useEffect } from "react"

export default function Portfolio(){

const images = [
"/images/cta1.jpg",
"/images/cta2.jpg",
"/images/cta3.jpg",
"/images/cta4.jpg",
"/images/cta5.jpg",
"/images/cta1.jpg",
"/images/cta2.jpg",
"/images/cta3.jpg"
]

const [currentIndex,setCurrentIndex] = useState(null)

const openLightbox = (index)=>{
setCurrentIndex(index)
}

const closeLightbox = ()=>{
setCurrentIndex(null)
}

const showNext = ()=>{
setCurrentIndex((prev)=>(prev + 1) % images.length)
}

const showPrev = ()=>{
setCurrentIndex((prev)=>(prev - 1 + images.length) % images.length)
}

useEffect(()=>{

const handleKey = (e)=>{

if(currentIndex === null) return

if(e.key === "Escape") closeLightbox()

if(e.key === "ArrowRight") showNext()

if(e.key === "ArrowLeft") showPrev()

}

window.addEventListener("keydown",handleKey)

return ()=> window.removeEventListener("keydown",handleKey)

},[currentIndex])

return(

<div className="bg-[#f5fffa]">


{/* PAGE TITLE */}

<section className="text-center pt-32 pb-20">

<h1 className="text-black text-7xl font-allura">
Portfolio
</h1>

</section>



{/* PORTFOLIO GRID */}

<section className="max-w-7xl mx-auto px-6 pb-32">

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

{images.map((img,index)=>(
  
<div
key={index}
className="overflow-hidden rounded-xl group cursor-pointer"
onClick={()=>openLightbox(index)}
>

<img
src={img}
className="w-full h-[380px] object-cover transition duration-[2000ms] group-hover:scale-110"
/>

</div>

))}

</div>

</section>



{/* LIGHTBOX VIEWER */}

{currentIndex !== null && (

<div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">

{/* CLOSE BUTTON */}

<button
onClick={closeLightbox}
className="absolute top-8 right-10 text-white text-4xl"
>
✕
</button>


{/* PREVIOUS BUTTON */}

<button
onClick={showPrev}
className="absolute left-8 text-white text-4xl"
>
‹
</button>


{/* IMAGE */}

<img
src={images[currentIndex]}
className="max-h-[90vh] max-w-[90vw] rounded-lg"
/>


{/* NEXT BUTTON */}

<button
onClick={showNext}
className="absolute right-8 text-white text-4xl"
>
›
</button>

</div>

)}

</div>

)

}