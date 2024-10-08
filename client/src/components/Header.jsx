
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import iconCart from '../assets/images/iconCart.png';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStatusTab } from '../store/cart';

const Header = ({ onSearch }) => { // Added onSearch prop for search functionality
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => {
      total += item.quantity;
    });
    setTotalQuantity(total);
  }, [carts]);

  const handleOpenTabBar = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <header className="flex justify-between items-center mb-5">
      <Link to="/" className="text-xl font-semibold">
        Home.
      </Link>
      {/* Added Search Bar */}
      <input 
        type="text" 
        placeholder="Search products..." 
        className="border p-1 rounded" 
        onChange={(e) => onSearch(e.target.value)}
      />
      <div className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative" onClick={handleOpenTabBar}>
        <img src={iconCart} alt="cart icon" className="w-6" />
        <span className="absolute top-0 right-0 bg-red-500 text-white text-sm w-4 h-4 rounded-full flex justify-center items-center">
          {totalQuantity}
        </span>
      </div>
    </header>
  );
};

export default Header;
