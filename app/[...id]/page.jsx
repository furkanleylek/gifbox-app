import React from 'react'
import SingleGif from '@/components/singleGif';
import { fetchSingleMeme, fetchWantedGifs, fetchWantedStickers, fetchGifTrends, fetchStickerTrends } from "@/services";
import Trends from '@/components/home/trends';
import { FaCaretSquareDown } from 'react-icons/fa'

async function MemeId({ params }) {
    const searchParams = params.id[0]

    try {

        function takeTitle(giftitle) {
            let GIFindex = giftitle.indexOf("GIF")
            let title = giftitle.slice(0, GIFindex)
            return title
        }


        const gifDetailData = await fetchSingleMeme("gifs", params.id[1])
        const title = takeTitle(gifDetailData.title)


        const pagePromises = [
            fetchWantedGifs(searchParams, 12),
            fetchWantedStickers(searchParams, 12),
            fetchGifTrends(),
            fetchStickerTrends(),
        ]
        const [gifsData, stickersData, gifsTrends, stickersTrends] = await Promise.all(pagePromises)

        return (
            <div className='h-full w-full flex flex-col gap-20'>
                <div className='w-full h-full bg-zinc-900'>
                    <div className='px-4 md:px-20 lg:px-28 container mx-auto'>
                        <SingleGif gifDetail={gifDetailData} title={title} />
                    </div>
                </div>
                <div className='w-full h-full py-12 bg-white'>
                    <div className='px-4 md:px-20 lg:px-28 container mx-auto flex flex-col gap-10'>
                        <div className='flex items-center gap-3 text-2xl md:text-5xl'>
                            <FaCaretSquareDown className=' text-sky-500 text-4xl md:text-6xl' />
                            <h3 className='font-bold text-secondary italic'>
                                {
                                    gifDetailData.type === 'gif'
                                        ?
                                        "Related Gifs"
                                        :
                                        "Related Stickers"
                                }
                            </h3>
                        </div>
                        <Trends
                            allTrends={
                                searchParams === 'trends'
                                    ?
                                    (gifDetailData.type === 'gif' ? gifsTrends : stickersTrends)
                                    :
                                    (gifDetailData.type === 'gif' ? gifsData : stickersData)}
                        />
                    </div>
                </div>
            </div>

        )
    } catch (error) {
        // Hata durumunda hata mesajını göster
        return <div
            className='px-4 md:px-28 container mx-auto w-full h-80  flex items-center justify-center text-3xl md:text-4xl font-bold text-white'
        >
            The page you were looking for was not found
        </div>;
    }
}

export default MemeId