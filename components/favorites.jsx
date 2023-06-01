'use client'
import React, { useEffect, useState } from 'react'
import { useContextGif } from './context'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'
import Slider from './slider'
import favoriteGif from '../public/favoriteGif.png'
import favoriteSticker from '../public/favoriteSticker.png'

export function SingleFavorites({ gif, favoritesArray, setFavoritesArray }) {
    const [isHover, setIsHover] = useState(false);

    function takeTitle(giftitle) {
        let GIFindex = giftitle.indexOf("GIF")
        let title = giftitle.slice(0, GIFindex)
        return title
    }
    function removeFavorite(id) {
        const newFavorites = favoritesArray.filter((e) => e.id !== id);
        setFavoritesArray(newFavorites);
        localStorage.setItem('favoritesArray', JSON.stringify(newFavorites));
    }
    const handleMouseOver = () => {
        setIsHover(true);
    };

    const handleMouseOut = () => {
        setIsHover(false);
    };

    return (
        <div
            key={gif.id}
            className="relative w-full h-[180px] md:h-80 rounded-xl object-cover cursor-pointer hover:scale-[1.02] hover:z-30 transition-transform duration-300"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            {gif.images.original.webp
                ?
                (
                    <Image
                        src={`${gif.images.original.webp}`}
                        fill
                        alt={gif.title}
                        className="rounded-[10px] absolute "
                        placeholder="blur"
                        blurDataURL={`data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKCAYAAAC9vt6cAAAAGElEQVR42mNce/BgPQMFgHHUgFEDqGEAAD5CGteI0OXhAAAAAElFTkSuQmCC`}
                        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                    />
                ) : (
                    <Image
                        src={`${gif.images.original.url}`}
                        fill
                        alt={gif.title}
                        className="rounded-md absolute"
                        placeholder="blur"
                        blurDataURL={`data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKCAYAAAC9vt6cAAAAGElEQVR42mNce/BgPQMFgHHUgFEDqGEAAD5CGteI0OXhAAAAAElFTkSuQmCC`}
                        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                    />
                )}
            <AiFillStar className={`absolute text-yellow-400 text-[20px] font-bold top-4 right-5 hover:scale-[1.1] transition-all`} onClick={(event) => { event.stopPropagation(), removeFavorite(gif.id) }} />
            {isHover && (
                <>
                    <span className="absolute text-white flex items-center w-full text-[14px] font-bold bottom-4 pl-4 z-50">
                        {takeTitle(gif.title)}
                    </span>
                    <span className=" absolute shadow-gif bottom-4 w-full"></span>
                </>
            )}
        </div>
    )
}


function Favorites() {
    const { favoritesArray, setFavoritesArray } = useContextGif()
    useEffect(() => {
        setFavoritesArray(JSON.parse(localStorage.getItem('favoritesArray')))
    }, [])
    const gifFavorites = favoritesArray.map((e) => { return e }).filter((e) => { return e.type == "gif" })
    const stickerFavorites = favoritesArray.map((e) => { return e }).filter((e) => { return e.type == "sticker" })
    return (
        <div className='w-full h-full mt-12 flex flex-col  '>
            <div className='w-full gap-10  '>
                <div className='flex items-center gap-2 border-b-4 pb-2 my-4 border-gray-700 rounded-[4px]'>
                    <div className='relative w-6 md:w-8 h-6 md:h-8'>
                        <Image src={favoriteGif} fill alt='sticker' />
                    </div>
                    <h5 className='text-2xl md:text-3xl font bold text-white italic'>Favorites Gifs</h5>
                </div>
                {
                    gifFavorites.length > 0
                        ?
                        <Slider favoritesArray={gifFavorites} setFavoritesArray={setFavoritesArray} />
                        :
                        <div className='flex flex-col items-center justify-center my-16 gap-4'>
                            <h5 className='text-gray-400 text-xl md:text-3xl font-semibold  w-full text-center'>You have not favorites gifs</h5>
                            <div className='relative w-24 md:w-32 h-24 md:h-32'>
                                <Image src={favoriteGif} fill alt='sticker' />
                            </div>
                        </div>}
            </div>
            <div className='w-full '>
                <div className='flex items-center gap-2 border-b-4 pb-2 my-4 border-gray-700 rounded-[4px]'>
                    <div className='relative w-6 md:w-8 h-6 md:h-8'>
                        <Image src={favoriteSticker} fill alt='sticker' />
                    </div>
                    <h5 className='text-2xl md:text-3xl font bold text-white italic  '>Favorites Stickers</h5>
                </div>
                {
                    stickerFavorites.length > 0
                        ?
                        <Slider favoritesArray={stickerFavorites} setFavoritesArray={setFavoritesArray} />
                        :
                        <div className='flex flex-col items-center justify-center my-16 gap-4'>
                            <h5 className='text-gray-400 text-xl md:text-3xl font-semibold  w-full text-center'>You have not favorites stickers</h5>
                            <div className='relative w-24 md:w-32 h-24 md:h-32'>
                                <Image src={favoriteSticker} fill alt='sticker' />
                            </div>
                        </div>
                }
            </div>
        </div>
    );
}

export default Favorites