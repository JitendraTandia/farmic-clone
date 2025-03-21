import React from "react";
import Image from "next/image";
import Logo from "../../../public/assets/logo.png";
import { CiSearch } from "react-icons/ci";

import Profile from "../../../public/assets/profile.png";
import Basket from "../../../public/assets/basket.png";
import Arrow from "../../../public/assets/arrow.png";



const Navbar = () => {
  return (
    <div className="font-[playfairdisplay] bg-[#fcf5ed]">
      <div className="max-w-[70rem] mx-auto flex justify-between items-center p-8 gap-10">
        <div>
        <Image src={Logo} width={100} height={100} alt="logo" />
         </div>


        <div className="flex items-center gap-16 justify-center">
            <div className="flex items-center justify-center gap-2">
            <h1>Home</h1>
            <Image src={Arrow} width={15} height={15} alt="logo" />
            </div>

            <div className="flex items-center justify-center gap-2">
            <h1>Pages</h1>
            <Image src={Arrow} width={15} height={15} alt="logo" />
            </div>
        
            <h1>About</h1>
            <h1>Contact</h1>
        </div>


        <div className="flex ml-2 items-center justify-center gap-20 border-b-1">
            <h1>Search</h1>
            <CiSearch size={25}/>
        </div>
        <div className="flex items-center justify-center gap-4">
        <Image src={Profile} width={25} height={100} alt="logo" />
        <Image src={Basket} width={25} height={100} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
