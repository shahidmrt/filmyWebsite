import React, { useState } from 'react'
import { s3data } from './Sec3data'

export default function Section3() {

    const [activeIndex, setActiveindex]=useState(1);
    const handleclick=(index)=>setActiveindex(index);
    const checkActive= (index, className)=> 
    activeIndex === index ? className : "";


    return (
        <section className='flex flex-wrap   justify-center bg-[#020d18] py-20 '>
     <div className='md:w-7/12 px-[15px]  '>
                <div className='mb-[60px] '>

                    <img src="./photoes/ads2.png  " alt="" />
                </div>

                <div className='pb-5'>
                    <h1 className='teko text-3xl font-bold tracking-wider text-white '>LATEST NEWS</h1>
                </div>
               



           <div className=" pb-9">

                    <div className='md:flex  md:gap-5 pb-4 text-yellow-500 tracking-wider'>
                        {
                        s3data.map((item)=>{
                            return(
                                <p key={item.id} className={` ${checkActive(item.id, "bg-yellow-500 text-gray-500 rounded-md px-3 border-b-2 ")}  text-xl teko font-bold btn`} onClick={()=>handleclick(item.id)}>{item.btn}</p>
                                )
                            })}
                    </div>

                    <div >
                            {
                            s3data.map((item)=>(
                                
                            
                            
                        <div  className={`hidden sec3tab ${checkActive(item.id, "active")}`}>
                            <div className='md:flex'>
                        <div className='pl-4 md:shrink-0   '>
                            <img className=' rounded-lg object-cover md:w-45 w-full md:h-full h-30'  src={item.imglink} alt="" />
                        </div>
                        <div className='px-6 text-justify'>
                            <h2 className='text-2xlteko font-bold  tracking-tight text-mdd pb-6 text-[#4280bf] hover:text-yellow-400'><p >{item.link}</p></h2>
                            <div className=' text-gray-500 pb-6 text-sm'>{item.time}</div>
                        <p className='text-gray-500 text-sm'>{item.description}</p>
                            </div>
                            </div>

                    </div>
                    
                            ) )}
                        </div>

            </div>
            <div>
                <div className='flex justify-between mb-6 '>
                    <h2 className='text-white teko text-2xl '>  More On News BlockBusters</h2>
                    <p className='teko text-xl tracking-wide font-bold text-[#abb7c4]'>SEE ALL MOVIES NEWS <span><ion-icon name="chevron-forward-outline text-2xl text-[#abb7c4]"></ion-icon></span></p>
                </div>
                
                <div className='md:flex'>
                    
                    <div className='md:w-1/2 '>
                        <div  className="mr-4 pr-5 mb-4">
                            <h3 className='text-xs  font-bold tracking-wide text-[#4280bf] hover:text-yellow-400' >Michael Shannon Frontrunner to play Cable in “Deadpool 2”</h3>
                            <p className='text-gray-500 text-sm'>13 hours</p>

                        </div>
                        <div  className="mr-4 pr-5 mb-4">
                            <h3 className='text-xs  font-bold tracking-wide text-[#4280bf] hover:text-yellow-400' >French cannibal horror “Raw” inspires L.A. theater to hand out “Barf Bags”</h3>
                            <p className='text-gray-500 text-sm'>13 hours</p>

                        </div>
                        
                    </div>

                    <div className='md:w-1/2' >
                        <div  className="mr-4 pr-5 mb-4">
                            <h3 className='text-xs  font-bold tracking-wide text-[#4280bf] hover:text-yellow-400' >Laura Dern in talks to join Justin Kelly’s biopic “JT Leroy”</h3>
                            <p className='text-gray-500 text-sm'>13 hours</p>

                            </div>
                        <div  className="mr-4 pr-5 mb-4">
                            <h3 className='text-xs font-bold tracking-wide text-[#4280bf] hover:text-yellow-400' >China punishes more than 300 cinemas for box office cheating</h3>
                            <p className='text-gray-500 text-sm'>13 hours</p>

                        </div>
                        
                    </div>


                </div>
            </div>
       </div>



        <div className='md:w-3/12 w-full pl-10 pr-4'>
            <div className='h-1/2'>
                <h1 className='border-b border-white font-bold text-white pb-3 '>FIND US ON FACEBOOK</h1>


            </div>
            <div className='h-1/2'>
                <h1 className='border-b border-white  font-bold text-white pb-3 '>TWEET TO US</h1>


            </div>

            



        </div>


        </section>
    )
}
