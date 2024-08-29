import React from 'react'
import {Link} from "react-router-dom"

const ProductCart = (props) => {
    const {id,name,price,image,slug} = props.data;
  return (
    <div className='bg-white p-5 rounded-xl shadow-sm'>
        <Link to={slug}>
           <img src={image} alt="" className='w-full h-80 object-cover object-top drop-shadow-[0-80px-300px-#0007]' />

        </Link>
        <h3 className='text-xl py-3 text-center font-medium '>{name}</h3>
        <div className='flex justify-between items-center'>
          <p>
            $<span className='text-2xl font-medium'>{price}</span>
          </p>
          <button className='bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400'>Add To Cart</button>
        </div>
    </div>
  )
}

export default ProductCart