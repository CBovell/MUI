import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function Navbar() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <center><div className='nav'>
    <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
      <Tab label="Active" />
      <Tab label="Disabled" />
      <Tab label="Active" />
    </Tabs>
    </div></center>
    
    
  );
}