
import './App.css';
import Navbar from './components/Navbar';


const obj = {
  text: 'joe',
  date: 'June'
}

function App() {
  return (
    <Navbar info={obj}/>
  );
}

export default App;
