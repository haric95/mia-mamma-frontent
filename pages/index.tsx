import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/Header";

import { Footer } from "../components/Footer";
import { Section } from "../components/Section";

import Hari from "../assets/hari.jpeg";
import Group1 from "../assets/group-1.png";
import Kids1 from "../assets/kids-1.png";
import MauroMin from "../assets/mauro-min.png";
import Gallery1 from "../assets/gallery-1.png";
import Gallery2 from "../assets/gallery-2.png";
import Gallery3 from "../assets/gallery-3.png";
import { Button } from "../components/Button";
import { Gallery } from "../components/Gallery";

const Home = () => {
  return (
    <div>
      <Head>
        <meta name="description" content="Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen relative">
        <Header />
        <div className="mx-4 mt-24 md:mt-40">
          <Section className="bg-main-light w-full mb-8">
            <div className="w-full flex flex-col md:flex-row md:h-[480px]">
              <div className="h-[240px] md:h-full w-full md:w-1/2 rounded-mamma overflow-hidden relative">
                <Image src={Kids1} alt="Kids" layout="fill" objectFit="cover" />
              </div>
              <div className="h-[320px] md:h-full w-full md:w-1/2 p-4 md:p-8">
                <div className="bg-main rounded-[50%] w-full h-full flex flex-col justify-end items-center p-8">
                  <Button className="w-fit">Learn More</Button>
                </div>
              </div>
            </div>
          </Section>
          <Section className="bg-main-light w-full mb-8">
            <div className="w-full flex h-[320px] md:h-[480px]">
              <div className="h-full w-full rounded-mamma overflow-hidden relative flex">
                <Image
                  src={Group1}
                  alt="Group"
                  layout="fill"
                  objectFit="cover"
                  className="absolute"
                />
                <div className="w-full md:w-1/2 p-4 md:p-8 z-10">
                  <div className="rounded-mamma h-full w-full bg-main opacity-80"></div>
                </div>
              </div>
            </div>
          </Section>
          <div className="w-full h-[480px] flex flex-col md:flex-row mb-8">
            <Section className="bg-main-light w-full w-full md:w-1/2 mr-4 mb-4 md:mb-0 h-full relative">
              <Image
                src={MauroMin}
                alt="hari"
                layout="fill"
                objectFit="cover"
                className="absolute"
              />
            </Section>
            <Section className="bg-main-light w-full md:w-1/2 h-full">
              <div className="h-full w-full p-8 flex flex-col justify-end items-center">
                <Button>Learn more</Button>
              </div>
            </Section>
          </div>
          <Section className="bg-main w-full mb-8 ">
            <div className="h-full w-full p-8 flex flex-col justify-end items-center">
              <h2 className="text-white text-xsmall md:text-medium text-center mb-4 md:mb-8">
                We're all about people.
              </h2>
              <div className="w-full h-[240px] md:h-[360px] mb-8">
                <Gallery
                  images={[
                    { src: Gallery1, alt: "hari" },
                    { src: Gallery2, alt: "hari" },
                    { src: Gallery3, alt: "hari" },
                  ]}
                />
              </div>
              <Button>Learn more</Button>
            </div>
          </Section>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
