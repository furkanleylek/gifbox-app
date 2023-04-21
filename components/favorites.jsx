'use client'
import React, { useEffect, useState } from 'react'
import { useContextGif } from './context'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'

function SingleFavorites({ gif, favoritesArray, setFavoritesArray }) {
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
            className="relative w-full h-60 md:h-80 rounded-xl object-cover cursor-pointer hover:scale-[1.02] hover:z-30 transition-transform duration-300"
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
                        blurDataURL={`${gif.images.original.webp}`}
                        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                    />
                ) : (
                    <Image
                        src={`${gif.images.original.url}`}
                        fill
                        alt={gif.title}
                        className="rounded-md absolute"
                        placeholder="blur"
                        blurDataURL={`${gif.images.original.webp}`}
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

    return (
        <div className='w-full flex flex-col gap-6 mt-14'>
            <h4 className='text-3xl font bold italic'>Favorites Gifs</h4>
            {favoritesArray?.length > 0
                ?
                <div
                    className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-1 w-full h-full "
                >
                    {favoritesArray.map((gif) => (
                        <SingleFavorites key={gif.id} gif={gif} favoritesArray={favoritesArray} setFavoritesArray={setFavoritesArray} />
                    ))}
                </div>
                :
                <div>
                    <p>You have not favorites</p>
                </div>
            }
        </div>

    );
}

export default Favorites