"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSlider() {

const images = [
"/images/hero1.jpg",
"/images/hero2.jpg",
"/images/hero3.jpg",
"/images/hero4.jpg",
"/images/hero5.jpg",
"/images/hero6.jpg",
"/images/hero7.jpg"
];

return (

<div className="w-full h-[100vh] relative">

{/* CUSTOM ARROWS */}

<div className="hero-prev absolute left-3 bottom-1/9 -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-3 rounded-full shadow cursor-pointer transition">

<FaChevronLeft className="text-black text-sm" />

</div>

<div className="hero-next absolute right-3 bottom-1/9 -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-3 rounded-full shadow cursor-pointer transition">

<FaChevronRight className="text-black text-sm" />

</div>


<Swiper
modules={[Navigation, Pagination, Autoplay]}
navigation={{
prevEl: ".hero-prev",
nextEl: ".hero-next"
}}
pagination={{ clickable: true }}
autoplay={{ delay: 4000 }}
loop={true}
className="w-full h-full"
>

{images.map((img,index)=>(
<SwiperSlide key={index}>

<img
src={img}
className="w-full h-full object-cover"
/>

</SwiperSlide>
))}

</Swiper>

</div>

);

}