import React, { useState } from 'react'
import { FaHeart,FaStepForward,FaShareAlt,FaTwitter,FaGooglePlusG,FaYoutube,FaFacebookF,FaStar,FaForward } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
 import "swiper/css";
 import "swiper/css/pagination";
 import "swiper/css/navigation";
 import "./Home2slider.css";
// // import required modules
 import { Pagination, Navigation } from "swiper";
import {  H2Actor, iframdata, OntvData, theatr } from './Home2Data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from '../Footer';



export default function Home2() {

// slick slider start
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
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
  
// slick slider end






  const [Ontv, setOntv]=useState(OntvData)
  const[Tdata,setTdata]=useState(theatr)

  const ThtrFlr=(pasTitm)=>{
    const updatpasTitm=theatr.filter((curTitm)=>{
      return  curTitm.category === pasTitm;
    })
    setTdata(updatpasTitm)
  }

  const TVFlr=(pasOnitm)=>{
   const tvitemUpdat=OntvData.filter((curOntvitm)=>{
    return curOntvitm.category === pasOnitm;
   })
   setOntv(tvitemUpdat)
  };
    const[Fvidio,setFvidio]=useState('1Q8fG0TtVAY')
  const frmeVdeo=(pasVdeo)=>{
    setFvidio(pasVdeo);
  };
  return (
    <>
    {/* FIRST SECTION START  */}
    <section className='home2sec' >
        <div className=' w-full h-[100vh] flex items-center justify-center mt-12'>
        <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{background:'transparent'}}
        
      >
            

            <SwiperSlide className='bg-transparent'>
        <div className='w-10/12   mt-12 ' >
             <div className='text-white pb-4 text-left'>
                <span className='bg-[#f5b50a] mx-2  rounded-b-md px-1'>ACTION</span>
                <span className='bg-[#ec5a1a]  rounded-b-md px-1'>ADVENTURE</span>

             </div>
             <div className='text-white pb-5 text-left'>
                <a className='md:text-6xl text-2xl text-left  md:font-extrabold   uppercase Fredoka ' href=""> Guns of the Navarone </a><span className='text-gray-400 Fredoka1 md:text-4xl text-xl '>2013</span>
             </div>
             <div className='flex flex-wrap items-center items-center text-center text-pink-700  teko pb-4 mb-5 border-b border-gray-600'>
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

            

        </div>
        </SwiperSlide>

        <SwiperSlide className='bg-transparent'>
        <div className='w-10/12    ' >
             <div className='text-white pb-4 text-left'>
                <span className='bg-[#f5b50a] mx-2  rounded-b-md px-1'>ACTION</span>
                <span className='bg-[#ec5a1a]  rounded-b-md px-1'>ADVENTURE</span>

             </div>
             <div className='text-white pb-5 text-left'>
                <a className='md:text-6xl text-2xl text-left font-bolder  uppercase Fredoka ' href=""> Guns of the Navarone </a><span className='text-gray-400 Fredoka1 text-4xl '>2013</span>
             </div>
             <div className='flex flex-wrap items-center items-center text-center text-pink-700  teko pb-4 mb-5 border-b border-gray-600'>
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

            

        </div>
        </SwiperSlide>
        </Swiper>
        </div>
    </section>
     {/* FIRST SECTION END  */}

    
           {/* SECOND SECTION START  */}
    <section className='bg-[#020d18] '>
        <div className='flex items-center justify-center py-12'>
            <div className='w-[85%] md:flex '>
                <div className='md:w-[69%] w-full  mr-3'>
                
                    <div className='flex justify-between '>
                        <h2 className='font-bold text-3xl text-white teko tracking-wide '>IN THEATER</h2>
                        <a href="" className='teko font-bold px-3 text-xl flex text-[#abb7c4] items-center gap-2'>VIEW ALL <FaStepForward className='text-lg text-[#abb7c4]' /></a>
                    </div>
                    <div className='flex flex-wrap  text-gray-400 gap-5 teko text-2xl my-4' >
                        <span className='hover:text-yellow-500 cursor-pointer' onClick={()=>ThtrFlr('popular')}>#POPULAR</span>
                        <span className='hover:text-yellow-500 cursor-pointer' onClick={()=>ThtrFlr('coming')}>#COMING SOON </span>
                        <span className='hover:text-yellow-500 cursor-pointer' onClick={()=>ThtrFlr('top-rated')}>#TOP RATED</span>
                        <span className='hover:text-yellow-500 cursor-pointer' onClick={()=>ThtrFlr('m-reviewed')}>#MOST REVIEWED</span>

                    </div>
                    
                    <div className='w-full h-[200] gap-5 flex md:flex-nowrap sm:flex-nowrap flex-wrap relative md:overflow-hidden sm:overflow-hidden  mb-5'>

                        {
                            Tdata.map((Titem)=>(
                               <div className='shrink-0 w-[150px] h-[200px] relative overflow-hidden galrydiv Tdiv'>
                                 <img className='object-cover w-full h-full z-[-1] Timg' src={Titem.imglink} alt="" />
                                 <p className='absolute left-[40px] bottom-[30px] text-white tracking-wider px-2 z-[80]  teko font-bold text-xl Ttil '> {Titem.title}</p>
                                 <p className='absolute left-[50px] bottom-[7px] text-white tracking-wider px-2 z-[80] teko font-bold text-xl Trat'>{Titem.rated} </p>
                                 <button><a href="" className=' absolute text-white left-[30px] top-[80px] rounded-full z-50 teko f text-2xl bg-pink-800 px-3 py-1 TBtn'>{Titem.btn}</a></button>


                               </div> 
                            ))
                        }

                    </div>

                     <div>
                     <div className='flex justify-between '>
                        <h2 className='font-bold text-3xl text-white teko tracking-wide '>ON TV</h2>
                        <a href="" className='teko font-bold px-3 text-xl flex text-[#abb7c4] items-center gap-2'>VIEW ALL <FaStepForward className='text-lg text-[#abb7c4]' /></a>
                    </div>
                    <div className='flex flex-wrap  text-gray-400 gap-5 teko text-2xl my-4' >
                        <span className='hover:text-yellow-500 cursor-pointer' onClick={()=>TVFlr('popular')}>#POPULAR</span>
                        <span className='hover:text-yellow-500 cursor-pointer' onClick={()=>TVFlr('coming')}>#COMING SOON </span>
                        <span className='hover:text-yellow-500 cursor-pointer' onClick={()=>TVFlr('top-rated')}>#TOP RATED</span>
                        <span className='hover:text-yellow-500 cursor-pointer' onClick={()=>TVFlr('m-reviewed')}>#MOST REVIEWED</span>

                    </div>
                    
                    <div className='w-full h-[200] gap-5 flex md:flex-nowrap sm:flex-nowrap flex-wrap relative md:overflow-hidden sm:overflow-hidden  mb-5'>

                        {
                            Ontv.map((Titem)=>(
                               <div className='shrink-0 w-[150px] h-[200px] relative overflow-hidden galrydiv Tdiv'>
                                 <img className='object-cover w-full h-full z-[-1] Timg' src={Titem.imglink} alt="" />
                                 <p className='absolute left-[40px] bottom-[30px] text-white tracking-wider px-2 z-[80]  teko font-bold text-xl Ttil '> {Titem.title}</p>
                                 <p className='absolute left-[50px] bottom-[7px] text-white tracking-wider px-2 z-[80] teko font-bold text-xl Trat'>{Titem.rated} </p>
                                 <button><a href="" className=' absolute text-white left-[30px] top-[80px] rounded-full z-50 teko f text-2xl bg-pink-800 px-3 py-1 TBtn'>{Titem.btn}</a></button>
                               </div> 
                            ))
                        }
                      </div>
                   </div>
               </div>

                <div className='md:w-[30%] pl-5'>
                    <div className='w-full h-[200px] relative overflow-hidden mb-6 '>
                        <img className='w-full h-[200px]' src="./photoes/sr-single.jpg" alt="" />
                    </div>
                    
                    <div className='pb-4'>
                          <h2 className='text-2xl tracking-wider teko text-white font-bold border-b border-gray-500 pb-2'> SPOTLIGHT CELEBRITIES</h2>
                    </div>
                    <div >
                      {H2Actor.map((actrItem)=>(
                            <div key={actrItem.id} className='flex mb-5 '>
                                  <img  className='w-[60px] h-[60px] rounded-lg' src={actrItem.imglink} alt="" />
                               <div className='ml-5 flex flex-col justify-center'>
                                  <h3 className='teko text-white tracking-wider text-lg '>{actrItem.name}</h3>
                                  <p className='teko text-gray-500 text-xl '>{actrItem.title}</p>
                              </div>
                          </div>
                      
                   ))}
                   </div>

                   <div>
                    <a className='teko text-gray-500 text-2xl  flex items-center gap-2' href=""> SEE ALL CELEBRATIES <FaStepForward className='text-lg text-[#abb7c4]' /> </a>
                   </div>
                </div>
            </div>

        </div>
</section>

{/* SECOND SECTION END  */}
  

  {/* THIRD SECTION START  */}
<section className='flex justify-center bg-[#06121e] py-8'>
     <div className='md:flex  justify-center w-[85%] my-7 '>
          <div className='md:w-[68%] w-full mr-2 '>
                <div className='flex justify-between items-center  mb-6'>
                    <h2 className='text-3xl text-white teko font-bold tracking-wider' >IN THEATER </h2>
                    <a href=""  className='text-[#abb7c4] font-bold teko text-xl flex gap-2 items-center '> VIEW ALL <FaStepForward className='text-lg text-[#abb7c4]' /> </a>
                </div>
                <div  className='w-full relative overflow-hidden'>
                <iframe className=' w-full shrink-1' width="840" height="480"src={`https://www.youtube.com/embed/${Fvidio}`} title="4K HDR | Trailer #3 - Avatar: The Way of Water | New Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div className='gap-5 w-[100%] relative mx-auto bg-[#0b1a2a] px-10  '>
                <Slider {...settings}>
                  {iframdata.map((frItem)=>(   
                  <div key={frItem.id} className='w-[110px] h-[150px] p-2 active:bg-[#1c3d5d] hover:bg-[#1c3d5d] visited:bg-[#1c3d5d]' onClick={()=>frmeVdeo(frItem.vlink)}>
                    <img className=' w-full h-[60px] mb-4' src={frItem.imglink} alt="" />
                   <h2 className='truncate teko teko text-white'>{frItem.name}</h2>
                   <p className='teko text-gray-500'>{frItem.time}</p>
                  </div>
                 
                   ))}
                    </Slider>
               </div>
          </div>

          <div className='md:w-[32%] w-full pl-12  '>

          <div className='pb-4'>
                          <h2 className='text-2xl tracking-wider teko text-white font-bold border-b border-gray-500 pb-2'> SPOTLIGHT CELEBRITIES</h2>
                    </div>
                    <div >
                      {H2Actor.map((actrItem)=>(
                            <div key={actrItem.id} className='flex mb-8 '>
                                  <img  className='w-[70px] h-[70px] rounded-lg' src={actrItem.imglink} alt="" />
                               <div className='ml-5 flex flex-col justify-center'>
                                  <h3 className='teko text-white tracking-wider font-bold text-lg '>{actrItem.name}</h3>
                                  <p className='teko text-gray-400 text-xl '>{actrItem.title}</p>
                              </div>
                          </div>
                      
                   ))}
                   </div>
           
          </div>

     </div>
</section>
{/* THIRD SECTION END  */}


{/* FOUR SECTION START  */}
<section className='flex justify-center bg-[#020d18] py-16'>
     <div className='md:w-[85%] w-full md:flex justify-center '>
       <div className='md:w-[68%] w-full'>
          <div className='w-full mb-8'>
               <img className='object-cover w-full shrink-1' src="./photoes/ads2.png" alt="" />
          </div>
          <div className='mb-5'>
            <h2 className='text-white text-3xl teko tracking-wider font-bold'> LATEST NEWS</h2>
          </div>
          <div className='sm:flex pr-9 pb-12 md:px-0 px-5'>
            <img className='md:w-[25%] w-full rounded-xl mr-6' src="./photoes/blog-it1.jpg" alt="" />
            <div > 
                <h3 className='Fredoka1 font-bold text-lg text-[#4280bf] hover:text-yellow-400 mb-5'>Brie Larson to play first female white house candidate Victoria Woodull in Amazon film</h3>
                <p className='text-[#abb7c4]  text-sm mb-5'>13 hours ago</p>
                <p  className='text-[#abb7c4]  text-sm' >
                Exclusive: Amazon Studios has acquired Victoria Woodhull, with Oscar winning Room star Brie Larson polsed to produce, and play the first female candidate for the presidency of the United States. Amazon bought it in a pitch package deal. Ben Kopit, who wrote the Warner Bros film Libertine that has...
                </p>
            </div> 
          </div>
          <div className='flex justify-between pr-5'>
             <h2 className='Fredoka1 tracking-wide text-xl text-white font-bold ' >More news on Blockbuster</h2>
             <a className='text-gray-400 text-xl teko tracking-wide ' href="">VIEW ALL</a>
          </div>
          <div className='flex md:px-0 px-7'>
            <div className="left w-[50%] ">
                  <div className='mb-9 pr-3'>
                      <a className='Fredoka1 font-bold text-sm text-[#4280bf] hover:text-yellow-400 mb-' href=""> Michael Shannon Frontrunner to play Cable in “Deadpool 2”</a>
                      <p className='text-[#abb7c4]  text-xs mt-3'>13 hours ago</p>
                  </div>
                  <div className='mb-9 pr-3'>
                      <a className='Fredoka1 font-bold text-sm text-[#4280bf] hover:text-yellow-400' href=""> French cannibal horror “Raw” inspires L.A. theater to hand out “Barf Bags”</a>
                      <p className='text-[#abb7c4]  text-xs mt-3'>13 hours ago</p>
                  </div>
            </div>

            <div className="left w-[50%] ">
                  <div className='mb-9 pr-3'>
                      <a className='Fredoka1 font-bold text-sm text-[#4280bf] hover:text-yellow-400 mb-' href=""> Laura Dern in talks to join Justin Kelly’s biopic “JT Leroy”</a>
                      <p className='text-[#abb7c4]  text-xs mt-3'>13 hours ago</p>
                  </div>
                  <div className='mb-9 pr-3'>
                      <a className='Fredoka1 font-bold text-sm text-[#4280bf] hover:text-yellow-400' href="">China punishes more than 300 cinemas for box office cheating</a>
                      <p className='text-[#abb7c4]  text-xs mt-3'>13 hours ago</p>
                  </div>
            </div>
       </div>
           
        </div>
        <div className='md:w-[32%] w-full pl-16'>
          <div className='w-full h-[50%]'>
            <h2 className='Fredoka1 tracking-wide border-b border-gray-400 text-xl text-white font-bold py-4 '>FIND US ON FACEBOOK </h2>

          </div>
          <div className='w-full h-[50%]'>
            <h2 className='Fredoka1 tracking-wide border-b border-gray-400 text-xl text-white font-bold py-4 '>TWEET TO US </h2>

          </div>


        </div>

     </div>

</section>
{/* FOUR SECTION END  */}
<Footer/>
      
    </>
  )
}
