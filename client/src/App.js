import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Details from './pages/Details';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/:slug' element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
