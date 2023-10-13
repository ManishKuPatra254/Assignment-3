
import './App.css';
import backimage from './Images/rm314-adj-13.jpg'
import { Navbar } from './Navbar/Navbar';
import { Herosection } from './Herosection/Herosection';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home/Home';
import { Services } from './Services/Services';

function App() {

  return (
    <div className="App" style={{
      backgroundImage: `url(${backimage})`, width: '100%',
      height: 'auto',
      backgroundSize: 'cover',
      objectFit: 'cover'
    }}>

      <BrowserRouter>
        <Navbar />
        <Herosection />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
