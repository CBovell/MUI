import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Gallery() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 18 }}>
        {Array.from(Array(7)).map((_, index) => (
          <Grid item xs={1} sm={4} md={6} key={index}>
            
                <div className='cardwrap'><img src='https://www.hdwallpapers.in/download/dessert_cake_raspberries_sweet_fruit_blueberry_black_currant_4k_hd-HD.jpg' className='cards'/></div>
                
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}