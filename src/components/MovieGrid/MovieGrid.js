import React, { useState } from 'react'
import {  IoIosArrowForward} from 'react-icons/io';
import {FaRegListAlt, FaStar} from 'react-icons/fa';
import {TbGridDots} from 'react-icons/tb'

import { gridfilmData, opt, opt1 } from './MovieGridData'
import Footer from '../Footer'
import Select from 'react-select';
import makeAnimated from 'react-select/animated'



export default function MovieGrid() {
    // const [seletedoption, setselectedoption]=useState(null);
    // useMulti Select 
    const animatedComponents=makeAnimated();
    const options=[
        {value:'Enter to filter genres', label:'enter to film genres'},
        {value:'Action1', label:'Action1'},
        {value:'Action2', label:'Action2'},
        {value:'Action3', label:'Action3'},
        {value:'Action4', label:'Action4'},
        {value:'Action5', label:'Action5'},
        {value:'Action6', label:'Action6'},
        {value:'Action7', label:'Action7'},
    ]

   
  return (
    <>
    <section className='mvGridsec'>
        <div className='w-full h-[400px] flex justify-center '>
            <div className='w-10/12'>
                <div className='w-full pt-[220px] align-baseline flex flex-col items-center '>
                    <h2 className='Fredoka md:text-4xl text-2xl font-[900] '>MOVIE LISTING - GRID</h2>
                    <ul className='style-none flex text-gray-400 gap-5 items-center justify-center'>
                        <li><a href="" className='text-sky-600'>HOME</a> </li>
                        <IoIosArrowForward/>
                        <li> MOVIE LISTING</li>
                    </ul>
                </div>

            </div>
        </div>
    </section>
    <section className='bg-[#020d18] py-[100px] md:flex justify-center'>
        <div className='md:w-[85%] w-[98%] md:flex justify-center' >
            <div className='md:w-[68%] w-full justify-center items-center '>
                <div className='w-full border-y border-gray-500  flex  sm:flex-row flex-col items-center justify-center   mb-8'>
                     <p className=' text-gray-500 py-2 md:pr-[200px]'>Found 1,608 movies in total</p>
                     <label className='text-gray-500 py-2 px-3'  htmlFor=""> Sort by:</label>
                     <select className='bg-transparent text-white md:border-x border-gray-500  outline-none hover:ountline-none active:outline-none visited:outline-none text-sm px-5' name="" id="">
                         {opt.map((item)=>(
                            
                            <option className='font-bold bg-[#020d18]  '  key={item.id} value="">{item.value}</option>
                            ))} 
                         </select>
                     <a href="" className='text-gray-400 text- p-3 hover:text-yellow-400'><FaRegListAlt/></a>  
                     <a href="" className='text-gray-400 text- p-3 hover:text-yellow-400 md:border-l border-gray-500'><TbGridDots/></a>  
                </div>
                <div className='flex flex-wrap w-full items-justify-center gap-4 mb-6'>
                     {
                        gridfilmData.map((Cover)=>(
                            <div key={Cover.id} className='md:w-[23.1%] sm:w-[48%] w-full  h-[28%] Tdiv'>
                                <img className='object-cover w-full h-full rounded-lg mb-2 z-[-1] Timg' src={Cover.imgLInk} alt="" />
                                <h2 className='text-white text-lg Fredoka1 uppercase tracking-wider font-bold leading-none'>{Cover.Name}</h2>
                                <p className='text-white font-bold flex items-center gap-1'><span className='text-yellow-500' ><FaStar/></span>{Cover.rated} <span className='text-xs text-gray-400'>/10</span></p>
                                <button className='absolute'><a href="" className='absolute text-white left-[30px] bottom-[180px] rounded-full z-50 teko  w-[100px] bg-pink-800 text-xl px-4 py-1 TBtn '>{Cover.btn}</a></button>


                            </div>
                        ))
                     }

                </div>
                <div className='flex flex-col md:flex-row border-y border-gray-500 items-center justify-center  '>
                    <p className='text-gray-500 pr-[50px] py-2' >Movies per page:</p>
                    <select className='bg-transparent text-white md:border-x border-2 border-gray-500 outline-none hover:ountline-none active:outline-none visited:outline-none text-sm py-2 px-5 w-[200px]' name="" id="">
                        {
                            opt1.map((item1)=>(
                                <option className='font-bold bg-[#020d18]  ' key={item1.id} value="">{item1.value}</option>
                            ))
                        }
                    </select>
                    <label className='text-gray-500 md:pl-[150px] py-2' htmlFor="">Page 1 of 2:</label>
                    <ul className='flex style-none gap-2 items-center text-gray-500 pl-5'>
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

            <div className='md:w-[32%] w-full md:pl-[60px] px-2  sm:px-12 md:mt-0 mt-6 '>
                <div>
                    <h2 className='text-white Fredoka1 tracking-wide font-bold text-xl border-b border-gray-500 pb-2 mb-8' >SEARCH FOR MOVIE</h2>
                     <div className='p-3  bg-[#0b1a2a] Fredoka1 text-xs border-4 border-[#0f2133] mb-6 '>
                        <label className='text-gray-400 text-sm font-bold mb-3'>Movie name</label>
                        <input className='text-gray-300 text-xs w-full bg-[#233a50] px-3 py-2 text-sm rounded-sm my-3 outline-none' type="text" placeholder='Enter keywords ' />
                        <label className='text-gray-400 text-sm font-bold mb-2' htmlFor="">Genres & Subgenres</label>
                        {/* <select className='text-gray-300 text-xs w-full bg-[#233a50] px-3 py-2 text-sm rounded-sm my-3 outline-none'  name="" id="">
                            {opt.map((itemm)=>(
                                <option key={itemm.id} value="">{itemm.value}</option>
                            ))}
                        </select> */}
                        <div className='bg-[#233a50]' >
                            {/* Multi select with animation */}
                        <Select 
                        className='select-bg'
                       
                        components={animatedComponents}
                        defaultValue={[options[0]]}
                        isMulti
                        options={options}
                        // className="basic-multi-select"
                        // classNamePrefix="select"
                        />
                        </div>
                        <label className='text-gray-400 text-sm font-bold mb-2' htmlFor="">Rating Range</label>
                        <select className='text-gray-300 text-xs w-full bg-[#233a50] px-3 py-2 text-sm rounded-sm my-3 outline-none'  name="" id="">
                            {opt1.map((itemm)=>(
                                <option key={itemm.id} value="">{itemm.value}</option>
                            ))}
                        </select>
                        <label className='text-gray-400 text-sm font-bold mb-2' htmlFor="">Release Year</label>
                        <div className=' md:flex gap-4 mb-3 '>
                            <select className='text-gray-300 text-xs  md:w-[45%] w-full bg-[#233a50] px-3 py-2 text-sm rounded-sm outline-none md-mb-0 mb-3'  name="" id="">
                                {opt1.map((itemm)=>(
                                    <option key={itemm.id} value="">{itemm.value}</option>
                                ))}
                           </select>
                           <select className='text-gray-300 text-xs md:w-[45%] w-full bg-[#233a50] px-3 py-2 text-sm rounded-sm  outline-none md-mb-0 mb-3'  name="" id="">
                                {opt1.map((itemm)=>(
                                    <option key={itemm.id} value="">{itemm.value}</option>
                                ))}
                           </select>
                        </div>
                        <button type='submit' className='text-white Fredoka1 text-sm w-full bg-pink-800 px-3 py-2 text-sm rounded-sm my-2 outline-none'>SUBMIT </button>

                    </div>
                </div>

                <div className='w-full md:h-[250px] h-[350px] md:px-0 px-2 mb-8'>
                    <img className='object-cover w-full h-full' src="./photoes/sr-single.jpg" alt="" />
                </div>
                <div className='w-full h-[400px] mb-8'>
                    <h2 className='Fredoka1 text-white font-bold md-text-xxl text-xl border-b border-gray-400 py-3'>FIND US ON FACEBOOK</h2>
                </div>
                <div className='w-full h-[400px] mb-8'>
                    <h2 className='Fredoka1 text-white font-bold md-text-xxl text-xl border-b border-gray-400 py-3'>TWEET TO US</h2>
                </div>

            </div>
        </div>
    </section>
    <Footer/>
      
    </>
  )
}
