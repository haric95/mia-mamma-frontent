import React from "react";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { FaBandcamp } from "react-icons/fa";
import { ImSoundcloud } from "react-icons/im";

export const Footer = () => {
  return (
    <div className="border-t-8 mt-16 p-4 border-main flex justify-between bg-white w-full">
      <div className="l">
        <div className="mb-4">
          <h4 className="text-xs">
            Copyright © 2019 - 2023 Mia Mamma Foundation
          </h4>
          <p className="text-xs">
            Community Interest Company (CIC) Number: 11190574
          </p>
          <p className="text-xs">46 Nova Road, Croydon, CRO 2TL</p>
        </div>
        <div className="mb-4 flex text-xs mb-4">
          <a>Terms & Conditions</a>
          <p className="mx-1">|</p>
          <a>Privacy & Cookie Policy</a>
          <p className="mx-1">|</p>
          <a>Accessibiliy</a>
          <p className="mx-1">|</p>
          <a>Contact</a>
        </div>
        <div>
          <img
            src="/images/fundraising-regulator.png"
            alt="FR/"
            className="h-8"
          />
        </div>
      </div>
      <div className="r">
        <div className="flex justify-end">
          <div className="flex-col">
            <img src="/images/logo.png" className="h-24" />
            <div className="flex w-full justify-between">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img
                  src="/images/instagram.png"
                  alt="instagram"
                  className="h-8"
                />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img
                  src="/images/facebook.png"
                  alt="facebook"
                  className="h-8"
                />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <img
                  src="/images/linkedin.png"
                  alt="linkedin"
                  className="h-8"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
