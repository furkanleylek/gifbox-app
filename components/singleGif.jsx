'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useContextGif } from '@/components/context';
import GifSkelaton from '@/components/skelaton';
import { fetchSingleMeme, fetchWantedGifs, fetchWantedStickers } from "@/services";
import { AiOutlineStar, AiFillStar, AiOutlineLink, AiOutlineDownload } from 'react-icons/ai'
import Slider from './slider';
import Trends from './home/trends';

function SingleGif({ gifDetail, title }) {

    const { isLoading, setIsLoading, search, favoritesArray, setFavoritesArray } = useContextGif()
    const [relatedGifs, setRelatedGifs] = useState([])
    const [isFavorite, setIsFavorite] = useState(favoritesArray?.map((e) => { return e.id }).includes(gifDetail.id) ? true : false)

    // const [gifDetail, setGifDetail] = useState()
    useEffect(() => {
        setIsLoading(false)
        async function handleData() {
            const pagePromises = [
                fetchWantedGifs(search, 0),
                fetchWantedStickers(search, 12)
            ]
            const [gifsData, relatedStickers] = await Promise.all(pagePromises)
            console.log("gifsData :", gifsData)
            setRelatedGifs(gifsData)
        }
        handleData()
    }, [])
    useEffect(() => {
        localStorage.setItem('favoritesArray', JSON.stringify(favoritesArray))
    }, [favoritesArray])
    console.log("favoritesArray :", favoritesArray)
    console.log("relatedGifs : ", relatedGifs)
    return (
        <div className='w-full h-full mt-10 flex flex-col'>
            <div className='flex items-center border-4'>
                <div className="relative w-60 h-60">
                    {gifDetail.images.original.webp
                        ?
                        (
                            <Image
                                src={`${gifDetail.images.original.webp}`}
                                fill
                                alt={title}
                                className="rounded-[10px] absolute"
                                placeholder="blur"
                                blurDataURL={`data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKCAYAAAC9vt6cAAAAGElEQVR42mNce/BgPQMFgHHUgFEDqGEAAD5CGteI0OXhAAAAAElFTkSuQmCC`}
                                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                            />
                        ) : (
                            <Image
                                src={`${gifDetail.images.original.url}`}
                                fill
                                alt={title}
                                className="rounded-md absolute"
                                placeholder="blur"
                                blurDataURL={`data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKCAYAAAC9vt6cAAAAGElEQVR42mNce/BgPQMFgHHUgFEDqGEAAD5CGteI0OXhAAAAAElFTkSuQmCC`}
                                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                            />
                        )}
                </div>
                <h1 className='text-3xl font-bold text-white'>{title}</h1>
                {isFavorite
                    ?
                    <AiFillStar className={` text-yellow-400 z-50 text-[20px] top-4 right-5 hover:scale-[1.1] transition-all`} onClick={(event) => { event.stopPropagation(), setIsFavorite(false), setFavoritesArray((favorite) => favorite.filter((e) => e.id !== gifDetail.id)) }} />
                    :
                    <AiOutlineStar className={` text-white z-50 text-[20px] top-4 right-5 hover:scale-[1.1] transition-all`} onClick={(event) => { event.stopPropagation(), setIsFavorite(true), setFavoritesArray((prev) => { if (prev) { return [...prev, gifDetail] } else { return [gifDetail] } }) }} />
                }
                <AiOutlineDownload className='text-white text-xl' />
                <AiOutlineLink className='text-white text-xl' />
            </div>
            <div className='text-3xl w-full h-full border-2 text-white'>
                Related Gifs
                <Trends allTrends={relatedGifs} />
            </div>
        </div>
    )
}

export default SingleGif