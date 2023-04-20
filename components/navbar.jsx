'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import NavbarModal from './modals/navbarModal';
import { useContextGif } from './context';
import gifbox from '../public/gifbox.png'
import Image from 'next/image';

function Navbar() {

    const { isOpen, setIsOpen } = useContextGif()
    const router = useRouter()
    return (
        <div className='relative flex flex-col mt-6 px-4 md:hidden'>
            <div className='flex items-center justify-between '>
                <div className='flex items-center gap-4 cursor-pointer' onClick={() => router.push('/')}>
                    <Image src={gifbox} width={60} height={40} alt='gifbox' />
                    <span className='z-50 text-2xl  mt-2 italic font-bold text-sky-500'>gifbox</span>
                </div>
                <button
                    className={`h-[35px] flex flex-col items-center justify-center cursor-pointer z-[999] hover:scale-110 transition-all`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className={`${isOpen ? 'rotate-[-45deg] translate-x-[-6px] translate-y-[10px]' : ''} h-4 w-[44px] border-b-[4px] border-sky-500 rounded-sm transform transition ease-in-out delay-200`}></span>
                    <span className={`${isOpen ? 'opacity-0' : 'opacity-100'} h-4 w-[44px] border-b-[4px] border-sky-500 rounded-sm transition-all duration-300 ease-in-out delay-200 `}></span>
                    <span className={`${isOpen ? '-rotate-[-45deg]  translate-y-[-12px]' : ''} h-4 w-[44px] border-b-[4px] border-sky-500 rounded-sm transform transition ease-in-out delay-200`}></span>
                </button>

            </div>
            {isOpen && (
                <NavbarModal setIsOpen={setIsOpen} />
            )}

        </div>

    )
}

export default Navbar
