import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import {FaRegListAlt, FaStar} from 'react-icons/fa';
import {TbGridDots} from 'react-icons/tb'
import {opt,celebraty, opt2,opt3,opt4, FeatureCele,} from './CelebratyGrid1Data'
// import { opt1 } from '../MovieGrid/MovieGridData';

export default function CelebratyGrid1() {
  return (
    <>
    <section className='CelebrityGridbg relative overflow-hidden '>
        <div >
               <div className=' flex flex-col w-full h-[380px] items-center justify-end  border pb-20 z-5 relative '>
                    <p className='Fredoka1 text-4xl font-black text-white mb-4'>CELEBRITY LISTING - GRID</p>
                    <ul className='flex gap-6 items-center '>
                        <li className='text-sky-700 '>HOME</li>
                        <li className='text-gray-400'><IoIosArrowForward/></li>
                        <li className='text-white'> CELEBRITY LISTING </li>
                    </ul>
               </div>

        </div>

    </section>
    {/* bg-[#020d18] */}
    <section className='flex justify-center bg-[#020d18]  pb-10'>
         <div className=' md:flex md:w-[85%] w-[98%] mt-20 '>
             <div className='md:w-[74%] w-full  '>
                 <div className='w-full bg-sky-100 flex md:flex-row flex-col  border-y border-gray-500 text-gray-400 text-sm mb-8 md:justify-between justify-center md:items-stretch items-center '>
                    <p className='py-2'>Found 1,608 celebrities in total</p>
                    <div className='flex md:flex-row flex-col justify-center md:justify-start md:items-stretch items-center  '>
                        <p className='pr-12 py-2 text-gray-400'>Sort by:</p>
                        <select className='bg-transparent text-gray-600 md:border-x border-gray-500  outline-none   text-sm px-6' name="" id="">
                         {opt.map((item)=>(                            
                            <option className='font-semibold bg-[#020d18]  '  key={item.id} value="">{item.value}</option>
                            ))} 
                        </select>
                        <a href="" className='text-gray-400 text- py-2 px-3 hover:text-yellow-400'><FaRegListAlt/></a>  
                        <a href="" className='text-gray-400 text- py-2 px-3 hover:text-yellow-400 md:border-l border-gray-500'><TbGridDots/></a>
                    </div>
                 </div>
                 
                 <div className='flex flex-wrap gap-4 justify-between mb-6'>
                    {celebraty.map((Citem)=>(
                        <div className=''>
                            <div className='w-[270px] h-[400px]'>
                                <img className='object-cover w-full h-full' src={Citem.imglink} alt="" />
                            </div>
                            <h2 className='text-[#fff] text-2xl Fredoka1 font-bold'>{Citem.heading}</h2>
                            <p className='text-gray-400 text'>{Citem.place}</p>
                        </div>
                    ))}
                 </div>
                 <div className=' flex flex-col md:flex-row  border-y border-gray-400 md:justify-between justify-center items-center '>
                    <p className='text-gray-400  text-sm'>Reviews per page: </p>
                    <select className='bg-transparent text-white md:border-x  border-gray-500 text-sm outline-none px-6 pr-24' name="" id="">
                         {opt2.map((item)=>(                            
                            <option className='font-bold bg-[#020d18] text-sm '  key={item.id} value="">{item.value}</option>
                            ))} 
                        </select>
                        <div className='flex text-sky-700 gap-3 py-2 items-center text-sm'>
                            <p className='text-gray-400 '>Page 1 of 6:</p>
                            <span className='hover:text-yellow-300 cursor-pointer'>1</span>
                            <span className='hover:text-yellow-300 cursor-pointer'>2</span>
                            <span className='hover:text-yellow-300 cursor-pointer'>3</span>
                            <span className='hover:text-yellow-300 cursor-pointer'>4</span>
                            <span className='hover:text-yellow-300 cursor-pointer'>5</span>
                            <span className='hover:text-yellow-300 cursor-pointer'>6</span>
                            <span className='hover:text-yellow-300 cursor-pointer'><IoIosArrowForward/></span>
                        </div>

                 </div>
             </div>
             <div className='md:w-[26%] w-full pl-8'>
                <div className='md:pl-10 pl-0 px-10 md:px-0 '>
                  <h2 className='text-white Fredoka1 text-xl font-bold border-b border-gray-500 pb-3'>SEARCH CELEBRITY</h2>
                  <form action="" className='py-8 text-sm'>
                    <label className='text-gray-400 Fredoka1 font-bold ' htmlFor="">Celebrity name</label>
                    <input className='p-2.5 w-full text-sm  rounded-sm bg-[#233a50] mt-2 mb-4' placeholder='Enter Keywords' type="text"  />
                    <label className='text-gray-400 Fredoka1 font-bold ' htmlFor="">Celebrity Letter</label><br />
                    <select className='bg-[#233a50] text-gray-400 text-sm outline-none w-full p-2.5 rounded-sm mt-2 mb-4' name="" id="">
                         {opt3.map((item)=>(                            
                            <option className='font-bold bg-[#020d18] text-sm '  key={item.id} value="">{item.value}</option>
                            ))} 
                        </select>
                   <label className='text-gray-400 Fredoka1 font-bold text-sm ' htmlFor="">Category</label><br />
                   <select className='bg-[#233a50] text-gray-400 text-sm outline-none w-full p-2.5 rounded-sm mt-2 mb-4' name="" id="">
                         {opt4.map((item)=>(                            
                            <option className='font-bold bg-[#020d18] text-sm '  key={item.id} value="">{item.value}</option>
                            ))} 
                        </select>
                    <label className='text-gray-400 Fredoka1 font-bold text-sm ' htmlFor="">Year of birth</label><br /> 
                    <div className='md:flex justify-between '>
                        <select className='bg-[#233a50] text-gray-400 text-sm outline-none w-full md:w-[43%] p-2.5 rounded-sm mt-2 mb-4' name="" id="">
                         {opt4.map((item)=>(                            
                            <option className='font-bold bg-[#020d18] text-sm '  key={item.id} value="">{item.value}</option>
                            ))} 
                        </select>

                        <select className='bg-[#233a50] text-gray-400 text-sm outline-none w-full md:w-[43%] p-2.5 rounded-sm mt-2 mb-4' name="" id="">
                         {opt4.map((item)=>(                            
                            <option className='font-bold bg-[#020d18] text-sm '  key={item.id} value="">{item.value}</option>
                            ))} 
                        </select>
                         
                    </div>   

                  </form>
                 </div>
                 <div className='md:pl-10 pl-0 px-10 md:px-0 mb-8'>
                    <img className='w-full h-64  ' src="../photoes/sr-single.jpg" alt="" />
                 </div>

                 <div className='md:pl-10 pl-0 px-10 md:px-0' > 
                    <h2 className='teko text-white text-2xl border-b border-gray-400 pb-2 mb-8'>FEATURED CELEBRITY</h2>
                    {FeatureCele.map((feature)=>(
                        <div className='flex mb-6  ' key={feature.id} >
                            <img className='rounded-lg' src={feature.imglink} alt="" />
                            <div className='pl-6 flex flex-col justify-center '>
                                <h2 className='text-white'>{feature.CNameL}</h2>
                                <p className='text-gray-300'>{feature.Actor}</p>
                            </div>
                        </div>
                    ))}
                 </div>

             </div>
         </div>
    </section>
      
    </>
  )
}
