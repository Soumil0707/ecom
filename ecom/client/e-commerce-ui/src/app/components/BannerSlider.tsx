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
      className="w-full h-[400px]"
    >
      <SwiperSlide>
        <Image src="/products/1g.png" alt="Banner 1" className="w-full h-full object-cover" fill />
      </SwiperSlide>

      <SwiperSlide>
        <Image src="/products/2g.png" alt="Banner 2" className="w-full h-full object-cover" fill />
      </SwiperSlide>

      <SwiperSlide>
        <Image src="/products/3b.png" alt="Banner 3" className="w-full h-full object-cover" fill />
      </SwiperSlide>
    </Swiper>
  );
}