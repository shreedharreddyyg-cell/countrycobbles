"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";

export default function CTASection(){

useEffect(()=>{
AOS.init({
duration:1200,
once:true
});
},[]);

return(

<section className="bg-[#f5fffa]">


{/* OUR STORY SCENE */}

<section
className="min-h-screen flex items-center"
data-aos="fade-up"
>

<div className=" text-black max-w-7xl mx-auto grid md:grid-cols-2 gap-20 px-6 items-center">

{/* TEXT */}

<div>

<p className="uppercase tracking-[6px] text-sm text-gray-500 mb-6">
Our Story
</p>

<h2 className="text-5xl leading-tight mb-8">

Designing spaces that feel timeless,
natural and beautifully balanced.

</h2>

<p className="text-gray-600 mb-10 max-w-md">

Country Cobbles blends natural textures,
light and thoughtful craftsmanship to
create interiors that elevate everyday living.

</p>

<Link href="/our-story">

<button className="border border-black px-8 py-4 hover:bg-black hover:text-white transition">

Discover Our Story →

</button>

</Link>

</div>


{/* IMAGE */}

<div className="overflow-hidden rounded-xl">

<img
src="/images/cta1.jpg"
className="w-full h-[520px] object-cover"
/>

</div>

</div>

</section>

{/* PORTFOLIO SCENE */}

<section
className="min-h-screen flex items-center"
data-aos="fade-up"
>

<div className="text-black max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6 items-center">

{/* IMAGE */}

<div className="overflow-hidden rounded-xl group">

<img
src="/images/cta2.jpg"
className="w-full h-[600px] object-cover transition duration-[2000ms] group-hover:scale-105"
/>

</div>


{/* TEXT */}

<div>

<p className="uppercase tracking-[6px] text-sm text-gray-500 mb-6">
Portfolio
</p>

<h2 className="text-5xl leading-tight mb-8">

Interiors designed with
precision, texture and light

</h2>

<p className="text-gray-600 mb-10 max-w-md">

Discover our portfolio of thoughtfully designed
residential spaces where craftsmanship meets
modern living.

</p>

<Link href="/portfolio">

<button className="border border-black px-8 py-4 hover:bg-black hover:text-white transition">

View Projects →

</button>

</Link>

</div>

</div>

</section>

{/* SERVICES SCENE */}

<section
className="min-h-screen flex items-center bg-white"
data-aos="fade-up"
>

<div className="max-w-6xl mx-auto px-6 text-center">

<p className="uppercase tracking-[6px] text-sm text-gray-500 mb-6">
Services
</p>

<h2 className=" text-black text-5xl mb-16">

Design solutions tailored
for modern living.

</h2>

<div className=" text-black grid md:grid-cols-3 gap-10">

{/* SERVICE 1 */}

<div className="p-10 border border-gray-200 hover:shadow-xl transition duration-500">

<h3 className="text-xl mb-4">

Interior Design

</h3>

<p className="text-gray-600">

Complete interior concepts blending
materials, light and spatial harmony.

</p>

</div>


{/* SERVICE 2 */}

<div className="p-10 border border-gray-200 hover:shadow-xl transition duration-500">

<h3 className="text-xl mb-4">

Space Planning

</h3>

<p className="text-gray-600">

Optimizing layouts to create beautiful
and functional interiors.

</p>

</div>


{/* SERVICE 3 */}

<div className="p-10 border border-gray-200 hover:shadow-xl transition duration-500">

<h3 className="text-xl mb-4">

Renovation

</h3>

<p className="text-gray-600">

Transforming existing spaces into
modern and elegant environments.

</p>

</div>

</div>

</div>

</section>
{/* INSPIRATIONS SCENE */}

<section
className=" text-black min-h-screen flex items-center bg-white"
data-aos="fade-up"
>

<div className="max-w-6xl mx-auto px-6">

<div className="grid md:grid-cols-2 gap-16 items-center">

{/* TEXT */}

<div>

<p className="uppercase tracking-[6px] text-sm text-gray-500 mb-6">
Inspirations
</p>

<h2 className="text-5xl mb-8 leading-tight">

Ideas that shape
beautiful interiors.

</h2>

<p className="text-gray-600 mb-10 max-w-md">

Explore materials, textures and spatial concepts
that inspire modern living environments.

</p>

<Link href="/inspirations">

<button className="border border-black px-8 py-4 hover:bg-black hover:text-white transition">

Explore Inspirations →

</button>

</Link>

</div>


{/* IMAGE REVEAL */}

<div className="relative overflow-hidden rounded-xl group">

<img
src="/images/cta3.jpg"
className="w-full h-[520px] object-cover transition duration-[2000ms] group-hover:scale-110"
/>

<div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

<span className="text-white text-xl tracking-wide">

View Inspiration →

</span>

</div>

</div>

</div>

</div>

</section>
{/* INSPIRATIONS SCENE */}

<section
className="min-h-screen flex items-center bg-[#f5fffa]"
data-aos="fade-up"
>

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 px-6 items-center">

{/* IMAGE */}

<div className="relative overflow-hidden rounded-xl group">

<img
src="/images/cta3.jpg"
className="w-full h-[540px] object-cover transition duration-[2000ms] group-hover:scale-105"
/>

{/* subtle overlay */}

<div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition"></div>

</div>


{/* TEXT */}

<div>

<p className="uppercase tracking-[6px] text-sm text-gray-500 mb-6">
Inspirations
</p>

<h2 className="text-5xl leading-tight mb-8">

Discover ideas that shape
beautiful interiors.

</h2>

<p className="text-gray-600 mb-10 max-w-md leading-relaxed">

Explore curated inspirations featuring textures,
materials and spatial compositions that influence
modern interior design.

</p>

<Link href="/inspirations">

<button className="border border-black px-8 py-4 hover:bg-black hover:text-white transition">

Explore Inspirations →

</button>

</Link>

</div>

</div>

</section>
{/* JOURNAL SCENE */}

<section
className="min-h-screen flex items-center bg-white"
data-aos="fade-up"
>

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 px-6 items-center">

{/* IMAGE */}

<div className="relative overflow-hidden rounded-xl group">

<img
src="/images/cta4.jpg"
className="w-full h-[520px] object-cover transition duration-[2000ms] group-hover:scale-105"
/>

<div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition"></div>

</div>


{/* TEXT */}

<div>

<p className="uppercase tracking-[6px] text-sm text-gray-500 mb-6">
Journal
</p>

<h2 className=" text-black text-5xl leading-tight mb-6">

Designing calm and
beautiful living spaces.

</h2>

<p className="text-gray-600 mb-10 max-w-md leading-relaxed">

Read insights, ideas and design perspectives from
our studio exploring materials, spatial harmony
and contemporary interior living.

</p>

<Link href="/blog">

<button className=" text-black border border-black px-8 py-4 hover:bg-black hover:text-white transition">

Read Journal →

</button>

</Link>

</div>

</div>

</section>
{/* CONTACT SCENE */}

<section
className="relative min-h-screen flex items-center justify-center"
data-aos="fade-up"
>

{/* Background Image */}

<img
src="/images/cta6.jpg"
className="absolute w-full h-full object-cover"
/>

{/* Overlay */}

<div className="absolute inset-0 bg-black/60"></div>

{/* Content */}

<div className="relative text-center text-white px-6 max-w-2xl">

<p className="uppercase tracking-[6px] text-sm mb-6 opacity-80">
Start a Project
</p>

<h2 className="text-5xl leading-tight mb-8">

Let's design a space
that feels truly yours.

</h2>

<p className="mb-10 opacity-90 leading-relaxed">

Whether you are building a new home or transforming an
existing space, our studio would love to help craft an
environment that reflects your vision.

</p>

<Link href="/contact">

<button className="border border-white px-10 py-4 hover:bg-white hover:text-black transition">

Contact Us →

</button>

</Link>

</div>

</section>
</section>

)
}