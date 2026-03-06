"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function BannerSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      pagination={{ clickable: true }}
      className="w-full h-[400px]"
    >
      <SwiperSlide>
        <img src="/products/1g.png" className="w-full h-full object-cover" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/products/2g.png" className="w-full h-full object-cover" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/products/3b.png" className="w-full h-full object-cover" />
      </SwiperSlide>
    </Swiper>
  );
}