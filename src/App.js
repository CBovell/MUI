
import './App.css';
import Goods from './components/Goods';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import { Route,Routes, Navigate } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';


const obj = {
  text: 'joe',
  date: 'June'
}

function App() {
  return (
    <BrowserRouter>
      <center>
      <div className='yob'>
        <center><Navbar info={obj}/></center>
        <Routes>
        <Route path='/home' element = {<Home />}></Route>
        <Route path='/gallery' element = {<Gallery />}></Route>
        <Route path='/order' element = {<Goods />}></Route>
        <Route path='*' element = {<Navigate to ={"/home"}/>}></Route>
      </Routes>

      
      </div>
      

      </center>
    </BrowserRouter>
  );
}

export default App;
