import React, { useState } from 'react'
import {  IoIosArrowForward} from 'react-icons/io';
import {FaRegListAlt, FaStar} from 'react-icons/fa';
import {TbGridDots} from 'react-icons/tb'

import { gridfilmData, opt, opt1 } from '../MovieGrid/MovieGridData'
import Footer from '../Footer'




export default function MovieGrid() {

  return (
    <>
    <section className='mvGridsec'>
        <div className='w-full h-[400px] flex justify-center '>
            <div className='w-10/12'>
                <div className='w-full pt-[220px] align-baseline flex flex-col items-center '>
                    <h2 className='Fredoka md:text-4xl text-2xl font-[900] '>MOVIE LISTING - GRID FULLWIDTH</h2>
                    <ul className='style-none flex text-gray-400 gap-5 items-center justify-center'>
                        <li><a href="" className='text-sky-600'>HOME</a> </li>
                        <IoIosArrowForward/>
                        <li> MOVIE LISTING</li>
                    </ul>
                </div>

            </div>
        </div>
    </section>
    <section className='bg-[#020d18] py-[100px] md:flex justify-center '>
        <div className='md:w-[85%] w-[98%] md:flex justify-center ' >
            <div className=' w-full justify-center  '>
                <div className='w-full border-y border-gray-500  text-sm flex  sm:flex-row flex-wrap flex-col items-center md:items-stretch  justify-center md:justify-start   mb-8'>
                     <p className=' text-gray-500 py-2 shrink-1 text-sm md:pr-[580px]'>Found 1,608 movies in total</p>
                     <label className='text-gray-500 py-2 px-3 text-sm'  htmlFor=""> Sort by:</label>
                     <select className='bg-transparent text-white md:border-x border-gray-500  outline-none hover:ountline-none active:outline-none visited:outline-none text-sm px-5 md:pr-14' name="" id="">
                         {opt.map((item)=>(
                            
                            <option className='font-semibold bg-[#020d18]  '  key={item.id} value="">{item.value}</option>
                            ))} 
                         </select>
                     <a href="" className='text-gray-400 text- p-3 px-4 hover:text-yellow-400'><FaRegListAlt/></a>  
                     <a href="" className='text-gray-400 text- p-3 hover:text-yellow-400 md:border-l border-gray-500'><TbGridDots/></a>  
                </div>
                <div className='flex flex-wrap w-full items-justify-center gap-6 mb-10'>
                     {
                        gridfilmData.map((Cover)=>(
                            <div key={Cover.id} className='lg:w-[170px] lg:h-[250px] shrink-0 Tdiv mb-14'>
                                <img className='object-cover w-full h-full shrink-0 rounded-lg mb-2 z-[-1] Timg' src={Cover.imgLInk} alt="" />
                                <h2 className='text-white text-lg Fredoka1 uppercase tracking-wider font-bold leading-none'>{Cover.Name}</h2>
                                <p className='text-white font-bold flex items-center gap-1'><span className='text-yellow-500' ><FaStar/></span>{Cover.rated} <span className='text-xs text-gray-400'>/10</span></p>
                                <button className='absolute'><a href="" className='absolute text-white left-[30px] bottom-[180px] rounded-full z-50 teko  w-[100px] bg-pink-800 text-xl px-4 py-1 TBtn '>{Cover.btn}</a></button>


                            </div>
                        ))
                     }

                </div>
                <div className='flex flex-col md:flex-row border-y border-gray-500 items-center md:items-stretch  justify-center md:justify-between  '>
                    <p className='text-gray-500 pr-[50px] py-2' >Movies per page:</p>
                    <select className='bg-transparent text-white md:border-x border-gray-500 outline-none hover:ountline-none active:outline-none visited:outline-none text-sm py-2 px-5 w-[200px]' name="" id="">
                        {
                            opt1.map((item1)=>(
                                <option className='font-bold bg-[#020d18]  ' key={item1.id} value="">{item1.value}</option>
                            ))
                        }
                    </select>
                    <div className='md:flex'>
                    <label className='text-gray-500 md:pl-[150px] py-2' htmlFor="">Page 1 of 2:</label>
                    <ul className='flex style-none gap-2 items-center text-gray-500 md:pl-5'>
                        <li className='hover:text-yellow-400 cursor-pointer'>1</li>
                        <li className='hover:text-yellow-400 cursor-pointer'>2</li>
                        <li className='hover:text-yellow-400 cursor-pointer'>3</li>
                        <li className='hover:text-yellow-400 cursor-pointer'>...</li>
                        <li className='hover:text-yellow-400 cursor-pointer'>78</li>
                        <li className='hover:text-yellow-400 cursor-pointer'>79</li>
                        <li className='hover:text-yellow-400 cursor-pointer'><IoIosArrowForward/></li>
                    </ul>
                    </div>



                </div>
            </div>
        </div>
    </section>
    <Footer/>
      
    </>
  )
}
