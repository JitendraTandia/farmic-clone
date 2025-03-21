import React from 'react'
import Image from "next/image";
import HeroImg from "../../../public/assets/carImg1.png";

const Hero = () => {
  return (
    <div className='font-[playfairdisplay]  h-screen bg-[#fcf5ed]'>
       <div className="max-w-[70rem] mx-auto flex justify-between items-center p-8 gap-10">
        <div className='flex flex-col gap-10'>
            <h4 className='uppercase text-xl font-light tracking-widest'>45% mega sale offer</h4>
            <h1 className='text-6xl font-bold'>Unique & Stylish Furniture</h1>
            <p className='font-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae eaque nostrum illo facere doloremque quibusdam nisi voluptatum.
            </p>
            <button className=' px-4 py-2 border bg-black text-white capitalize'>Shop Now</button>
        </div>
        <div>
            <Image src={HeroImg} width={1000} height={1000} alt="logo" />
        </div>
        </div>
    </div>
  )
}

export default Hero