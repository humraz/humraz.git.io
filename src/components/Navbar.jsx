import React from 'react'
// import {AiOutlineClose,AiOutlineMenu} from'react-icons/ai'
import logo from '../assets/hlogo.png'
import { Link } from 'react-scroll';

function Navbar(){

    return (

        <div className='flex'>
            <div className='justify-center me-auto size-20'>
                <img  src={logo} alt ='logo'></img>
            </div>
            <div className='text-white      flex justify-end items-center h-20 ms-auto '>
                <h1 className='md:font-bold font-semibold md:text-2xl md:px-5 md:m-3 px-2 hover:opacity-150 hover:scale-125 filter hover:duration-500'>Home</h1>
                <h1 className='md:font-bold font-semibold md:text-2xl md:px-5 md:m-3 px-2 hover:opacity-150 hover:scale-125 filter hover:duration-500'><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link></h1>
                <h1 className='md:font-bold font-semibold md:text-2xl md:px-5 md:m-3 px-2 hover:opacity-150 hover:scale-125 filter hover:duration-500'>About</h1>
            </div>


            {/* <div onClick={handleNav} className='block md:hidden'>
                {
                    <div className='ms-auto'>
                        nav? <AiOutlineClose size ={20} color='white'/> : <AiOutlineMenu size={20} color='white'/>
                        </div>
                }
                
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] ease-in-out duration-500 h-full border-r m-4 border-r-gray-900 bg-[#626462]' : 'fixed left-[-100%]'}>
                <ul className='pt-24 uppercase p-4'>
                <h1 className='font-bold text-2xl px-10 hover:opacity-150 hover:scale-125 filter hover:duration-500'>Home</h1>
                <h1 className='font-bold text-2xl px-10 hover:opacity-150 hover:scale-125 filter hover:duration-500'>Contact</h1>
                <h1 className='font-bold text-2xl px-10 hover:opacity-150 hover:scale-125 filter hover:duration-500'>About</h1>
                </ul>
            </div> */}

        </div>

    );
}

export default Navbar