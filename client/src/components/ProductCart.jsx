import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {Link} from "react-router-dom"
import { addToCart } from '../store/cart';

const ProductCart = (props) => {
    const carts = useSelector(store => store.cart.items)
    const {id,name,price,image,slug} = props.data;
    const dispatch = useDispatch();
    const handleAddToCart = () =>{
           dispatch(
            addToCart(
            {  
              productId: id,
              quantity:1
            }
            )
           )
    }
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
          <button className='bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400' onClick={handleAddToCart}>Add To Cart</button>
        </div>
    </div>
  )
}

export default ProductCart