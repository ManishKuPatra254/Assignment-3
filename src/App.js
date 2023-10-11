
import './App.css';
import backimage from './Images/rm314-adj-13.jpg'
import { Navbar } from './Navbar/Navbar';

function App() {

  return (
    <div className="App" style={{
      backgroundImage: `url(${backimage})`, width: '100%',
      height: '100vh',
      backgroundSize: 'cover',
      objectFit: 'cover'
    }}>
      <Navbar />
    </div>
  );
}

export default App;
