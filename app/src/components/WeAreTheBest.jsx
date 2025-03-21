import React from "react";
import BestImg from "../../../public/assets/best.png";
import icon1 from "../../../public/assets/icon1.png";
import icon2 from "../../../public/assets/icon2.png";
import icon3 from "../../../public/assets/icon3.png";
import icon4 from "../../../public/assets/icon4.png";
import Image from "next/image";

const WeAreTheBest = () => {
  return (
    <div className="flex justify-between items-center font-[playfairdisplay] p-20 mt-14">
      <div className="left flex flex-col gap-6 p-8 ">
        <h1 className="text-5xl font-bold">Why We are the Best?</h1>
        <p className="text-lg font-light  text-gray-500">
          Features that we have which Lorem ipsum dolor sit amet, consectetur
          convallis. Arcu, egestas nec scelerisque mi. Augue proin
        </p>
        <div>
          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="flex gap-4">
              <div className="left-icon">
                <Image src={icon1} alt="icon1" />
              </div>
              <div className="w-74">
                <h4 className="text-2xl font-bold">Free Shipping</h4>
                <p className="text-lg mt-2 text-gray-500 font-light">
                  Buy product over $100 and get free home delivery offer
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="left-icon">
                <Image src={icon2} alt="icon1" />
              </div>
              <div className="w-74">
                <h4 className="text-2xl font-bold">Easy Return Policy</h4>
                <p className="text-lg font-light text-gray-500">
                Provide 30 day easy Return policy for all of our customer
                </p>
              </div>
            </div>

            <div className="flex  gap-4">
              <div className="left-icon">
                <Image src={icon3} alt="icon1" />
              </div>
              <div className="w-74">
                <h4 className="text-2xl font-bold">Secure Payment</h4>
                <p className="text-lg font-light text-gray-500">
                We conform you that payment system are totally secure
                </p>
              </div>
            </div>

            <div className="flex  gap-4">
              <div className="left-icon">
                <Image src={icon4} alt="icon1" />
              </div>
              <div className="w-74">
                <h4 className="text-2xl font-bold">Best Quality</h4>
                <p className="text-lg font-light text-gray-500">
                We never compromize about our quality and always concern
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right">
        <Image src={BestImg} alt="best" />
      </div>
    </div>
  );
};

export default WeAreTheBest;
