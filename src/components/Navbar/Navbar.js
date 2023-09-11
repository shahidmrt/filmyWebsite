import React, { useState } from 'react'

import Button from './Button'
import Navlink from './Navlink'

export default function Navbar() {
    const opt=[
        {value:1,type:'TV SHOW'},
        {value:2,type:'OTHERS'}
    ]
    const [open, setOpen]=useState(false)
  return (
    <header className=' md:bg-transparent bg-[#233a50]'>

        <div className='flex items-center font-medium justify-around md:mt-3 mt-0'>
            <div className='z-50 p-5 md:w-auto w-full flex justify-between '>
                <img src="logo1.png" alt="llogopi " className=' md:cursor-pointer ' />
                <div className='text-3xl md:hidden mr-5 ' onClick={()=>setOpen(!open)}>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
            </div>

            <ul className='md:flex hidden uppercase items-center teko text-lg text-[#abb7c4] ' >
                <li>
                    <a to="/" className='py-7 px-3 inline-block'></a>
                </li>
                <Navlink/>
            </ul>
            <div className=' hidden text-white md:flex gap-3 '>
               <button className='teko text-2xl  text-[#abb7c4]'>HELP</button> 
               <button className='teko text-2xl  text-[#abb7c4]'>LOG IN</button> 
               <Button/>
            </div>
           


            {/* MOBILE NAVBAR  */}
            <ul className={` md:hidden bg-[#233a50] absolute overflow-y-scroll absolute z-40 w-full h-full pb-10 top-36 bottom-0 pl-4 text-[#abb7c4]
            duration-500 easy-in-out ${open ? 'left-0' : 'left-[-100%]'} `} >
                <li className=''>
                    <a  className=' px-3 inline-block'></a>
                </li>
                <Navlink/>
                <p className='teko text-[#abb7c4] text-2xl  pl-3'>LOG IN</p>
                <div className='py-5 flex flex-col justify-center items-center'>
                    
                <Button/>
                
                </div>
            </ul>
       </div>

       <div className='  w-[85%] mx-auto border-4 border-black mt-5 text-[#abb7c4] bg-[#233a50]  relative overflow-hidden md:flex hidden'> 
        <select name="" id="" className='py-2 px-4 w-[146px] text-[#abb7c4] bg-[#233a50] border-r-2 border-black outline-0 hover:outline-0'>{
            opt.map((item)=>
            <option className='outline-0 hover:outline-0' key={item.value} value={item.value} > {item.type}</option>
            )
        }
            
        </select>
        <div className=' border-l-black outline-0 hover:outline-0 '>
            <input className='nav-input w-[1000px] py-2 px-4 text-[#abb7c4] bg-[#233a50] outline-0 border-0 hover:outline-0' type="text" placeholder='Search for a movie, TV Show or celebrity that you are looking for' />
        </div>
       </div>
        <div className='flex  w-[85%] mx-auto items-center justify-end text-xl teko gap-3 my-5 px-5 text-white'>
            <p className='font-bold tracking-wide' >FOLLOW US :</p>
        <ion-icon name="logo-facebook"></ion-icon> 
        <ion-icon name="logo-twitter"></ion-icon>
        <ion-icon name="logo-google"></ion-icon>
        <ion-icon name="logo-youtube"></ion-icon>
            
        </div>
  </header>
  )
}
