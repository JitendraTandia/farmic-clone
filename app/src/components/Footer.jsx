import React from "react";
import Image from "next/image";
import Logo from "../../../public/assets/logo.png";
import Slogo1 from "../../../public/assets/Sfb.png";
import Slogo2 from "../../../public/assets/Sx.png";
import Slogo3 from "../../../public/assets/Sinsta.png";
import Slogo4 from "../../../public/assets/SBehance.png";

const Footer = () => {
  return (
    <div className="bg-[#f2f2f2] font-[playfairdisplay]">
      <div className="max-w-[70rem] mx-auto py-52 grid grid-cols-4 gap-20 ">


        <div className="1 flex flex-col gap-4">
            <div className="flex flex-col gap-8">
          <Image src={Logo} width={100} height={100} alt="logo" />
          <p>256, Central City, Borlex House Main town, New York, USA</p>
          <p>+123 456 7890</p>
          <p>www.examples.com</p>
          </div>
        </div>

        <div className="2 flex flex-col gap-4">
          <div>
            <h1 className="text-2xl">Company</h1>
          </div>
          <div className="flex flex-col mt-6 gap-6">
            <h4>Home</h4>
            <h4>About Us</h4>
            <h4>Our Blog Post</h4>
            <h4>Contact</h4>
            <h4>Login</h4>
            <h4>Register</h4>
            <h4>Shop</h4>
          </div>
        </div>


        <div className="3 flex flex-col gap-4">
          <div>
            <h1 className="text-2xl">Information</h1>
          </div>
          <div className="flex flex-col mt-6 gap-6">
            <h4>Terms & Conditions</h4>
            <h4>Style Guide</h4>
            <h4>Change Blog</h4>
            <h4>Licences</h4>
          </div>
          </div>


          <div className="4 flex flex-col gap-4">
            <div>
              <h1 className="text-2xl">Newsletter</h1>
            </div>
            <div className="flex flex-col mt-6 gap-6">
              <p>
                Subscribe our Newsletter and get all latest information and
                offers
              </p>
              <div>
                <input type="text" placeholder="Email Here" />
                <button>Subscribe</button>
              </div>
              <h1>Follow Us</h1>
              <div className="flex gap-4">
                <Image className="cursor-pointer" src={Slogo1} width={0} height={0} alt="logo" />
                <Image className="cursor-pointer" src={Slogo2} width={0} height={0} alt="logo" />
                <Image className="cursor-pointer" src={Slogo3} width={0} height={0} alt="logo" />
                <Image className="cursor-pointer" src={Slogo4} width={0} height={0} alt="logo" />
              </div>
            </div>
          </div>

          
        </div>
    
    </div>
  );
};

export default Footer;
