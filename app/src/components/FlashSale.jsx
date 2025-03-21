import React from "react";
import { CiBellOn } from "react-icons/ci";

const FlashSale = () => {
  return (
    <div>
      <div className="font-[playfairdisplay] flex font-light bg-[#fcf5ed] p-3">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 ">
          <CiBellOn size={20} />
          <p>Flash sale is going <strong>upto 75%</strong></p>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
