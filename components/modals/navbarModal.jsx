import React from 'react'
import Link from 'next/link'
import { AiFillStar } from 'react-icons/ai'
import { MdDesignServices } from 'react-icons/md'
import { FaHome } from 'react-icons/fa'

function NavbarModal({ setIsOpen }) {
    return (
        <div className="fixed md:hidden w-full h-full inset-0 z-[51] overflow-y-hidden
    ">
            <div className='flex flex-col items-center justify-start pt-40  w-full animate-modal h-full  bg-[#F1F1E8] relative z-50'>
                <Link className='text-2xl  text-gray-700 hover:bg-sky-500 hover:text-white font-bold flex items-center justify-center gap-8 w-3/4 h-20 ' onClick={() => setIsOpen(false)} href="/"><FaHome className=' text-[40px]' />Home</Link>
                <span className='w-3/4 h-1 border-b-4'></span>
                <Link className='text-2xl text-gray-700 hover:bg-sky-500 hover:text-white font-bold flex  items-center justify-center gap-8 w-3/4 h-20' onClick={() => setIsOpen(false)} href="/favorites"><AiFillStar className='text-yellow-500 text-[40px] ml-[33px]' />Favorites</Link>
                <span className='w-3/4 h-1 border-b-4 '></span>
                <Link className='text-2xl text-gray-700 hover:bg-sky-500 hover:text-white font-bold flex items-center justify-center gap-8 w-3/4 h-20 ' onClick={() => setIsOpen(false)} href="/designs"><MdDesignServices className='text-green-500 text-[40px] ml-[24px]' />Designs</Link>
                <span className='w-3/4 h-1 border-b-4'></span>
            </div>
        </div>
    )
}

export default NavbarModal
