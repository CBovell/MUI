import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Link} from 'react-router-dom';

export default function Navbar() {

  return (

    <center><div className='nav'>

    <Link to='/home'>
    <Tab label="Home" />
    </Link> 

    <Link to = '/gallery'>
    <Tab label="Gallery" />
    </Link>
    

    <Link to = '/goods'>
    <Tab label="Baked Goods" />
    </Link>

    

    </div></center>
    
    
  );
}