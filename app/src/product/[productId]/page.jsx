import React from 'react'

const page = ({ params }) => {
    const { productId } = params;
    console.log(productId);
  return (
    <div> {productId} <h1>Product Page</h1></div>
  )
}

export default page