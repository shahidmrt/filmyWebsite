import React, { useState } from 'react'
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import  {theater} from './Sectiondata'
import {IoIosArrowForward} from 'react-icons/io';

import { Ontv } from './Sectiondata';
import {Actor} from './Sectiondata';


export default function Section1() {
    const[tv, setTv]= useState(Ontv);

    const [Item, setItem]= useState(theater);
  
   
    const filteritem= (categItem)=>{
         const updateItems= theater.filter((curElem)=>{
                      return curElem.category === categItem;
        });
                setItem(updateItems);
    };

     const Fritem=(categoryItem)=>{
        const updateItems=Ontv.filter((currentElement)=>{
            return currentElement.category ===categoryItem;
        });
        setTv(updateItems);
    }

    

    
  return (
    
       <section className='flex flex-wrap w-full md:pl-[100px] pl-[40px] pt-4 gap-5 bg-[#020d18] pb-[150px] sec1'>

          <div className='w-[59%]'>
              <div>
                   <div className='flex flex-wrap items-center justify-between w-full  text-[#abb7c4] px-4 '>
                    <h1 className='font-bold text-3xl text-white teko tracking-wide '>IN THEATER</h1>
                    {/* <a href="#" className='teko font-bold px-3 text-xl'> VIEW ALL<IoIosArrowForward className='text-xl text-[#abb7c4]' /></a> */}
                  </div>
                  <div className='flex flex-wrap  text-white gap-5 teko text-2xl my-4' >
                    <button className='hover:text-yellow-500 btn' onClick={() => filteritem('popular')}>#POPULAR</button>
                    <span className='hover:text-yellow-500' onClick={() => filteritem('coming')}>#COMING SOON</span>
                    <span className='hover:text-yellow-500' onClick={() => filteritem('top-rated')}>#TOP RATED</span>
                    <span className='hover:text-yellow-500' onClick={() => filteritem('m-reviewed')}>#MOST REVIEWED</span>
                 </div>
                 
                  <div className=' w-full h-[300px]  flex flex-wrap relative md:overflow-hidden overflow-y-auto'>
                    
                    {
                        Item.map((item)=>(
                            <div className='overflow-hidden h-[300px] w-[200px] gap-4' key={item.id}>
                                <img src={item.imglink} alt="" className='object-cover h-full w-full z-[-1] ml-3' />
                                <div> <h2 className=' z-[2] bg-yellow-500  text-white font-bold text-xl relative bottom-[75px]  left-[20px] inline-block mb-3'>{item.title}</h2></div>
                                <div className=' z-[2] bg-red-500 font-bold text-xl relative bottom-[85px]  left-[20px] inline-block '> {item.rated}</div>

                            </div>

                        ))
                    }

                 </div>

            </div>

                    <div className='my-5' >
                        <div className='flex flex-wrap items-center justify-between w-full  text-[#abb7c4] '>
                            <h1 className='font-bold text-3xl text-white teko tracking-wide '>ON TV</h1>
                            {/* <a href="#" className='teko font-bold px-3 text-xl'> VIEW ALL <ion-icon name="caret-forward-outline"  className="text-[#abb7c4]"></ion-icon></a> */}
                        </div>

                        <div className='flex flex-wrap  text-white gap-5 teko text-2xl my-4' >
                            <button className='hover:text-yellow-500 btn' onClick={() => Fritem('popular')}>#POPULAR</button>
                            <span className='hover:text-yellow-500' onClick={()=> Fritem('coming')} >#COMING SOON</span>
                            <span className='hover:text-yellow-500' onClick={()=> Fritem('top-rated')} >#TOP RATED</span>
                            <span className='hover:text-yellow-500' onClick={()=> Fritem('m-reviewed')}>#MOST REVIEWED</span>
                        </div>

                        <div className=' w-full h-[300px]  flex flex-wrap relative md:overflow-hidden overflow-y-auto'>
                    
                        {
                        tv.map((item)=>(
                            <div className='overflow-hidden h-[300px] w-[200px] gap-4' key={item.id}>
                                <img src={item.imglink} alt="" className='object-cover h-full w-full z-[-1] ml-3' />
                                <div> <h2 className=' z-[2] bg-yellow-500  text-white font-bold text-xl relative bottom-[75px]  left-[20px] inline-block mb-3'>{item.title}</h2></div>
                                <div className=' z-[2] bg-red-500 font-bold text-xl relative bottom-[85px]  left-[20px] inline-block '> {item.rated}</div>

                            </div>

                        ))
                       }

                         </div>



                    </div>


                  

        </div>

          <div className='md:w-[35.333333%] w-full   flex flex-wrap  justify-center  '>

              <div className='w-full h-[300px] mx-auto my-4'>
                <img src='./photoes/sr-single.jpg' className='w-[80%] h-[250px] mx-auto mt-5'  alt="pictre" />

             </div>

             <div className=' w-full  pl-8'>
                <h1 className='teko font-bold text-3xl text-white border-b border-white '> SPOTLIGHT CELEBRATIES</h1>

                
                    {
                        Actor.map((Aitem)=>(
                        <div className='flex mx-auto my-8 '>
                                <img src={Aitem.imglink} alt="pic" className='mr-3' />
                                <div>
                                    <h2 className='font-bold text-lg teko tracking-wider text-white'>{Aitem.name}</h2>
                                    <h2 className='teko text-lg text-gray-500'>{Aitem.title}</h2>
                                </div>
                         </div>

                        ))

                    }
                  
                

             </div>


          </div>

       </section>

      
    
  )
}
