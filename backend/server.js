const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Mock product data
const products = [
  // Laptops
  { id: 1, name: 'Laptop Pro 2024', price: 1199.99, category: 'Laptops', image: '/assets/images/1.jpeg', slug: 'laptop-pro-2024' },
  { id: 2, name: 'Gaming Laptop X', price: 1499.99, category: 'Laptops', image: 'https://example.com/images/gaming-laptop-x.jpg', slug: 'gaming-laptop-x' },
  // Accessories
  { id: 3, name: 'Wireless Mouse', price: 29.99, category: 'Accessories', image: 'https://example.com/images/wireless-mouse.jpg', slug: 'wireless-mouse' },
  { id: 4, name: 'Bluetooth Headphones', price: 89.99, category: 'Accessories', image: 'https://example.com/images/bluetooth-headphones.jpg', slug: 'bluetooth-headphones' },
  { id: 5, name: 'USB-C Hub', price: 39.99, category: 'Accessories', image: 'https://example.com/images/usb-c-hub.jpg', slug: 'usb-c-hub' },
  { id: 6, name: 'Laptop Stand', price: 49.99, category: 'Accessories', image: 'https://example.com/images/laptop-stand.jpg', slug: 'laptop-stand' }
];

app.use(cors());


// API endpoints
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/categories', (req, res) => {
  const categories = [...new Set(products.map((product) => product.category))];
  res.json(categories);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
