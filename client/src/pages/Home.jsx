import React, { useState, useEffect } from 'react';
import ProductCart from '../components/ProductCart';
import axios from 'axios'; 

const categories = ['All', 'Laptops', 'Accessories']; 

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // Fetch products from backend
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    setFilteredProducts(products); // Set filtered products when products change
  }, [products]);

  
  // Handle category filtering
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const filtered = products.filter(
      (product) => category === 'All' || product.category === category
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <h1 className="text-3xl my-5">List of Products</h1>

      {/* Product Category Menu */}
      <div className="mb-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`mr-2 ${
              selectedCategory === category ? 'bg-gray-500 text-white' : 'bg-gray-300'
            } p-2 rounded`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {Array.isArray(filteredProducts) &&
          filteredProducts.map((product) => (
            <ProductCart key={product.id} data={product} />
          ))}
      </div>
    </div>
  );
};

export default Home;
