import React from 'react'
import Image from "next/image";
// import chairCat from "../../../public/assets/chairCat.png";

const CategoryCard = ({ img, title }) => {
  return (
    <div className='h-32 w-36 flex flex-col gap-4 p-4 items-center justify-center bg-[#f5f5f5]'>
       <Image src={""} width={40} height={40} alt="logo" /> 
        <h1>{title}</h1>
    </div>
  )
}

export default CategoryCard