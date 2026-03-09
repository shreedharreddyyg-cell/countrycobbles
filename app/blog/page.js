import Link from "next/link"
import { blogs } from "@/lib/blogs"

export default function BlogPage(){

return(

<div className="bg-[#f5fffa]">


{/* PAGE HEADER */}

<section className="pt-40 pb-24 text-center">

<h1 className="text-7xl font-allura text-black">
Journal
</h1>

<p className="mt-6 text-gray-700 max-w-xl mx-auto leading-relaxed">
Thoughts on interiors, materials, spaces, craftsmanship and design philosophy.
</p>

</section>



{/* BLOG GRID */}

<section className="max-w-7xl mx-auto px-6 pb-32">

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">


{blogs.map((blog)=>{

return(

<Link
key={blog.slug}
href={`/blog/${blog.slug}`}
className="group block"
>


{/* IMAGE */}

<div className="overflow-hidden rounded-lg">

<img
src={blog.image}
alt={blog.title}
className="w-full h-[280px] object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
/>

</div>



{/* META */}

<div className="mt-6 text-sm text-gray-500 flex items-center gap-3">

<span>Journal</span>

<span className="w-1 h-1 bg-gray-400 rounded-full"/>

<span>5 min read</span>

</div>



{/* TITLE */}

<h2 className="mt-3 text-xl text-black leading-snug group-hover:underline">

{blog.title}

</h2>



{/* DESCRIPTION */}

<p className="mt-3 text-gray-700 leading-relaxed">

{blog.description}

</p>



</Link>

)

})}


</div>

</section>

</div>

)

}