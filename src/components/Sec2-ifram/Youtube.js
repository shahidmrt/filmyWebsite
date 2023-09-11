import React, { useState } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ydata } from '../Sec2-ifram/Youtubdata';
import './Youtb.css'


export default function Youtube() {

  const [fid, setFid]=useState("e3Nl_TCQXuw")


      const func = (vidd) => {
        setFid(vidd);
           };
 
     


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        vertical: true,
        verticalSwiping: true,
       
      };


  return (
  
    <section className='bg-[#06121e] justify-center  items-center flex flex-col h-[900px] md:h-[700px] xl:p-12  p-3 relative overflow-hidden'>
      <div className='flex justify-between w-[90%] justify-center px-3 mt-5 ' >
         <h2 className='text-3xl teko font-bold text-white tracking-wider'>IN THEATER  </h2> 
          <p className='font-bold text-xl teko text-white tracking-wider'> VIEW ALL</p> 
          </div>
          <div className='md:flex  items-center justify-center w-full md:w-[90%] h-full xl:h-[80%]    '>
           {/* <div className=' relative overflow-hidden'> */}
           {/* <iframe width="853" height="480" src="https://www.youtube.com/embed/rLnbM-bJNec" title="4K HDR | Trailer #3 - Avatar: The Way of Water | New Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          <iframe className='w-[95%] md:w-[65%] md:h-full  h-[480px]' src={`https://www.youtube.com/embed/${fid}`} title="Mouse Events (onclick, ondblclick, onmouseover, onmouseout) in JavaScript in हिंदी /اردو - Class -26" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* </div> */}
          <div className='md:w-[35%] w-[95%]  bg-[#0b1a2a] py-9 md:inline block '>     



            <Slider {...settings}>
              {
               ydata.map((item)=> (
                <div className=' yotudiv w-full h-[100px]' data-vidid={item.id} onClick={()=>func(item.vlink)} >

                    <div className='w-full h-[100px] items-center flex ' key={item.id}>
                    <img className='h-[70px] w-[100px]  mx-3' src={item.imglink}   alt="" />
                    <div className='w-auto h-full flex flex-col justify-center'>
                        <h2 className='text-white teko text-lg h-[15px] '>{item.name}</h2><br />
                        <p className='text-gray-500 h-[10px]'>{item.time}</p>
                    </div>
                    </div>
                </div>
               ))
              }
                
                


            </Slider>

            </div>


        </div>

    </section>
    


  )
}
