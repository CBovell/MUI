import * as React from 'react';
import ResponsiveGallery from "react-responsive-gallery";
import Footer from './Footer';
import { useState, useEffect } from 'react';
import {storage} from '../firebase'
import {ref, listAll, getDownloadURL} from 'firebase/storage'






function Gallery() {
  const [cat1, setCat1] = useState([])
  const [cat2, setCat2] = useState([])
  const [cat3, setCat3] = useState([])
  const [cat4, setCat4] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = async (ref, cat) => {  
    try {
      const images = await listAll(ref)

      images.items.forEach( async (imageRef)=>{
        try {
          const imgURL = await getDownloadURL(imageRef)
          if(cat == 1){
            setCat1((cat1) => [...cat1, {src:imgURL, imgClassName:'card'}])
          }
          if(cat == 2){
            setCat2((cat2) => [...cat2, {src:imgURL, imgClassName:'card'}])
          }
          if(cat == 3){
            setCat3((cat3) => [...cat3, {src:imgURL, imgClassName:'card'}])
          }
          if(cat == 4){
            setCat4((cat4) => [...cat4, {src:imgURL, imgClassName:'card'}])
          }

        } catch (error) {
          console.log(error)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  

  useEffect(()=>{
    fetchData(ref(storage, 'CAT1'),1)
    fetchData(ref(storage, 'CAT2'),2)
    fetchData(ref(storage, 'CAT3'),3)
    fetchData(ref(storage, 'CAT4'),4)
    setTimeout(setLoading(true), 200000)
  },[])



   if(loading){
    return (
    
    <div className='gallery'>
    <div className='gal'>
      <h1 className='galtxt'>{process.env.REACT_APP_CAT1}</h1>
        <ResponsiveGallery
        useLightBox
        images={cat1}
        colsPadding={{xs: 4,s: 4,m: 7,l: 7,xl: 7,xxl:12}}
        imagesPaddingBottom={{xs: 4,s: 4,m: 4,l: 16,xl: 16,xxl:16}}
        />
        <br/>
        <br/>
        <br/>
        <h1>{process.env.REACT_APP_CAT2}</h1>
        <ResponsiveGallery
        useLightBox
        images={cat2}
        colsPadding={{xs: 4,s: 4,m: 7,l: 7,xl: 7,xxl:12}}
        imagesPaddingBottom={{xs: 4,s: 4,m: 4,l: 16,xl: 16,xxl:16}}
        />
        <br/>
        <br/>
        <br/>
        <h1>{process.env.REACT_APP_CAT3}</h1>
        <ResponsiveGallery
        useLightBox
        images={cat3}
        colsPadding={{xs: 4,s: 4,m: 7,l: 7,xl: 7,xxl:12}}
        imagesPaddingBottom={{xs: 4,s: 4,m: 4,l: 16,xl: 16,xxl:16}}
        />
        <br/>
        <br/>
        <br/>
        <h1>{process.env.REACT_APP_CAT4}</h1>
        <ResponsiveGallery
        useLightBox
        images={cat4}
        colsPadding={{xs: 4,s: 4,m: 7,l: 7,xl: 7,xxl:12}}
        imagesPaddingBottom={{xs: 4,s: 4,m: 4,l: 16,xl: 16,xxl:16}}
        />
        <br/>
        <br/>
        <br/>
    </div>
    <Footer/>
    </div>
  );}
}
export default Gallery