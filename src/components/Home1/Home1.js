import React, { useState } from 'react' ;
import { FaHeart,FaStepForward,FaShareAlt,FaTwitter,FaGooglePlusG,FaYoutube,FaFacebookF,FaStar,FaForward } from 'react-icons/fa';
import {homesecdata,homegallardata, filmdata, IFdata, secfour} from './HomeData';

 import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
 import "swiper/css";
 import "swiper/css/pagination";
 import "swiper/css/navigation";
 import "./swiperSliderr.css";
// // import required modules
 import { Pagination, Navigation } from "swiper";
 import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer from '../Footer'


export default function Home1() {

  const[frameu,setframeu]=useState("1Q8fG0TtVAY");
  const urlfram=(setvid)=>{
    setframeu(setvid);
    console.log(setvid)
    
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    vertical: true,
    verticalSwiping: true,
   
  };





  const [filtr, setfiltr]=useState(homesecdata);
  const [secodfltr ,setsecodfltr]=useState(homegallardata);
   
  const fltritem=(catgItem)=>{
    const updtItem=homesecdata.filter((curEle)=>{
      return curEle.category === catgItem;
  });
    setfiltr(updtItem);
  };

  const scdfltr=(sesinitem)=>{
    const sesonUpdat=homegallardata.filter((sesnElem)=>{
      return sesnElem.session === sesinitem;
    })
    setsecodfltr(sesonUpdat);
  }





  
  
  
  return (
    <>
   <section >
    <div className='flex flex-wrap w-full justify-center md:py-20 py-4 home1bg'>   
    <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{background:'transparent'}}
        
      >
        
           {
            filmdata.map((items)=>(
              <SwiperSlide className='bg-transparent'>
                  <div  key={items.id}  className=' flex flex-wrap w-full items-center md:w-10/12 mt-20'>
                     <div className='w-8/12  pb-5'>
                        <div className=' text-white gap-2 teko tracking-wide pb-8 font-black'>
                          <div className='pb-6 text-left'>
                             <span className='bg-[#1692bb]   rounded-b-md px-1'>SCI-FI</span>
                             <span className='bg-[#f5b50a] mx-2  rounded-b-md px-1'>ACTION</span>
                             <span className='bg-[#ec5a1a]  rounded-b-md px-1'>ADVENTURE</span>
                         </div>
                    <h1 className='md:text-6xl text-2xl text-left  uppercase Fredoka '><a href="#">guardians of the <br /> galaxy <span className='text-gray-400 text-4xl'>2015</span></a></h1>
                   </div>
                   <div className='flex flex-wrap items-center text-center text-pink-700  teko pb-6'>
                     <a className='flex items:center justify-center' href=""><p className='border border-pink-700 p-3 rounded-full'> <span><FaStepForward className='text-pink-700 '/> </span></p> <span className='mt-3 font-bold text-lg ml-2  tracking-wide'> WATCH TO TRAILER  </span></a>
                     <a className='flex items:center justify-center md:mx-7' href=""><p className='border border-pink-700 p-3 rounded-full'> <span><FaHeart className='text-pink-700 '/> </span></p> <span  className='mt-3 font-bold text-lg ml-2  tracking-wide' > ADD TO FAVORITE </span></a>
                     <a className='flex ahovr items:center justify-center' href=""><p className='border border-pink-700 p-3 rounded-full'> <span><FaShareAlt className='text-pink-700 '/> </span></p> <span  className='mt-3 font-bold text-lg ml-2  tracking-wide' > SHARE </span>
                     <span className='bg-pink-700 flex gap-2 px-4 py-3 home1div ml-4 text-white rounded-lg  '>
                         <a href=""><FaFacebookF /></a>
                         <a href=""><FaTwitter/></a>
                         <a href=""><FaGooglePlusG/> </a>
                          <a href=""><FaYoutube /></a>
                         </span></a>
                   </div>
                   <div className='flex flex-wrap items-center gap-2 pb-9 '>
                   <p className='flex text-white items-center justify-center'> <FaStar className='text-yellow-400 text-xl'/> <span className=' text-2xl font-bold mr '>7.4 </span> /10 </p>
                   <ul className='text-gray-400 flex flex-wrap gap-4'>
                      <li>Run Time: 2hr21</li>
                      <li>Rated: PG-13 </li>
                      <li>Release: 1 may 2015</li>
                    </ul>                    
                   </div>
                   <p className='bg-pink-700 w-3/12 rounded-full px-7 py-2 teko text-xl text-white tracking-wide' href="">MORE DETAIL</p>
               </div>


               <div className=' md:w-3/12 relative overflow-hidden '>
                <div className='w-full'>
                <img className='object-cover w-full h-full ' src="./photoes/poster1.jpg" alt="" />
                </div>
               </div>
           
          </div>
          </SwiperSlide>
        ))
       }
       
    </Swiper>
</div>
</section>  

  

{/* SECTION2 START  */}

<section className='bg-[#020d18]'>
   <div className='flex flex-col w-12/12 items-center  justify-center py-7  pb-12'>
      <div className='flex justify-between w-10/12 pb-5 '>
        <h1 className='text-white text-4xl font-bold teko'>IN THEATER</h1>
        <a href="" className='text-gray-400 text-xl teko flex gap-2 font-bold'>VIEW ALL <FaForward/></a>

      </div>
     
          <div className='text-gray-500 flex flex-wrap gap-5 teko text-xl w-10/12 tracking-wide font-bold pb-4 ' >
            <span className='hover:text-yellow-400 cursor-pointer' onClick={()=>fltritem('popular')}>#POPULAR</span>
            <span className='hover:text-yellow-400 cursor-pointer' onClick={()=>fltritem('coming')}>#COMING SOON</span>
            <span className='hover:text-yellow-400 cursor-pointer' onClick={()=>fltritem('rated')}>#TOP RATED</span>
            <span className='hover:text-yellow-400 cursor-pointer' onClick={()=>fltritem('mostReviewed')}>#MOST REVIEWED</span>
          </div>
           

           <div className='flex  md:flex-nowrap flex-wrap  w-10/12 gap-5  relative  overflow-y-hidden md:overflow-y-hidden  overflow-x-hidden md:overflow-x-hidden'>
           {
               filtr.map((item)=>(
                
                 <div key={item.id}  className='md:w-[170px] md:h-[230px] sm:w-2/6 sm:h-4/6 h-full w-full  flex  relative md:shrink-0 shrink-0 rounded-lg filtrdiv '>
                  <img src={item.imglink} alt="" className='object-cover h-full w-full relative z-[5] rounded-lg fitrImg shadow-inner shadow-black ' />
                  <p className=' teko tracking-wide px-2  absolute z-[10] bottom-10 left-10 text-white bg-gray-600 rounded-sm  text-xl fitrName '> {item.name}</p>
                  <p className=' teko font-bold px-2 absolute z-[10] bottom-2 left-10 text-white text-xl  fitrRate flex   '> <FaStar className='text-yellow-400 text-xl'/> {item.rated}</p>
                  <button className=''> <a href="" className='absolute top-[90px] left-[30px] z-[50] text-white bg-pink-700  px-4 py-2 text-sm font-bold rounded-full btnshow'>{item.btn}  </a></button>
                 </div>
               ))
               }
         </div>
 </div>


  <div className='w-full flex flex-col items-center justify-center pb-20 '>
      <div className='flex justify-between w-10/12 pb-5 '>
        <h1 className='text-white text-4xl font-bold teko'>ON TV</h1>
        <a href="" className='text-gray-400 text-xl teko flex gap-2 font-bold'>VIEW ALL <FaForward/></a>
        </div>
        <div className='text-gray-400 flex flex-wrap gap-5 teko text-xl w-10/12 tracking-wide font-bold pb-4 ' >
            <span className='hover:text-yellow-400 cursor-pointer'onClick={()=>scdfltr('popular')} >#POPULAR</span>
            <span className='hover:text-yellow-400 cursor-pointer' onClick={()=>scdfltr('coming')} >#COMING SOON</span>
            <span className='hover:text-yellow-400 cursor-pointer' onClick={()=>scdfltr('rated')}>#TOP RATED</span>
            <span className='hover:text-yellow-400 cursor-pointer' onClick={()=>scdfltr('mostReviewed')}>#MOST REVIEWED</span>
  
   
   
    
          </div>
          <div className='flex md:flex-nowrap flex-wrap  w-10/12 gap-5 h-[240px]  relative  overflow-y-hidden md:overflow-y-hidden overflow-x-hidden md:overflow-x-hidden '>
           {
               secodfltr.map((iteem)=>(
                 <div key={iteem.id} className='md:w-[170px] md:h-[230px] sm:w-2/6 sm:h-4/6 h-full w-full  flex  relative md:shrink-0 shrink-0 rounded-lg filtrdiv '>
                  <img src={iteem.imglink} alt="" className='object-cover h-full w-full relative z-[5] rounded-lg fitrImg' />
                  <p className=' teko tracking-wide px-2  absolute z-[10] bottom-10 left-10 bg-black-100 bg-gray-600 rounded-sm  text-white text-xl  fitrName '> {iteem.name}</p>
                  <p className=' teko font-bold px-2 absolute z-[10] bottom-2 left-10 text-white text-xl fitrRate flex '> <FaStar className='text-yellow-400 text-xl'/> {iteem.rated}</p>
                  <button className=''> <a href="" className='absolute top-[90px] left-[30px] z-[50] text-white bg-pink-700  px-4 py-2 text-sm font-bold rounded-full btnshow'>{iteem.bttn}</a></button>
                 </div>
                 ))
               }
         </div>

    

  </div>
</section>
{/* SECTION-2 END  */}


{/* SECTION-3 START  */}
<section className='bg-[#06121e]'>
  <div className='w-12/12 md:flex items-centere justify-center  py-20'>
       <div className='xl:w-[65%] md:w-[75%] w-full'>
            <div>
                <div className='flex justify-between w-[90%] px-3 mt-5 ' >
                  <h2 className='text-3xl teko font-bold text-white tracking-wider'>IN THEATER  </h2> 
                  <p className='font-bold text-xl teko text-white tracking-wider'> VIEW ALL</p> 
                </div>
                <div className='md:flex w-full items-center justify-center relative overflow-hidden  '>
                     
                     <iframe className='shrink-1 md:w-[65%] w-[95%] h-[430px]' src={`https://www.youtube.com/embed/${frameu}`} title="Mouse Events (onclick, ondblclick, onmouseover, onmouseout) in JavaScript in हिंदी /اردو - Class -26" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
                     {/* <iframe width="560" height="430" src="https://www.youtube.com/embed/1Q8fG0TtVAY" title="WONDER WOMAN - Official Trailer [HD]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

                     <div className='md:w-[30%] w-[95%]  bg-[#0b1a2a] py-9 md:inline block '>
                     <Slider {...settings}>
                       { IFdata.map((itmss)=>(
                          <div key={itmss.id} className=' w-full h-[70px] pl-4 flex items-center justify-centers hover:text-yellow-400 cursor-pointer group ' onClick={()=>urlfram(itmss.vlink)}>
                            <div className='flex items-center'>
                               <img  className=' w-[70px] h-[50px] items-start' src={itmss.imglink} alt="" />
                               <div className='pl-2 item-center leading-none'>
                                   <h2 className=' teko text-white group-hover:text-yellow-400'>{itmss.name} </h2>
                                   <p className='text-gray-400 teko' >{itmss.time}</p>
                               </div>
                            </div>
                            </div>
                          
                         
                         
                         ))}
                         </Slider>
                    
                     </div>
               </div>
            </div>
       </div>

       <div className='md:w-[20%] w-fullds xl:pl-10 shrink-1 '>
        <h2 className=' text-white text-3xl font-bold tracking-wide teko border-b border-gray-300 my-4 '>SPOTLIGHT CELEBRITIES</h2>
        <div className='h-[100px] pb-4'>
          <div className='flex items-center justify-start py-3'>
            <img className="w-[70px] h-[70px] pr-3 shrink-1 rounded" src="./photoes/ava1.jpg " alt="" />
            <div className='pl-3'>
              <p className='teko text-lg tracking-wider text-white font-bold hover:text-yellow-400'>Samuel N. Jack</p>
              <p className='teko text-gray-400'>ACTOR</p>
            </div>
          </div>
        </div>

        <div className='h-[100px] pb-4'>
          <div className='flex items-center justify-start py-3'>
            <img className="w-[60px] h-[60px] pr-3 shrink-1 rounded" src="./photoes/ava2.jpg " alt="" />
            <div className='pl-3'>
              <p className='teko text-lg tracking-wider text-white font-bold hover:text-yellow-400'>Benjamin Carroll</p>
              <p className='teko text-gray-400'>ACTOR</p>
            </div>
          </div>
        </div>

        <div className='h-[100px] pb-4'>
          <div className='flex items-center justify-start py-3'>
            <img className="w-[60px] h-[60px] pr-3 shrink-1 rounded" src="./photoes/ava3.jpg " alt="" />
            <div className='pl-3'>
              <p className='teko text-lg tracking-wider text-white font-bold hover:text-yellow-400'>Beverly Griffin</p>
              <p className='teko text-gray-400'>ACTOR</p>
            </div>
          </div>
        </div>

        <div className='h-[100px] pb-4'>
          <div className='flex items-center justify-start py-3'>
            <img className="w-[60px] h-[60px] pr-3 shrink-1 rounded" src="./photoes/ava4.jpg " alt="" />
            <div className='pl-3'>
              <p className='teko text-lg tracking-wider text-white font-bold hover:text-yellow-400'>Samuel N. Jack</p>
              <p className='teko text-gray-400'>ACTOR</p>
            </div>
          </div>
        </div>

       
       </div>






  </div>

</section>
 {/* SECTION-3 END  */}

 {/* SECTION-4 START  */}
                         
        <section className='bg-[#020d18] flex justify-center'>
           <div className='md:flex w-[85%] py-12 items-center justify-center'>

              <div className='md:w-[75%] w-[100%]  '>
                  <div className='w-full flex justify-center  pb-10 ' >
                    <img className='md:w-[55%] w-full h-20 ' src="./photoes/ads2.png" alt="" />
                  </div>
                  <div className='flex justify-between pb-6'>
                    <h1 className='text-white text-3xl teko  font-bold tracking-wider'>LATEST NEWS</h1>
                    <a className='text-gray-400 teko text-xl flex gap-2' href="">VIEW ALL <FaForward/></a>
                  </div>
                  <div className='flex flex-wrap'>
                    {
                      secfour.map((Ittms)=>(
                        <div className='xl:w-[25%] md:w-[50%] sm:w-[50%] w-full  pr-8 border md:border-none mb-3'>
                            <a className='flex flex-col items-center shrink-0 justify-center w-full pb-4 relative overflow-hidden last-a '>
                              <img className=' w-[90%] h-full rounded-lg shrink-1 lastImg raletive' src={Ittms.imglink} alt="" />                              
                            </a>
                            <div>
                              <h2 className='text-[#4280bf] teko text-2xl hover:text-yellow-600 pb-3'>{Ittms.h2}</h2>
                              <p className='text-xs text-gray-400 pb-4'>{Ittms.dated}</p>
                              <p className='text-xs text-gray-400 pb-4 tracking-wide'>{Ittms.prgrp}</p>
                            </div>
                        </div>
                    ))
                  }
                 </div>
              </div>


              <div className='xl:w-[25%] md:w-[50%] w-full ' >
                {/* <h2 className='border-b text-white teko text-2xl tracking-wide'>
                  FIND US ON FACEBOOK  
                </h2> */}
                <div>
                <div  className="text-white fb-page" data-href="https://www.facebook.com/facebook" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/facebook" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div>
                </div>
              </div>
           </div>
        </section>



 {/* SECTION-4 END  */}
 <Footer/>
</>
  )
}
