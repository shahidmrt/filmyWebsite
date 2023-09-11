import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'

export default function Footer() {
  return (
    <footer className='p-8'>
         <div className='container md:p-16   '>

            <div className='md:flex justify-between'>
                <div className='text-gray-400 pb-7 '>
                   <div className='pb-9'> <img src="logo1.png" alt="" /></div>
                    <p className='pb-5'>5th Avenue st, manhattan<br/>New York, NY 10001</p>
                    <p>Call us: <span href="#" className='text-lg text-white '>(+01) 202 342 6789</span></p>
                </div>
                <div className='pb-7'> 
                    <h3 className='text-white teko text-2xl font-bold'>Resources</h3>
                    <div className='text-gray-400'>
                        <ul className='list-none text-sm'>
                            <li>About</li>
                            <li>Blockbuster</li>
                            <li>Contact Us </li>
                            <li>Forums</li>
                            <li>Blog</li>
                            <li>Help</li>
                        </ul>
                    </div>
                </div>
                <div className='pb-7'>
                    <h3 className='text-white teko text-2xl font-bold'>Legal</h3>
                    <div className='text-gray-400 text-sm'>
                        <ul>
                            <li>Terms os Use </li>
                            <li>Privacy Policy </li>
                            <li>Security</li>
                        </ul>
                    </div>
                </div>
                <div className='pb-7'>
                <h3 className='text-white teko text-2xl font-bold'>Resources</h3>
                    <div className='text-gray-400'>
                        <ul className='list-none text-sm'>
                            <li>My Account </li>
                            <li>Watchlist</li>
                            <li>Collections </li>
                            <li>User Guide</li>
                        </ul>
                    </div>
                </div>
                <div className='pb-7'>
                    <h3 className='text-white teko text-2xl font-bold'>Newsletter</h3>
                    <p className='pb-8 text-gray-400 text-sm '>Subscribe to our newsletter system now <br/> to get latest news from us.</p>
                    <input className=' mb-5 w-11/12 bg-transparent border border-gray-600 px-3 py-1 active:border-gray-00 text-gray-400 text-sm' type="text" placeholder='Enter your email' />
                    <a className='text-[#dd003f] text-sm  tracking-tight uppercase font-bold flex' href="#"> Subscribe Now <IoIosArrowForward className='text-xl' /> </a>

                </div>
            </div>


         </div>

      
    </footer>
  )
}
