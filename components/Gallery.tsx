import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image, { StaticImageData } from "next/image";
import { useIsMobile } from "../hooks/useIsMobile";

type SlideImage = { src: StaticImageData; alt: string };

type GalleryProps = {
  images: SlideImage[];
};

export const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const isMobile = useIsMobile();
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={isMobile ? 1.5 : 3}
      // onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="h-full"
      pagination
    >
      {images.map((image, index) => (
        <SwiperSlide className="h-full">
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="contain"
            className="absolute"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
