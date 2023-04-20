'use client'
import React, { useState } from 'react'
import Trends from './trends'
import Search from '../search'
import { useContextGif } from '../context'

function Home({ trendsGifs, trendsStickers }) {

    const [content, setContent] = useState(0)
    const { wantedGifs, wantedStickers, search } = useContextGif()
    return (
        <main className='flex flex-col w-full text-white '>
            <Search />
            <div className='inline-block mt-14 '>
                <span className={`${content == 0 ? 'opacity-100 ' : 'opacity-60'} pb-4 cursor-pointer hover:opacity-100 text-[20px] italic font-semibold mr-14  `} onClick={() => setContent(0)}>GIFS</span>
                <span className={`${content == 1 ? 'opacity-100 ' : 'opacity-60'} pb-4 cursor-pointer hover:opacity-100 text-[20px] italic font-semibold mr-14 `} onClick={() => setContent(1)}>STICKERS</span>
            </div>
            <span className={`inline-block mt-5 shadow-[0px_2px_0px_0px_rgba(0,0,0,0.1)] h-[3.5px] bg-sky-500 w-4 rounded-full transition ease-in-out duration-300
                    ${content == 0 && 'transform  w-[43px]'}
                    ${content == 1 && 'transform translate-x-[98px] w-[84px]'}`}>
            </span>
            <span className='border-b-[1px] w-full h-[0.6px] mb-10 border-gray-700 opacity-70'></span>
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

        </main >
    )
}

export default Home
