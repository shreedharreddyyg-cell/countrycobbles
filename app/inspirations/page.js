"use client"

import Link from "next/link"

export default function Inspirations(){

const inspirations = [

{
title:"Natural Stone Interiors",
image:"/images/cta3.jpg",
slug:"natural-stone-interiors"
},

{
title:"Warm Earth Tone Spaces",
image:"/images/cta4.jpg",
slug:"earth-tone-interiors"
},

{
title:"Minimal Japandi Living",
image:"/images/cta5.jpg",
slug:"japandi-living"
},

{
title:"Handcrafted Textures",
image:"/images/cta2.jpg",
slug:"handcrafted-textures"
}

]

return(

<div className="bg-[#f5fffa]">


{/* PAGE TITLE */}

<section className="text-center pt-50 pb-20">

<h1 className="text-black text-5xl font-allura">
Inspirations
</h1>

</section>



{/* INSPIRATION CARDS */}

<section className="max-w-6xl mx-auto px-6 pb-32">

<div className="grid md:grid-cols-2 gap-16">

{inspirations.map((item,i)=>(

<Link key={i} href={`/blog/${item.slug}`}>

<div className="group cursor-pointer">

{/* IMAGE */}

<div className="overflow-hidden rounded-xl mb-6">

<img
src={item.image}
className="w-full h-[420px] object-cover transition duration-[2000ms] group-hover:scale-110"
/>

</div>

{/* TITLE */}

<h2 className="text-2xl group-hover:underline">

{item.title}

</h2>

</div>

</Link>

))}

</div>

</section>

</div>

)

}