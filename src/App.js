
import './App.css';
import Navbar from './components/Navbar';


const obj = {
  text: 'joe',
  date: 'June'
}

function App() {
  return (
    <center>
    <div className='yob'>
      <center><Navbar info={obj}/></center>
      
    </div>
    </center>
  );
}

export default App;
