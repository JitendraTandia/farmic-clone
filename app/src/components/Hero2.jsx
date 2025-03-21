import React from "react";
import Image from "next/image";
import HeroImg1 from "../../../public/assets/hero2img1.jpeg";
import HeroImg2 from "../../../public/assets/hero2img2.png";

const Hero2 = () => {
  return (
    <div className="font-[playfairdisplay] flex w-full bg-[#ffffff]">
        <div className="bg-[#404a49] flex p-8 text-white items-center justify-center">
            <div className="flex flex-col gap-10">
            <h1 className="text-[#dfede2]">NEW <strong>COLLECTIONS</strong></h1>
            <h1 className="text-4xl text-[#dfede3] font-bold">Accent Leisure Chairs</h1>
            <p className="w-[20rem] text-[#bfbbbb]">Lorem ipsum dolor sit amet, consectetur scelerisque a tincidunt urna quam</p>
            <button className="uppercase px-6 py-2 border text-black bg-[#d0dbd2]">Shop Now</button>
            </div>

            <div className="">
            <Image  src={HeroImg1} width={500} height={500} alt="logo" />
            </div>
            
        </div>
        <div className="flex p-10 flex-col gap-6 items-center justify-center">
            <h1 className="font-light text-xl tracking-widest">UP TO <strong className="border-b-2 text-[#ba6b56]">20% OFF</strong></h1>
            <h1 className="text-4xl font-semibold">Modern & Minimal</h1>
            <p className="text-[#696969]">Don’t miss avail the saving opportunity</p>
             <Image src={HeroImg2} width={800} height={800} alt="logo" />
        </div>

    </div>
  );
};

export default Hero2;
