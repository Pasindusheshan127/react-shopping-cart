import React from 'react'
import { products } from '../data/products'
import ProductCart from '../components/ProductCart'

const home = () => {
  return (
    <div>
      <h1 className='text-3xl my-5'>List Products</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {products.map(product =>(
          <ProductCart key='' data={product}/>
        ))}
      </div>
    </div>
  )
}

export default home