import Link from "next/link";
import React, { useState } from "react";
import { Logo } from "./Logo";
import { useRouter } from "next/router";
import { LinkArray } from "./LinkArray";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";

const DONATE_LINK = "https://enthuse.com";

export const Header = () => {
  const router = useRouter();

  const [mobileHeaderOpen, setMobileHeaderOpen] = useState(false);

  return (
    <>
      {/* desktop header */}
      <header className="fixed top-0 z-50 w-full font-title bg-white px-8 py-2 hidden md:flex flex-row text-white h-28">
        <div className="flex items-center mr-auto">
          <div className={`flex items-center`}>
            <LinkArray
              links={[
                { label: "Home", link: "/", external: false },
                { label: "Our Mission", link: "/our-mission", external: false },
                { label: "About Us", link: "/about-us", external: false },
                {
                  label: "Classes & Courses",
                  link: "/classes-and-courses",
                  external: false,
                },
              ]}
              linkClass="text-center"
            />
          </div>
        </div>
        <Link href="/">
          <button>
            <img src="/images/logo.png" alt="logo" className="h-24" />
          </button>
        </Link>
        <div className="flex items-center ml-auto">
          <div className={`flex items-center`}>
            <LinkArray
              links={[
                { label: "Books", link: "/books", external: false },
                { label: "Visit Us", link: "/visit-us", external: false },
                { label: "Contact", link: "/contact", external: false },
              ]}
              linkClass="text-center"
            />
          </div>
          <div className={`flex items-center`}>
            <LinkArray
              links={[
                {
                  label: "Donate Online ♡",
                  link: DONATE_LINK,
                  external: true,
                },
              ]}
              containerClass="!bg-red-500 ml-4 text-center"
            />
          </div>
        </div>
      </header>
      {/* mobile header */}
      <header className="fixed top-0 z-50 w-full bg-white flex md:hidden flex-row text-white h-16 justify-between items-center p-4">
        <div className="h-6 w-6"></div>
        <Link href="/">
          <button className="h-12 flex justify-center items-center">
            <img src="/images/logo.png" alt="logo" className="h-full w-auto" />
          </button>
        </Link>
        <button className="h-6 w-6" onClick={() => setMobileHeaderOpen(true)}>
          <GiHamburgerMenu className="w-full h-full" color="black" />
        </button>
      </header>

      {/* mobile drawer */}
      <div
        className={`z-100 fixed w-screen h-screen bg-white p-8 transition-all ${
          mobileHeaderOpen ? "left-0" : "left-[100%]"
        }`}
      >
        <div className="flex w-full h-6 justify-end">
          <button onClick={() => setMobileHeaderOpen(false)}>
            <GrFormClose color="black" className="h-full w-full" />
          </button>
        </div>
        <LinkArray
          containerClass="flex-col mb-8"
          links={[
            { label: "Home", link: "/", external: false },
            { label: "Our Mission", link: "/our-mission", external: false },
            { label: "About Us", link: "/about-us", external: false },
            {
              label: "Classes & Courses",
              link: "/classes-and-courses",
              external: false,
            },
          ]}
          linkClass="text-center"
        />
        <LinkArray
          containerClass="flex-col mb-8"
          links={[
            { label: "Books", link: "/books", external: false },
            { label: "Visit Us", link: "/visit-us", external: false },
            { label: "Contact", link: "/contact", external: false },
          ]}
          linkClass="text-center"
        />
        <LinkArray
          links={[
            {
              label: "Donate Online ♡",
              link: DONATE_LINK,
              external: true,
            },
          ]}
          containerClass="!bg-red-500 ml-4 text-center"
        />
      </div>
    </>
  );
};
