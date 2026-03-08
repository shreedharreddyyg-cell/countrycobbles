import { notFound } from "next/navigation"
import { getBlogBySlug } from "@/lib/blogs"
import Link from "next/link"

export default async function BlogPost({ params }) {

const { slug } = await params
const blog = getBlogBySlug(slug)

if(!blog) return notFound()

const lines = blog.content.split("\n")

let lastImage = null

return(

<article className="bg-[#f5fffa]">

{/* Title */}

<section className="max-w-4xl mx-auto px-6 pt-36 pb-12 text-center">

<h1 className="text-black text-5xl md:text-6xl font-semibold leading-tight">
{blog.title}
</h1>

<div className="w-16 h-[2px] bg-black mx-auto mt-8"/>

</section>


{/* Hero Image */}

<section className="max-w-4xl mx-auto px-6 mb-16">

<img
src={blog.image}
alt={blog.title}
className="w-full max-h-[420px] object-cover rounded-xl"
/>

</section>


{/* Article */}

<section className="max-w-3xl mx-auto px-6 pb-32">

{lines.map((line,i)=>{

const text=line.trim()

if(text==="") return <div key={i} className="h-5"/>


/* SIDE HEADING */

if(text.startsWith("## ")){
return(
<h2
key={i}
className="text-black text-2xl md:text-3xl font-semibold mt-14 mb-6 border-b border-gray-300 pb-3"
>
{text.replace("## ","")}
</h2>
)
}


/* PARAGRAPH */

if(text.startsWith("P:")){

let paragraph=text.replace("P:","")

paragraph=paragraph.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>")

return(
<p
key={i}
className="text-black text-lg leading-relaxed mb-6"
dangerouslySetInnerHTML={{__html:paragraph}}
>
</p>
)
}


/* BULLET */

if(text.startsWith("-")){
return(
<li
key={i}
className="text-black text-lg leading-relaxed ml-6 list-disc mb-2"
>
{text.replace("- ","")}
</li>
)
}


/* NUMBER LIST */

if(/^\d+\./.test(text)){
return(
<li
key={i}
className="text-black text-lg leading-relaxed ml-6 list-decimal mb-2"
>
{text.replace(/^\d+\.\s*/,"")}
</li>
)
}


/* IMAGE */

if(text.startsWith("IMG:")){

lastImage = text.replace("IMG: ","")

return(
<img
key={i}
src={lastImage}
className="w-full rounded-xl my-12"
/>
)
}


/* IMAGE CAPTION */

if(text.startsWith("CAPTION:")){
return(
<p
key={i}
className="text-center text-sm text-gray-500 -mt-8 mb-12"
>
{text.replace("CAPTION: ","")}
</p>
)
}


/* QUOTE */

if(text.startsWith("QUOTE:")){
return(
<blockquote
key={i}
className="border-l-4 border-black pl-6 italic text-xl my-12 text-gray-800"
>
{text.replace("QUOTE: ","")}
</blockquote>
)
}


/* NOTE BOX */

if(text.startsWith("NOTE:")){
return(
<div
key={i}
className="bg-gray-100 border border-gray-300 rounded-lg p-6 my-12 text-lg"
>
{text.replace("NOTE: ","")}
</div>
)
}


/* TIP BOX */

if(text.startsWith("TIP:")){
return(
<div
key={i}
className="bg-green-50 border border-green-300 rounded-lg p-6 my-12 text-lg"
>
{text.replace("TIP: ","")}
</div>
)
}


/* INTERNAL LINK */

if(text.startsWith("LINK:")){

const parts=text.replace("LINK: ","").split("|")

return(
<p key={i} className="text-lg my-6">

<Link
href={parts[1]}
className="text-blue-600 underline hover:text-blue-800"
>
{parts[0]}
</Link>

</p>
)
}


/* DIVIDER */

if(text==="---"){
return(
<hr key={i} className="my-16 border-gray-300"/>
)
}


/* DEFAULT */

return(
<p
key={i}
className="text-black text-lg leading-relaxed mb-6"
>
{text}
</p>
)

})}

</section>

</article>

)

}