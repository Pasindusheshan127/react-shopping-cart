import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Details from './pages/Details';
import Home from './pages/Home';
import { products } from './data/products';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home products={products}/>} />
          <Route path='/:slug' element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
