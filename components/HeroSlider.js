"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

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

<div className="w-full h-[100vh]">

<Swiper
modules={[Navigation, Pagination, Autoplay]}
navigation
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