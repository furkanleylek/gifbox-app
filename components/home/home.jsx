'use client'
import React, { useState } from 'react'
import Trends from './trends'
import Search from '../search'
import { useContextGif } from '../context'
import { BiTrendingUp } from 'react-icons/bi'

function Home({ trendsGifs, searchGifs, searchStickers, trendsStickers }) {

    const [content, setContent] = useState(0)
    const { wantedGifs, wantedStickers, search } = useContextGif()
    return (
        <main className='flex flex-col w-full text-secondary pb-12'>
            <div className='container px-4  m-auto  md:hidden w-full h-full mt-12'>
                <Search />
            </div>
            <div className='w-full flex flex-col px-4 md:px-28 h-full container m-auto '>
                <div className='w-full h-full flex items-center justify-between mt-10  py-4 gap-16 text-3xl md:text-5xl '>
                    <div className='flex items-center gap-3'>
                        <BiTrendingUp className=' text-sky-500 text-4xl md:text-6xl' />
                        <h3 className='font-bold text-secondary italic'>Trends</h3>
                    </div>
                    <div className='hidden md:flex h-full '>
                        <Search />
                    </div>
                </div>
                <div className='inline-block mt-14'>
                    <span className={`${content == 0 ? 'opacity-100 ' : 'opacity-60'} pb-4 cursor-pointer hover:opacity-100 text-[20px] italic font-semibold mr-14  `} onClick={() => setContent(0)}>GIFS</span>
                    <span className={`${content == 1 ? 'opacity-100 ' : 'opacity-60'} pb-4 cursor-pointer hover:opacity-100 text-[20px] italic font-semibold mr-14 `} onClick={() => setContent(1)}>STICKERS</span>
                </div>
                <span className={`inline-block mt-5 shadow-[0px_2px_0px_0px_rgba(0,0,0,0.1)] h-[7.5px] bg-secondary w-4 rounded-full transition ease-in-out duration-300 mb-10
                    ${content == 0 && 'transform  w-[48px]'}
                    ${content == 1 && 'transform translate-x-[98px] w-[92px]'}`}>
                </span>
                {content == 0
                    ?
                    (
                        search.length > 0
                            ?
                            <Trends allTrends={wantedGifs} />
                            :
                            <Trends allTrends={trendsGifs} />
                    )
                    :
                    (
                        search.length > 0
                            ?
                            <Trends allTrends={wantedStickers} />
                            :
                            <Trends allTrends={trendsStickers} />
                    )
                }
            </div>
        </main >
    )
}

export default Home
