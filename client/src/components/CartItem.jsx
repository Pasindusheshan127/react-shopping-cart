import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../store/cart';

const CartItem = ({ data }) => {
  const { productId, quantity } = data;
  const [detail, setDetail] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch product details from backend
    axios.get(`http://localhost:5000/api/products/${productId}`)
      .then(response => {
        setDetail(response.data);
      })
      .catch(error => console.error('Error fetching product details:', error));
  }, [productId]);

  const handleMinusQuantity = () => {
    if (quantity > 1) {
      dispatch(changeQuantity({
        productId,
        quantity: quantity - 1
      }));
    }
  };

  const handlePlusQuantity = () => {
    dispatch(changeQuantity({
      productId,
      quantity: quantity + 1
    }));
  };

  if (!detail) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md'>
      <img src={detail.image} alt={detail.name} className='w-12' />
      <h3 className="">{detail.name}</h3>
      <p className="">{detail.price * quantity}</p>
      <div className="w-20 flex justify-between gap-2">
        <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handleMinusQuantity}>-</button>
        <span>{quantity}</span>
        <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handlePlusQuantity}>+</button>
      </div>
    </div>
  );
};

export default CartItem;

