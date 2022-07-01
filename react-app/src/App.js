import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {Coin} from './Coin';
import {Navigation} from './Navigation';
import {BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <h3 className="m-3 d-flex justify-content-center">
        CryptoCurrency
      </h3>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Coin' element={<Coin/>} />

      </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
