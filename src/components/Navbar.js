import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Link} from 'react-router-dom';


export default function Navbar() {

  return (

    <center><div className='nav'>

    <Link to='/home'>
    <button className='button'>HOME</button>
    </Link> 

    <Link to = '/gallery'>
    <button className='button'>GALLERY</button>
    </Link>
    

    <Link to = '/order'>
    <button className='button'>ORDER</button>
    </Link>

    

    </div></center>
    
    
  );
}