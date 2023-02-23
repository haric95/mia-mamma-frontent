import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Image from "next/image";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaBandcamp } from "react-icons/fa";
import { ImSoundcloud } from "react-icons/im";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HTMLString, StrapiImage } from "../types";
// import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Section } from "../components/Section";

// type ImagesResponse = {
//   data: {
//     attributes: {
//       HomepageImages: {
//         data: StrapiImage[];
//       };
//     };
//   };
// };

// type ContentResponse = {
//   data: {
//     attributes: {
//       markup: string;
//     };
//   };
// };

const Home = () => {
  return (
    <div>
      <Head>
        <meta name="description" content="Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen relative">
        <Header />
        <div className="mx-4 md:mt-40">
          <Section className="bg-main-light w-full h-32 mb-8"></Section>
          <Section className="bg-main-light w-full h-32 mb-8"></Section>
          <Section className="bg-main-light w-full h-32 mb-8"></Section>
          <Section className="bg-main-light w-full h-32 mb-8"></Section>
        </div>
        <Footer />
      </main>
    </div>
  );
};

// export const getStaticProps: GetStaticProps<{
//   images: ImagesResponse;
// }> = async () => {
//   // Run API calls in parallel
//   const [imageRes] = await Promise.all([
//     fetchAPI("/homepage-image", { populate: "*" }),
//   ]);

//   return {
//     props: {
//       images: imageRes,
//     },
//     revalidate: 1,
//   };
// };

export default Home;
