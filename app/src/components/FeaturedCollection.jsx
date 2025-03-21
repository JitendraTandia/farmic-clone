import React from 'react'
import FeatureCollectionCard from './FeatureCollectionCard'
import { featuredData } from '@/app/data/featuredData'

const FeaturedCollection = () => {
  return (
    <div className='mt-20'>
        <div className="max-w-[70rem] mx-auto">
            <h1 className='text-4xl font-semibold font-[playfairdisplay]'>Featured Collection</h1>
            <p className='font-thin mt-4 text-lg'>Most Selling and Trending Product</p>
       <div className='mt-16 grid grid-cols-3 w-full'>
        {featuredData.map((item, idx)=>(
          <div key={idx} className='py-4'>
          <FeatureCollectionCard img={item.img} title={item.title} price={item.price}/>
          </div>
        ))}
       </div>
        </div>
    </div>
  )
}

export default FeaturedCollection