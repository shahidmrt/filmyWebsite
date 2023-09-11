import React from 'react'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { dataCarosal } from './data';
import Navbar from '../Navbar/Navbar';

export default function Firstcrousal() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <Navbar/>
    <div className='crosl w-[80%] mx-auto my-12 bg-black-400 ' id='frstslider'>
     
        <Slider {...settings}>
        {dataCarosal.map((item)=>(
          <div className=" outline-none overflow-hidden h-[400px] ">
              
              <img  src={item.linkimg} alt="picnotshow" className='object-cover w-full h-full z-[-1]' />
             <div className='relative left-3  bottom-[90px] z-50'> <p className='bg-yellow-500 inline px-3' >{item.stiker}</p></div>
              <div className='relative left-3 bottom-[90px] z-50'><h2 className='font-bold text-2xl text-red-500'>{item.title}</h2></div>
             <div className='relative left-3 bottom-[90px] z-50'> <p>{item.number}</p></div>
         </div>
        ))}
  
  
        </Slider>
        
     
      
       
    </div>
    </>
  )
}
