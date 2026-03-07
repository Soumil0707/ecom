"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

export default function BannerSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      pagination={{ clickable: true }}
      className="w-full aspect-[3/1]"
    >
      <SwiperSlide className="relative">
        <Image
          src="/featured.png"
          alt="Banner 1"
          fill
          sizes="100vw"
          className="object-contain"
        />
      </SwiperSlide>

      <SwiperSlide className="relative">
        <Image
          src="/Gemini_Generated_Image_n96ez8n96ez8n96e.png"
          alt="Banner 2"
          fill
          sizes="100vw"
          className="object-contain"
        />
      </SwiperSlide>

      <SwiperSlide className="relative">
        <Image
          src="/Gemini_Generated_Image_su35hsu35hsu35hs.png"
          alt="Banner 3"
          fill
          sizes="100vw"
          className=" object-contain"
        />
      </SwiperSlide>
    </Swiper>
  );
}