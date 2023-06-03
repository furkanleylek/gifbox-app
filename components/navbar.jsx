'use client'
import React, { useState } from 'react'
import NavbarModal from './modals/navbarModal';
import { useContextGif } from './context';
import gifbox from '../public/gifbox.png'
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai'
import { MdDesignServices } from 'react-icons/md'
import Link from 'next/link';
import { Tooltip } from 'react-tooltip';

function Navbar() {

    const { isOpen, setIsOpen } = useContextGif()

    return (
        <div className='relative flex flex-col py-10 px-4 md:px-14 container m-auto '>
            <div className='flex items-center justify-between '>
                <Link href='/' className='flex items-center gap-4 cursor-pointer'>
                    <Image src={gifbox} width={60} height={40} alt='gifbox' />
                    <span className='z-50 text-2xl  mt-2 italic font-bold pointer-events-none text-sky-400'>gifbox</span>
                </Link>
                <button
                    className={`h-[35px] flex md:hidden flex-col items-center justify-center cursor-pointer z-[999] hover:scale-110 transition-all `}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className={`${isOpen ? 'rotate-[-45deg] translate-x-[-6px] translate-y-[10px] border-secondary' : 'border-primary'} h-4 w-[44px] border-b-[4px]  rounded-sm transform transition ease-in-out delay-200`}></span>
                    <span className={`${isOpen ? 'opacity-0  border-secondary' : 'opacity-100  border-primary'} h-4 w-[44px] border-b-[4px] rounded-sm transition-all  ease-in-out delay-200 `}></span>
                    <span className={`${isOpen ? '-rotate-[-45deg]  translate-y-[-12px]  border-secondary' : ' border-primary'} h-4 w-[44px] border-b-[4px] rounded-sm transform transition ease-in-out delay-200`}></span>
                </button>
                <div className='hidden md:flex items-center text-4xl gap-8'>
                    <Link href='/favorites' data-tooltip-id="my-tooltip" data-tooltip-content="Favorites">
                        <AiFillStar className='text-orange-500 opacity-60 hover:opacity-100 hover:scale-105' />
                    </Link>
                    <Link href='/designs' data-tooltip-id="my-tooltip" data-tooltip-content="Designs">
                        <MdDesignServices className='text-green-700 hover:scale-105 opacity-60 hover:opacity-100' />
                    </Link>
                    <Tooltip id="my-tooltip" style={{ backgroundColor: 'transparent', color: 'black', fontSize: '10px' }} />
                </div>
            </div>
            {isOpen && (
                <NavbarModal setIsOpen={setIsOpen} />
            )}

        </div>

    )
}

export default Navbar
