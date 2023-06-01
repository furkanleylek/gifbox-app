import React from 'react'
import SingleGif from '@/components/singleGif';
import { fetchSingleMeme, fetchWantedGifs, fetchWantedStickers } from "@/services";
import Home from '@/components/home/home'

async function MemeId({ params, searchParams }) {
    console.log("params: ", params)
    console.log("searchParams : ", searchParams)

    // if (params.id) {
    //     function takeTitle(giftitle) {
    //         let GIFindex = giftitle.indexOf("GIF")
    //         let title = giftitle.slice(0, GIFindex)
    //         return title
    //     }



    //     const gifDetailData = await fetchSingleMeme("gifs", params.id[1])
    //     const title = takeTitle(gifDetailData.title)
    // }
    const pagePromises = [
        fetchWantedGifs(searchParams.q, 12),
        fetchWantedStickers(searchParams.q, 12)
    ]
    const [gifsData, stickersData] = await Promise.all(pagePromises)
    return (
        <div className='border-4 h-full w-full'>
            <h1 className='text-xl text-white'>sa</h1>
            <Home searchGifs={gifsData} searchStickers={stickersData} />
        </div>

    )
}

export default MemeId