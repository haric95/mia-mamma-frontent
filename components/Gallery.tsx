import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image, { StaticImageData } from "next/image";

type SlideImage = { src: StaticImageData; alt: string };

type GalleryProps = {
  images: SlideImage[];
};

export const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3.2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="h-full"
      pagination
    >
      {images.map((image, index) => (
        <SwiperSlide className="h-full border-2 border-white">
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            className="absolute border-2 border-white"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
