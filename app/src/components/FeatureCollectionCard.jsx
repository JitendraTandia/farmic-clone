'use client'

import React, { useState } from "react";
import Image from "next/image";
import img1 from "../../../public/assets/fImg1.jpeg";

const FeatureCollectionCard = ({ img, title, price }) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="relative h-100 w-90 flex flex-col gap-4 p-4 items-center justify-center bg-[#f5f5f5]">
        <div>
          <Image src={img1} width={500} height={500} alt="logo" />

          {/* <div className=" h-10 w-28 border-2 bottom-4 absolute"></div> */}

          <button
            className={`absolute overflow-hidden -bottom-0 left-0 w-36  bg-[#e3e3e3] text-black py-3 transition-all duration-200 ease-in-out ${
              isHovered ? "-translate-y-full" : "-translate-y-0"
            }`}
          >
           Add to Cart
          </button>
        </div>
      </div>
      <div className="inline-block font-[playfairdisplay]">
        <h1 className="font-semibold text-3xl mt-8">{title}</h1>
        <p className="font-semibold mt-2 text-lg">$ {price} USD</p>
      </div>
    </>
  );
};

export default FeatureCollectionCard;
