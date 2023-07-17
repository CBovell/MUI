import * as React from 'react';
import ResponsiveGallery from "react-responsive-gallery";
import Footer from './Footer';


export default function Gallery() {
  return (
    <div className='gallery'>
    <div className='gal'>
      <h1 className='galtxt'>Joe</h1>
        <ResponsiveGallery
        useLightBox
        images={itemData}
        />
        <br/>
        <h1>Joe</h1>
        <ResponsiveGallery
        useLightBox
        images={itemData}
        />
        <br/>
        <h1>Joe</h1>
        <ResponsiveGallery
        useLightBox
        images={itemData}
        />
        <br/>
        <h1>Joe</h1>
        <ResponsiveGallery
        useLightBox
        images={itemData}
        />
    </div>
    <Footer/>
    </div>
  );
}

const itemData = [
  {
    src: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    imgClassName:'card'
  },
  {
    src: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    imgClassName:'card'
  },
  {
    src: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    imgClassName:'card'
  },
  {
    src: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    imgClassName:'card'
  },
  {
    src: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    imgClassName:'card'
  },
  {
    src: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    imgClassName:'card'
  },
  {
    src: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    imgClassName:'card'
  },
  {
    src: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    imgClassName:'card'
  },
  {
    src: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    imgClassName:'card'
  },
  {
    src: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    imgClassName:'card'
  },
  {
    src: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    imgClassName:'card'
  },
  {
    src: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    imgClassName:'card'
  },
];