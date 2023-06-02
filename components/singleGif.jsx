'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useContextGif } from '@/components/context';
import GifSkelaton from '@/components/skelaton';
import { AiOutlineStar, AiFillStar, AiOutlineLink, AiOutlineDownload } from 'react-icons/ai'
import Slider from './slider';
import Trends from './home/trends';
import CopiedModal from './modals/copiedModal';
import { Tooltip } from 'react-tooltip';
import AddText from './edit/addText';
import Edit from './home/edit';


function SingleGif({ gifDetail, title }) {
    const { isLoading, setIsLoading, search, favoritesArray, setFavoritesArray } = useContextGif()
    const [isFavorite, setIsFavorite] = useState(favoritesArray?.map((e) => { return e.id }).includes(gifDetail.id) ? true : false)
    const [copySuccess, setCopySuccess] = useState(false)

    useEffect(() => {
        setIsLoading(false)
        localStorage.setItem('favoritesArray', JSON.stringify(favoritesArray))
    }, [favoritesArray])
    return (
        <div className='w-full h-full mt-10 flex flex-col'>
            <div className='flex flex-col justify-center gap-10'>
                <div className='flex items-center justify-between border-b-4 pb-8 gap-8 border-gray-200 border-opacity-30 '>
                    <h1 className='text-4xl md:text-6xl font-bold text-white'>{title}</h1>
                    <div className='flex items-center justify-center gap-6 text-2xl md:text-3xl relative pl-12 cursor-pointer'>
                        {isFavorite
                            ?
                            <button
                                className={` text-yellow-400 z-50  top-4 right-5 hover:scale-[1.1] opacity-70 hover:opacity-100 transition-all`}
                                onClick={(event) => { event.stopPropagation(), setIsFavorite(false), setFavoritesArray((favorite) => favorite.filter((e) => e.id !== gifDetail.id)) }}
                                data-tooltip-id="my-singleToolTip" data-tooltip-content="Remove Favorite">
                                <AiFillStar />
                            </button>
                            :
                            <button
                                className={` text-white z-50 top-4 right-5 hover:scale-[1.1] opacity-70 hover:opacity-100 transition-all`}
                                onClick={(event) => { event.stopPropagation(), setIsFavorite(true), setFavoritesArray((prev) => { if (prev) { return [...prev, gifDetail] } else { return [gifDetail] } }) }}
                                data-tooltip-id="my-singleToolTip" data-tooltip-content="Add Favorite"
                            >
                                <AiOutlineStar />
                            </button>
                        }
                        <button
                            className='text-white hover:scale-[1.1] opacity-70 hover:opacity-100 transition-all'
                            data-tooltip-id="my-singleToolTip" data-tooltip-content="Download"
                        >
                            <AiOutlineDownload />
                        </button>
                        <button
                            className='text-white hover:scale-[1.1] opacity-70 hover:opacity-100 transition-all'
                            onClick={() => { setCopySuccess(true) }}
                            data-tooltip-id="my-singleToolTip" data-tooltip-content="Copied"
                        >
                            <AiOutlineLink />
                        </button>
                        {copySuccess && (
                            <CopiedModal url={gifDetail.images.original.mp4} copySuccess={copySuccess} setCopySuccess={setCopySuccess} />
                        )}
                        <Tooltip id="my-singleToolTip" style={{ backgroundColor: 'transparent', color: 'white', fontSize: '10px' }} place='bottom' />
                    </div>
                </div>
                <div className='flex items-center justify-between  border-2'>
                    <div className="relative w-full max-w-[384px] h-56 md:h-72">
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
                    <AddText image={gifDetail.images.original.webp} />
                </div>
            </div>
        </div>
    )
}

export default SingleGif