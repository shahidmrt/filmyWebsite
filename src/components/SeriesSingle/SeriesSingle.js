import React from 'react'
import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaYoutube, FaHeart, FaShareAlt, FaStar,FaPlay } from 'react-icons/fa';
import {IoIosArrowForward } from 'react-icons/io';
import{IoStarOutline,IoStarSharp,IoCardSharp} from 'react-icons/io5'
import { Castpicture,opt, ReviewList, opt1, writers,producer,Mvideos,Mphotoes ,opt3 }  from '../MovieSingle/MovieSingleData';
import {moviData,optn} from '../MovieList/MovieListData';
import  Footer from '../Footer';
import parse from 'html-react-parser';


export default function MovieSingle() {
    var parse = require('html-react-parser');

    const [toggleState, setToggleState]=useState(1);
     
    const toggleTab= (index) => {
        setToggleState(index);
        
    }
    return (
    <>

        <div className='bg-[#020d18]'>
            <section className='SSinglebgTop relative w-full h-[598px] M-single-sec1'>
                <div className='container S-single-div w-full '>
                    <div className='row'>
                        <div className='wfull w-12/12'>

                        </div>
                    </div>
                </div>
            </section>

            <section className='relative top-[-415px] bg-transparent pt-[75px]  '>
                <div className='md:flex md:mx-[100px] mx-2 '>
                    <div className='md:w-[32%] w-full items-center justify-center'>
                        <div className='w-full h-[500px] px-6 md:sticky top-0'>
                            <img className='object-cover w-full h-[300px] lg:h-full shrink-0 ' src="./photoes/series-img.jpg" alt="" />
                            <div className='w-full p-[18px] border-4 border-[#0c1c2c]'>
                                
                                <button className='w-full Fredoka1 md:text-base text-xs md:font-bold py-2 md:py-3 bg-[#dd003f] rounded-md mb-2 '><a className='flex items-center  justify-center text-white gap-2 rounded-lg' href=""> <FaPlay/>WATCH TRAILER</a></button>
                                <button className='w-full Fredoka1 md:text-base text-xs md:font-bold py-2 md:py-3 rounded-lg bg-[#dcf836]'><a className='flex items-center  justify-center  gap-2 rounded-lg' href=""> <IoCardSharp/>BUY TICKET</a></button>
                            </div>
                        </div>
                    </div>

                    <div className='md:w-[68%] w-full px-6 pl-[12px]'>
                        <div className='pl-[10px] flex items-end gap-3 mb-8'> <h1 className=' Fredoka text-white font-black text-4xl '>The Big Bang Theory </h1> <span className='Fredoka1 text-2xl text-gray-400 tracking-wider'>2007 - CURRENT</span> </div>
                        <div className='flex flex-wrap items-center text-center text-pink-700  teko pb-6'>
                            <a className='flex items-center justify-center md:mx-7' href=""><p className='border border-pink-700 p-3 rounded-full'> <span><FaHeart className='text-pink-700 ' /> </span></p> <span className='mt-3 font-bold text-lg ml-2  tracking-wide' > ADD TO FAVORITE </span></a>
                            <a className='flex ahovr items-center justify-center' href=""><p className='border border-pink-700 p-3 rounded-full'> <span><FaShareAlt className='text-pink-700 ' /> </span></p> <span className='mt-3 font-bold text-lg ml-2  tracking-wide' > SHARE </span>
                                <span className='bg-pink-700 flex gap-2 px-4 py-3 home1div ml-4 text-white rounded-lg  '>
                                    <a href=""><FaFacebookF /></a>
                                    <a href=""><FaTwitter /></a>
                                    <a href=""><FaGooglePlusG /> </a>
                                    <a href=""><FaYoutube /></a>
                                </span></a>
                        </div>
                        <div className='border-y border-gray-400 flex mb-[110px]'>
                            <div className='flex items-center gap-2 '>
                                <p><span className='text-yellow-500 md:text-2xl  ' ><IoStarSharp/></span></p>
                                <p>
                                    <h1 className='text-white text-lg'>8.1 <span className='text-gray-400 text-sm'>/10</span></h1>
                                    <p className='text-sm text-sky-700'>56 Reviews</p>
                                </p>
                            </div>
                            <div className='flex items gap-4 items-center  '  >
                                <p className='text-gray-400 md:text-lg  md:ml-[40px] ml-2 md:pl-[40px] pl-2 border-l border-gray-400'>Rate This Movie:</p>
                                <p className='text-yellow-500 md:text-3xl  flex flex-wrap  '><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarOutline/></p>

                            </div>
                        </div>

                        <div className='container'>
                            <div className='bloc_tabs pl-6 flex flex-wrap  md:gap-10 gap-6 text-gray-400 Fredoka1 md:text-xl  font-bold mb-2 box-border'>
                                <div onClick={()=>toggleTab(1)} className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}>OVERVIEW </div>
                                <div onClick={()=>toggleTab(2)}  className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}>REVIEWS</div>
                                <div onClick={()=>toggleTab(3)}  className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}>CAST & CREW </div>
                                <div onClick={()=>toggleTab(4)}  className={toggleState === 4 ? 'tabs active-tabs' : 'tabs'}>MEDIA </div>
                                <div onClick={()=>toggleTab(5)}  className={toggleState === 5 ? 'tabs active-tabs' : 'tabs'}>SEASON</div>
                                <div onClick={()=>toggleTab(6)}  className={toggleState === 6 ? 'tabs active-tabs' : 'tabs'}>RELATED SHOWS</div>
                            </div>
                            <div className='content-tabs box-border pt-8'>
                                <div className={toggleState === 1 ? 'content active-content' : 'content'} >
                                 <div className=" Overview md:flex">
                                    <div className='md:w-[70%] w-full  mr-3'>
                                        <p className='text-gray-400  text-sm text-justify'>
                                            Tony Stark creates the Ultron Program to protect the world, but when the
                                             peacekeeping program becomes hostile, The Avengers go into action to try and defeat a
                                              virtually impossible enemy together. Earth's mightiest heroes must come together once again to protect the world from global extinction.
                                        </p>
                                        <div className='flex justify-between my-8 border-b border-gray-400 py-2 pr-4 '>
                                            <p className='text-white Fredoka1 font-bold text-sm '>CURRENT SEASONS</p>
                                            <a className='flex items-center text-sky-700 text-sm hover:text-yellow-400' href=""> View All Seasons<IoIosArrowForward/> </a>
                                        </div>
                                        <div className='sm:flex gap-3'>
                                            <img className='w-[100px] h-[150px] rounded-lg' src="./photoes/season.jpg" alt="" />
                                            <div className='text-gray-400 text-sm '>
                                                <h2 className='text-white Fredoka1 text-xl '>SEASON 10</h2>
                                                <p>21 Episodes</p>
                                                <p>Season 10 of The</p>
                                                <p>Big Bang Theory</p>
                                                <p>premiered on</p>
                                                <p>September 19,</p>
                                                <p>2016</p>
                                            </div>
                                        </div>
                                        <div className='flex justify-between my-8 border-b border-gray-400 py-2 pr-4 '>
                                            <p className='text-white Fredoka1 font-bold text-sm '>VIDEOS & PHOTOES</p>
                                            <a className='flex items-center text-sky-700 text-sm hover:text-yellow-400' href=""> All 5 Videos & 245 Photos<IoIosArrowForward/> </a>
                                        </div>
                                        <div className='flex flex-wrap gap-8 mb-10'>
                                            <img className='rounded-lg' src="./photoes/image4.jpg" alt="" />
                                            <img className='rounded-lg' src="./photoes/image5.jpg" alt="" />
                                            <img className='rounded-lg' src="./photoes/image6.jpg" alt="" />
                                            <div className='relative '>
                                                 <img className='rounded-lg' src="./photoes/image7.jpg" alt="" />
                                                 <a className='absolute flex items-center justify-center m-auto top-[30px] left-[30px] hover:opacity-70' href="https://www.youtube.com/embed/o-0hcF97wy0"> <img src="./photoes/play-vd.png" alt="" /></a>
                                            </div>
                                        </div>
                                        <div className='flex justify-between my-8 border-b border-gray-400 py-2 pr-4 '>
                                            <p className='text-white Fredoka1 font-bold text-sm '>CAST</p>
                                            <a className='flex items-center text-sky-700 text-sm hover:text-yellow-400' href=""> Full Cast & Crew F<IoIosArrowForward/> </a>
                                        </div>
                                          <div className=' w-full'>                                          
                                            {
                                           Castpicture.map((Catitem)=>(
                                             <div className='flex my-6 mr-2'>
                                             <p className='flex items-center  md:w-[250px] w-[95%] mr-16'>
                                                 <img  className='mr-4 rounded-lg' src={Catitem.imglink} alt="" />
                                                 <p className=' mr- text-sky-800 hover:text-yellow-400 '>{Catitem.name}</p>
                                            </p>
                                             <p className='text-gray-400 text-sm'>{Catitem.para}</p>
                                         </div>
                                           ))}                                           
                                        </div>
                                        <div className='flex justify-between my-8 border-b border-gray-400 py-2 pr-4 '>
                                            <p className='text-white Fredoka1 font-bold text-sm '>USER REVIEWS</p>
                                            <a className='flex items-center text-sky-700 text-sm hover:text-yellow-400' href="">See All 56 Reviews <IoIosArrowForward/> </a>
                                        </div>
                                        <div>
                                            <h2 className='Fredoka1 text-gray-400 font-bold text-lg mb-4'>Best Marvel movie in my opinion</h2>
                                            <p className='text-yellow-500   flex gap-1 mb-2 '><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/><IoStarSharp/> <IoStarOutline/></p>
                                            <p className='text-gray-400 text-xs mb-4 '>17 December 2016 by <a className='text-sky-800 hover:text-yellow-400' href=""> hawaiipierson</a></p>
                                            <p  className='text-gray-400 text-sm '>
                                            This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.
                                            </p>

                                        </div>
                                    </div>
                                    <div className='md:w-[30%] w-full  pl-6 md:mt-0 mt-12 '>
                                        <div className='mb-6'>
                                            <h2 className='Fredoka1 text-gray-400 font-bold '>Director:</h2>
                                            <a className='text-sky-700 hover:text-yellow-400 text-sm cursor-pointer'>Joss Whedon</a>
                                        </div>

                                        <div className='mb-6'>
                                            <h2 className='Fredoka1 text-gray-400 font-bold '>Writer:</h2>
                                            <a className='text-sky-700  text-sm cursor-pointer'> <span className='hover:text-yellow-400'>Joss Whedon, </span> , <span  className='hover:text-yellow-400'>Stan Lee</span></a>
                                        </div>

                                        <div className='mb-6'>
                                            <h2 className='Fredoka1 text-gray-400 font-bold '>Writer:</h2>
                                            <a className='text-sky-700  text-sm'>
                                                 <span className='hover:text-yellow-400 cursor-pointer'>Robert Downey Jr,</span> ,
                                                  <span  className='hover:text-yellow-400 cursor-pointer'>Chris Evans,</span>
                                                  <span  className='hover:text-yellow-400 cursor-pointer'>Mark Ruffalo,</span>
                                                  <span  className='hover:text-yellow-400 cursor-pointer'>Scarlett Johansson</span>
                                                  <span  className='hover:text-yellow-400 cursor-pointer'>Chris Evans,</span>
                                                  </a>
                                        </div>
                                        <div className='mb-6'>
                                            <h2 className='Fredoka1 text-gray-400 font-bold '>Genres: </h2>
                                            <a className='text-sky-700 text-sm'>
                                                 <span className='hover:text-yellow-400 cursor-pointer'>Action,</span> ,
                                                  <span  className='hover:text-yellow-400 cursor-pointer'> Sci-Fi,</span>
                                                  <span  className='hover:text-yellow-400 cursor-pointer'>Adventure:</span>
                                            </a>
                                        </div>
                                        <div className='mb-6'>
                                            <h2 className='Fredoka1 text-gray-400 font-bold '>Release Date:</h2>
                                            <a className='text-gray-400  text-sm'>May 1, 2015 (U.S.A)</a>
                                        </div>
                                        <div className='mb-6'>
                                            <h2 className='Fredoka1 text-gray-400 font-bold '>Run Time:</h2>
                                            <a className='text-gray-400  text-sm'>141 min</a>
                                        </div>
                                        <div className='mb-6'>
                                            <h2 className='Fredoka1 text-gray-400 font-bold '>MMPA Rating:</h2>
                                            <a className='text-gray-400  text-sm'>PG-13</a>
                                        </div>
                                        <div className='mb-6'>
                                            <h2 className='Fredoka1 text-gray-400 font-bold mb-2 '>Plot Keywords:</h2>
                                            <a className='text-gray-400  text-xs flex flex-wrap gap-1 '>
                                                <span className='bg-[#233a50] text-[abb7c4] px-1 hover:text-yellow-400 '>super hero </span>
                                                <span className='bg-[#233a50] text-[abb7c4] px-1 hover:text-yellow-400 '>marvel univerce</span>
                                                <span className='bg-[#233a50] text-[abb7c4] px-1 hover:text-yellow-400 '>comic</span>
                                                <span className='bg-[#233a50] text-[abb7c4] px-1 hover:text-yellow-400 '>block buster</span>
                                                <span className='bg-[#233a50] text-[abb7c4] px-1 hover:text-yellow-400 '>final </span>
                                            </a>
                                        </div>
                                        <div className='w-full items-center justify-center'>
                                            <img className='w-full ' src="./photoes/sr-single.jpg" alt="" />
                                        </div>

                                    </div>
                                  </div>
                                </div>

                                <div className={toggleState === 2 ? 'content active-content' : 'content'}>
                                    {/* <p className='text-white text-4xl px-20'>REVIEWS CONTENT</p> */}
                                    <div className='px-6'>
                                    <h2 className='Fredoka1 text-gray-400 text-xl font-bold '>Related Movies To</h2>
                                    <div className='flex justify-between items-center mb-4'>
                                        <p className='text-sky-600 font-bold Fredoka1 text-xl'>Skyfall: Quantum of Spectre</p>
                                        <button className='md:px-6 px-2 py-1 md:py-3 bg-[#dd003f] rounded-full font-bold text-white hover:text-black'> Write Preview</button>
                                    </div>
                                    <div className='flex border-y border-gray-400 text-sm mb-10 '>
                                        <div className='flex justify-between pr-8 w-[70%]'>
                                            <p className='text-gray-400 text- py-2 '>Found 56 reviews in total </p>
                                            <p  className='text-gray-400 text- py-2 '>Filter by:</p>
                                        </div>
                                       <select className='bg-transparent text-white md:border-l border-gray-500  outline-none hover:ountline-none active:outline-none visited:outline-none text-sm px-5' name="" id="">
                                          {opt.map((item)=>(
                                       <option className='font-semibold bg-[#020d18]  '  key={item.id} value="">{item.value}</option>
                                         ))} 
                                       </select>
                                   </div>

                                   <div>

                                  {ReviewList.map((Ritem)=>(
                                      <div>
                                        <div className='flex mb-3'>
                                            <img className='w-[40px] h-[40px] mr-6' src={Ritem.imglink} alt="" />
                                            <div>
                                                <h2 className='text-gray-400 text-lg font-semibold Fredoka1 mb-4' >{Ritem.Uname}</h2>

                                                <p className='text-yellow-400 flex gap-1 mb-2'>{parse(Ritem.rating)}</p>
                                                <p className='text-gray-300 text-xs' > {Ritem.R_date} <span className='text-sky-800 hover:text-yellow-400 cursor-pointer '>{Ritem.M_name}</span></p>
                                            </div>
                                        </div>
                                        <p className='text-gray-500 text-sm border-b border-gray-400 mb-8 pb-6 pr-6'> {parse(Ritem.detail)} </p> 
                                    </div>
                                 ))}
                                   </div>

                                   <div className='md:flex border-y border-gray-400 items-center justify-center w-full shrink-1 '>
                                        <p className='text-gray-400 text-sm md:mr-[100px] mr-0 py-2'>Reviews per page:</p>
                                         <select className='text-gray-300 text-xs  bg-transparent pr-24 md:border-x border-gray-400 py-2 text-sm font-bold   outline-none'  name="" id="">
                                                {opt1.map((itemm)=>(
                                                    <option className='bg-[#233a50]' key={itemm.id} value="">{itemm.value}</option>
                                                ))}
                                            </select>
                                            <div className='text-sm text-gray-400 flex gap-2 py-2 md:ml-28'>
                                                <p >Page 1 of 6:</p>
                                                <span className='hover:text-yellow-300'>1</span>
                                                <span className='hover:text-yellow-300'>2</span>
                                                <span className='hover:text-yellow-300'>3</span>
                                                <span className='hover:text-yellow-300'>4</span>
                                                <span className='hover:text-yellow-300'>5</span>
                                                <span className='hover:text-yellow-300'>6</span>
                                            </div>
                                    </div>
                                 </div>
                                </div>

                                <div className={toggleState === 3 ? 'content active-content' : 'content'}>
                                {/* <p className='text-white text-4xl px-20'>CAST&CREW  CONTENT</p> */}
                                  <div>
                                     <p className='Fredoka1 text-gray-400 font-bold text-xl mb-4 '>Cast & Crew of</p>
                                     <h2 className='Fredoka1 text-sky-500 font-bold text-2xl mb-6'>Avengers: Age of Ultron</h2>
                                     <h1 className='Fredoka1 text-white text-sm font-bold border-b border-gray-700 pb-2 mb-4'>DIRECTORS & CREDIT WRITERS</h1>
                                     <div className='flex items-center mb-6'>
                                        <div className='flex items-center gap-3 w-[450px]'>
                                            <h2 className='bg-[#233a50] text-gray-400 rounded-md py-2 px-3'>JS</h2>
                                            <p className='text-sky-700 hover:text-yellow-400'>Joss Whedon</p>
                                        </div>
                                        <p className='text-gray-400 Fredoka1 '>....Director </p>
                                     </div>
                                     <h1 className='Fredoka1 text-white text-sm font-bold border-b border-gray-700 pb-2 mb-4' >DIRECTORS & CREDIT WRITERS</h1>
                                       {writers.map((wItem)=>{
                                         return <div className='flex items-center mb-6'>
                                          <div className='flex items-center gap-3 w-[450px] shrink-1'>
                                             <h2 className='bg-[#233a50] text-gray-400 rounded-md w-[40px] h-[40px] flex items-center justify-center font-bold text-sm Fredoka1'>{wItem.Ltr}</h2>
                                             <p className='text-sky-700 hover:text-yellow-400'>{wItem.name}</p>
                                          </div>
                                          <p className='text-gray-400 Fredoka1 '>{wItem.ocupation}</p>
                                      </div>
                                       })}
                                     <h1 className='Fredoka1 text-white text-sm font-bold border-b border-gray-700 pb-2 mb-4' >COST</h1>
                                     {
                                           Castpicture.map((Catitem)=>(
                                             <div className='flex my-6 mr-2'>
                                             <p className='flex items-center  w-[450px]'>
                                                 <img  className='mr-4 rounded-lg' src={Catitem.imglink} alt="" />
                                                 <p className=' mr- text-sky-800 hover:text-yellow-400 '>{Catitem.name}</p>
                                            </p>
                                             <p className='text-gray-400 text-sm'>{Catitem.para}</p>
                                         </div>
                                           ))}
                                    <h1 className='Fredoka1 text-white text-sm font-semibold border-b border-gray-700 pb-2 mb-4 ' >PRODUCED BY</h1>
                                    {producer.map((pItem)=>{
                                         return <div className='flex items-center mb-6'>
                                          <div className='flex items-center gap-3 w-[450px]'>
                                             <h2 className='bg-[#233a50] text-gray-400 rounded-md w-[40px] h-[40px] flex items-center justify-center font-bold text-sm Fredoka1'>{pItem.Ltr}</h2>
                                             <p className='text-sky-700 hover:text-yellow-400'>{pItem.name}</p>
                                          </div>
                                          <p className='text-gray-400 Fredoka1 '>{pItem.ocupation}</p>
                                      </div>
                                       })}






                                  </div>                                 
                                </div>

                                <div className={toggleState === 4 ? 'content active-content' : 'content'}>
                                    {/* <p className='text-white text-4xl px-20'>MEDIA  CONTENT</p> */}
                                    <div>
                                         <p className='Fredoka1 text-gray-400 font-bold text-xl mb-4 '>videos & photoes of</p>
                                     <h2 className='Fredoka1 text-sky-500 font-bold text-2xl mb-10'>Skyfall: Quantum of Spectre</h2>
                                      <p className='flex Fredoka1 text-white text-sm font-bold border-b border-gray-700 pb-2 mb-6 items-center '><h1 className=''>Videos <span className='text-gray-400 tracking-wider' >(8)</span> </h1></p>
                                      <div className='flex gap-8 flex-wrap mb-8'>
                                        {Mvideos.map((Vitem)=>(
                                            <div className='w-[160px] relative overflow-hidden mb-8 '>
                                                <div className='videoImg w-full h-[100px] relative mb-2 '>
                                                    <img className='rounded-md' src={Vitem.imglink} alt="" />
                                                    <a className=' playStikr' href={Vitem.videoLink}> <img src={Vitem.btnimg} alt="" /></a>
                                                </div> 
                                                <div >                                               
                                                <h2 className='text-white Fredoka1  text-sm font-bold tracking-wider hover:text-yellow-400' >{Vitem.heading}</h2>
                                                <p className='text-gray-400 text-xs'>{Vitem.time}</p>  
                                                </div>                                              
                                            </div>
                                        ))}
                                      </div>
                                      <p className='flex Fredoka1 text-white text-sm font-bold border-b border-gray-700 pb-2 mb-6 items-center tracking-wider '><h1 className=''>Photoes <span className='text-gray-400 tracking-wider' >(21)</span> </h1></p>
                                      <div className='flex flex-wrap gap-3'>
                                        {Mphotoes.map((pItem)=>(
                                        <img className='w-[95px] h-[95px] rounded pImg ' src={pItem.imglink} alt="" />
                                        ))}
                                      </div>

                                    </div>
                                </div>

                                <div className={toggleState === 5 ? 'content active-content' : 'content'}>
                                    {/* <div>SEASON TAB</div> */}
                                    <div className='pl-6'>
                                     <div className='flex gap-3 mb-6'>
                                            <img className='w-[100px] h-[150px] rounded-lg' src="./photoes/season.jpg" alt="" />
                                            <div className='text-gray-400 text-sm '>
                                                <h2 className='text-white Fredoka1 font-bold text-xl '>SEASON 10</h2>
                                                <p>21 Episodes</p>
                                                <p>Season 10 of The</p>
                                                <p>Big Bang Theory</p>
                                                <p>premiered on</p>
                                                <p>September 19,</p>
                                                <p>2016</p>
                                            </div>
                                    </div>

                                    <div className='flex gap-3 mb-6'>
                                            <img className='w-[100px] h-[150px] rounded-lg' src="./photoes/season.jpg" alt="" />
                                            <div className='text-gray-400 text-sm '>
                                                <h2 className='text-white Fredoka1 font-bold text-xl '>SEASON 10</h2>
                                                <p>21 Episodes</p>
                                                <p>Season 10 of The</p>
                                                <p>Big Bang Theory</p>
                                                <p>premiered on</p>
                                                <p>September 19,</p>
                                                <p>2016</p>
                                            </div>
                                    </div>

                                    <div className='flex gap-3 mb-6'>
                                            <img className='w-[100px] h-[150px] rounded-lg' src="./photoes/season.jpg" alt="" />
                                            <div className='text-gray-400 text-sm '>
                                                <h2 className='text-white Fredoka1 font-bold text-xl '>SEASON 10</h2>
                                                <p>21 Episodes</p>
                                                <p>Season 10 of The</p>
                                                <p>Big Bang Theory</p>
                                                <p>premiered on</p>
                                                <p>September 19,</p>
                                                <p>2016</p>
                                            </div>
                                    </div>

                                    <div className='flex gap-3 mb-6'>
                                            <img className='w-[100px] h-[150px] rounded-lg' src="./photoes/season.jpg" alt="" />
                                            <div className='text-gray-400 text-sm '>
                                                <h2 className='text-white Fredoka1 font-bold text-xl '>SEASON 10</h2>
                                                <p>21 Episodes</p>
                                                <p>Season 10 of The</p>
                                                <p>Big Bang Theory</p>
                                                <p>premiered on</p>
                                                <p>September 19,</p>
                                                <p>2016</p>
                                            </div>
                                    </div>

                                    <div className='flex gap-3 mb-6'>
                                            <img className='w-[100px] h-[150px] rounded-lg' src="./photoes/season.jpg" alt="" />
                                            <div className='text-gray-400 text-sm '>
                                                <h2 className='text-white Fredoka1 font-bold text-xl '>SEASON 10</h2>
                                                <p>21 Episodes</p>
                                                <p>Season 10 of The</p>
                                                <p>Big Bang Theory</p>
                                                <p>premiered on</p>
                                                <p>September 19,</p>
                                                <p>2016</p>
                                            </div>
                                    </div>

                                    <div className='flex gap-3 mb-6'>
                                            <img className='w-[100px] h-[150px] rounded-lg' src="./photoes/season.jpg" alt="" />
                                            <div className='text-gray-400 text-sm '>
                                                <h2 className='text-white Fredoka1 font-bold text-xl '>SEASON 10</h2>
                                                <p>21 Episodes</p>
                                                <p>Season 10 of The</p>
                                                <p>Big Bang Theory</p>
                                                <p>premiered on</p>
                                                <p>September 19,</p>
                                                <p>2016</p>
                                            </div>
                                    </div>

                                    <div className='flex gap-3 mb-6'>
                                            <img className='w-[100px] h-[150px] rounded-lg' src="./photoes/season.jpg" alt="" />
                                            <div className='text-gray-400 text-sm '>
                                                <h2 className='text-white Fredoka1 font-bold text-xl '>SEASON 10</h2>
                                                <p>21 Episodes</p>
                                                <p>Season 10 of The</p>
                                                <p>Big Bang Theory</p>
                                                <p>premiered on</p>
                                                <p>September 19,</p>
                                                <p>2016</p>
                                            </div>
                                    </div>

                                    <div className='flex gap-3 mb-6'>
                                            <img className='w-[100px] h-[150px] rounded-lg' src="./photoes/season.jpg" alt="" />
                                            <div className='text-gray-400 text-sm '>
                                                <h2 className='text-white Fredoka1 font-bold text-xl '>SEASON 10</h2>
                                                <p>21 Episodes</p>
                                                <p>Season 10 of The</p>
                                                <p>Big Bang Theory</p>
                                                <p>premiered on</p>
                                                <p>September 19,</p>
                                                <p>2016</p>
                                            </div>
                                    </div>

                                    <div className='flex gap-3 mb-6'>
                                            <img className='w-[100px] h-[150px] rounded-lg' src="./photoes/season.jpg" alt="" />
                                            <div className='text-gray-400 text-sm '>
                                                <h2 className='text-white Fredoka1 font-bold text-xl '>SEASON 10</h2>
                                                <p>21 Episodes</p>
                                                <p>Season 10 of The</p>
                                                <p>Big Bang Theory</p>
                                                <p>premiered on</p>
                                                <p>September 19,</p>
                                                <p>2016</p>
                                            </div>
                                    </div>
                                </div>  
                            </div>

                                <div className={toggleState === 6 ? 'content active-content' : 'content'}>
                                   {/* <p className='text-white text-4xl px-20'>RATEDMOVIE  CONTENT</p> */}
                                   <p className='Fredoka1 text-gray-400 font-bold text-xl mb-6 '>Related Movies To</p>
                                     <h2 className='Fredoka1 text-sky-500 font-bold text-2xl mb-10 '>Skyfall: Quantum of Spectre</h2>
                                     <div className='w-full border-y border-gray-500  flex  sm:flex-row flex-col items-center justify-center md:justify-start md:items-start   mb-8'>
                                        <p className=' text-gray-500  md:pr-[220px] left-0 py-2 text-sm'>Found 1,608 movies in total</p>
                                        <label className='text-gray-500  px-3 py-2 text-sm md:mr-[80px]'  htmlFor=""> Sort by:</label>
                                        <select className='bg-transparent text-white text-sm py-2 md:border-l border-gray-500  outline-none hover:ountline-none active:outline-none visited:outline-none text-sm px-5' name="" id="">
                                        {optn.map((item)=>(
                                        <option className='font-bold bg-[#020d18]  '  key={item.id} value="">{item.value}</option>
                                        ))} 
                                        </select> 
                                </div>                                   
                                   <div className='flex flex-col items-center justify-center '>
                                        {moviData.map((Mitem)=>(
                                            <div className='md:flex  md:w-full w-[50%]   mb-7'>
                                                <div className='md:w-[260px] w-full  md:mr-6 overflow-hidden relative '>
                                                    <img className='w-[180px] h-[250px] rounded-xl shrink-0' src={Mitem.imgling} alt="" />
                                                </div>
                                                <div className='pt-6 w-auto md:w-[75%] '>
                                                <div className='flex mb-2 items-end'> <h2 className='text-white hover:text-yellow-400 Fredoka1 text font-bold uppercase tracking-wide mr-1'>{Mitem.Mname}</h2><span className='Fredoka1 text-gray-400 text-sm font-bold '>{Mitem.Myear}</span></div>
                                                <p className='flex mb-1  items-center text-gray-400 text-xs'> <FaStar className='text-yellow-400 text-lg'/> <span className=' text-lg   text-white'>{Mitem.rated}</span> /10 </p>
                                                <p className='text-gray-400 text-sm border-b border-gray-400 pb-6 mb-6'>{Mitem.pargrp}</p>
                                                <ul className='flex flex-wrap gap-6 text-gray-400 text-sm '>
                                                    <li>Run Time:{Mitem.M_duration}</li>
                                                    <li> {Mitem.videoType}</li>
                                                    <li>{Mitem.R_date}</li>
                                                </ul>
                                                <p className='text-gray-400 text-sm'>Director:  <span className='text-sky-700 hover:text-yellow-400'> {Mitem.Drctr1}</span>, <span className='text-sky-700 hover:text-yellow-400'>{Mitem.Drctr2}</span> </p>
                                                <p className='text-gray-400 text-sm'>Actor: <span className='text-sky-700 hover:text-yellow-400'>{Mitem.Actor1}</span> . <span className='text-sky-700 hover:text-yellow-400'>{Mitem.Actor2}</span> . <span className='text-sky-700 hover:text-yellow-400'>{Mitem.Actor3}</span> </p>
                                                </div>
                                        </div>
                                        ))}
                                    </div>
                                    <div className='border-y border-gray-400 items-center md:items-start justify-center md:justify-start flex md:flex-row flex-col ' >
                                        <p className='md:mr-[70px] text-sm text-gray-400 py-2'>Movies per page:</p>
                                        <select className='bg-transparent text-white md:border-x border-gray-500 outline-none hover:ountline-none active:outline-none visited:outline-none text-sm py-2 px-5 md:w-[250px]' name="Movies" id="">
                                                {
                                                    opt3.map((item1)=>(
                                                        <option className='font-bold bg-[#020d18]  ' key={item1.id} value="">{item1.value}</option>
                                                    ))
                                                }
                                            </select>
                                            <ul className='flex style-none gap-2 items-center text-gray-500 md:ml-[160px] py-2'>
                                                <li >Page 1 of 2: </li> 
                                                <li className='text-sky-800 hover:text-yellow-400 cursor-pointer'>1</li>
                                                <li className='text-sky-800 hover:text-yellow-400 cursor-pointer'>2</li>
                                                <li className='text-sky-800 hover:text-yellow-400 cursor-pointer'><IoIosArrowForward/></li>
                                            </ul>
                                        
                                    </div>
                                </div>

                                

                            </div>

                        </div>
                    </div>


                </div>
            </section>

        </div>
        <Footer/>
    </>  
    )
}

