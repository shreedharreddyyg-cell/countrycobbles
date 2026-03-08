"use client"

import { useRouter } from "next/navigation"

export default function Portfolio(){

const router = useRouter()

const portfolioItems = [

{
image:"/images/cta1.jpg",
slug:"banaras-homes-light-warmth"
},

{
image:"/images/cta2.jpg",
slug:"rethinking-storage-heavy-interiors"
},

{
image:"/images/cta3.jpg",
slug:"modular-kitchen-thinking"
},

{
image:"/images/cta4.jpg",
slug:"timeless-design-lessons"
},

{
image:"/images/cta5.jpg",
slug:"room-with-nothing"
},

{
image:"/images/cta1.jpg",
slug:"rethinking-storage-heavy-interiors"
}

]

return(

<div className="bg-[#f5fffa]">

{/* PAGE TITLE */}

<section className="text-center pt-50 pb-20">

<h1 className="text-black text-5xl font-allura">
Portfolio
</h1>

</section>



{/* PORTFOLIO GRID */}

<section className="max-w-7xl mx-auto px-6 pb-32">

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

{portfolioItems.map((item,index)=>(

<div
key={index}
className="overflow-hidden rounded-xl group cursor-pointer"
onClick={()=>router.push(`/blog/${item.slug}`)}
>

<img
src={item.image}
className="w-full h-[380px] object-cover transition duration-[2000ms] group-hover:scale-110"
/>

</div>

))}

</div>

</section>

</div>

)

}