'use client'
import React from 'react'
import { Link } from 'react-scroll';
import classNames from 'classnames'
import { HiChevronDoubleDown } from 'react-icons/hi';
import { Lora } from '@next/font/google'


const lora = Lora({ subsets: ['latin'], weight: ['400'] })

const ChooseGif = () => {

    const handleScroll = () => {
        const offset = -200; // Scroll miktarı (negatif değer aşağıya scroll yapar)
        const duration = 500; // Scroll süresi (milisaniye cinsinden)

        window.scroll({
            top: offset,
            behavior: 'smooth',
            duration: duration,
        });
    };
    return (
        <div className='flex flex-col flex-start mt-10'>
            <p className='text-gray-300 text-base italic font-bold self-start '>
                You can <span className='text-gray-50 font-extrabold'>search for GIFs and stickers</span> and Use popular GIF&lsquo;s <span className='text-gray-50 font-extrabold'>for editing</span>
            </p>
            <Link to="seeGifs" smooth={true} duration={500} onClick={handleScroll} className={classNames('flex self-start items-center justify-center gap-6 p-2 cursor-pointer bg-gradient-to-r from-sky-400 via-sky-500 to-sky-400 rounded px-8 mt-10 opacity-90 hover:opacity-100 transition-all duration-400 hover:-translate-y-1 active:translate-y-0.5', lora.className)} >
                <span className='text-base font-bold'>Choose a GIF</span>
                <HiChevronDoubleDown className='text-white animate-moveUpDown  h-full text-4xl' />
            </Link>

        </div>
    )
}

export default ChooseGif