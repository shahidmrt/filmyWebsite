import React, { useState } from 'react'
import { links } from './Mylink'

export default function Navlink() {
    const[Heading, setHeading]=useState("");
    const[SubHeading, setSubHeading]=useState("");
    
  return (
    <>
    {
    links.map((link)=>(
        <div>
            <div className='px-3 teko text-2xl text-left md:cursor-pointer group' >
                <h1 className='py-2 flex justify-between items-center md:pr-0 pr-5' onClick={()=>{
                    Heading !== link.name ? setHeading(link.name) : setHeading("");
                    setSubHeading('');
                    }}>
                          {link.name}
                    <span className='text-xl md:hidden inline'>
                    <ion-icon name={`${Heading === link.name ? 'arrow-dropup' : 'arrow-dropdown'}`}></ion-icon>
                    </span>
                    <span className='text-2xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-4'>
                    <ion-icon name='arrow-dropdown'></ion-icon>
                    </span>
                     </h1>
                  
                {link.submenu && (
                    <div>
                        <div className='absolute top-16 hidden group-hover:md:block hover:md:block  '>
                            <div className='py-3'>
                                <div className='w-4 h-4 z-[-1] left-3 absolute mt-1 rotate-45 bg-gray-500'></div>
                            </div>
                            <div className='bg-gray-500 px-5 grid grid-cols-3 gap-5 fixed z-50'>
                                {link.sublinks.map((mysublinks) =>(
                                    <div>
                                        <h1 className='text-lg font-semibold'>{mysublinks.Head}</h1>
                                        {mysublinks.sublink.map((slink)=>(
                                            
                                            <li className='text-gray-800 my-2 bg-gray-500'>
                                            <a to={slink.link} className="hover:text-white">{slink.name}</a>
                                            </li>
                                         
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
             </div>

             {/* For Mobile  */}
             <div className={`${Heading === link.name ? "md:hidden" : 'hidden'} `}>
                
                {
                    link.sublinks.map((slinks)=>(
                        <div>
                            <div>
                                <h1 onClick={()=> 
                                SubHeading !== slinks.Head ? 
                                setSubHeading(slinks.Head) :
                                setSubHeading("")
                            } className='py-2 pl-7 font-semibold md:pr-0 pr-5'>
                                    {slinks.Head}
                                    <span className='text-xl md:mt-1 md:ml-2 inline'>
                                    <ion-icon name={`${SubHeading === slinks.Head ? 'arrow-dropup' : 'arrow-dropdown'}`}></ion-icon>
                                    </span>
                                    </h1>
                                    <div className={`${SubHeading === slinks.Head ? 'md:hidden' : 'hidden'  }`}>
                                        {slinks.sublink.map((slink)=>(
                                            <li className='py-3 pl-14'>
                                                <a tp={slink.link}>{slink.name}</a>
                                            </li>

                                        ))}
                                    </div>
                            </div>
                        </div>
                    ))
                }
             </div>
        </div>
    ))}
    
    </>
      

  )
}
