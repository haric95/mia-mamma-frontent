import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/Header";

import { Footer } from "../components/Footer";
import { Section } from "../components/Section";

import Hari from "../assets/hari.jpeg";
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
        <div className="mx-4 md:mt-40">
          <Section className="bg-main-light w-full mb-8">
            <div className="w-full flex md:h-[480px]">
              <div className="h-full w-1/2 rounded-mamma overflow-hidden relative">
                <Image src={Hari} alt="hari" layout="fill" objectFit="cover" />
              </div>
              <div className="w-1/2 p-8">
                <div className="bg-main rounded-[50%] w-full h-full flex flex-col justify-end items-center p-8">
                  <Button className="w-fit">Learn More</Button>
                </div>
              </div>
            </div>
          </Section>
          <Section className="bg-main-light w-full mb-8">
            <div className="w-full flex md:h-[480px]">
              <div className="h-full w-full rounded-mamma overflow-hidden relative flex">
                <Image
                  src={Hari}
                  alt="hari"
                  layout="fill"
                  objectFit="cover"
                  className="absolute"
                />
                <div className="w-1/2 p-8 z-10">
                  <div className="rounded-mamma h-full w-full bg-main opacity-80"></div>
                </div>
              </div>
            </div>
          </Section>
          <div className="w-full h-[480px] flex mb-8">
            <Section className="bg-main-light w-full w-1/2 mr-4 h-full relative">
              <Image
                src={Hari}
                alt="hari"
                layout="fill"
                objectFit="cover"
                className="absolute"
              />
            </Section>
            <Section className="bg-main-light w-full w-1/2 h-full">
              <div className="h-full w-full p-8 flex flex-col justify-end items-center">
                <Button>Learn more</Button>
              </div>
            </Section>
          </div>
          <Section className="bg-main w-full mb-8 ">
            <div className="h-full w-full p-8 flex flex-col justify-end items-center">
              <h2 className="text-white text-medium text-center mb-8">
                We're all about people.
              </h2>
              <div className="w-full h-[240px] mb-8">
                <Gallery
                  images={[
                    { src: Hari, alt: "hari" },
                    { src: Hari, alt: "hari" },
                    { src: Hari, alt: "hari" },
                    { src: Hari, alt: "hari" },
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
