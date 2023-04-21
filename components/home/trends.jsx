'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import ClientOnly from '../clientOnly';
import { AiOutlineStar, AiFillStar, AiOutlineLink } from 'react-icons/ai'
import { useContextGif } from '../context';
import CopiedModal from '../modals/copiedModal';
import GifSkelaton from '../skelaton';

function takeTitle(giftitle) {
  let GIFindex = giftitle.indexOf("GIF")
  let title = giftitle.slice(0, GIFindex)
  return title
}



function SingleElement({ gif, index, favoritesArray, setFavoritesArray, setIsLoading }) {

  const [isHover, setIsHover] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false)
  const [isFavorite, setIsFavorite] = useState(favoritesArray?.map((e) => { return e.id }).includes(gif.id) ? true : false)
  const router = useRouter()
  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(gif.images.original.mp4);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 1000);
  }
  useEffect(() => {
    localStorage.setItem('favoritesArray', JSON.stringify(favoritesArray))
  }, [favoritesArray])
  return (
    <div
      key={gif.id}
      className={`relative w-full flex flex-1 ${index % 2 == 0 && index % 3 != 0 ? 'h-80 lg:h-[420px]' : 'h-[160px] lg:h-[210px]'} object-cover cursor-pointer hover:scale-[1.02] hover:z-30 transition-transform duration-300`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={
        () => {
          router.push(`/${gif.id}`)
          setIsLoading(true)
        }}
      style={{ gridRow: `span ${index % 2 == 0 && index % 3 != 0 ? "2" : "1"}` }}
    >
      {gif.images.original.webp
        ?
        (
          <Image
            src={`${gif.images.original.webp}`}
            fill
            alt={gif.title}
            className="rounded-[10px] absolute"
            placeholder="blur"
            blurDataURL={`data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKCAYAAAC9vt6cAAAAGElEQVR42mNce/BgPQMFgHHUgFEDqGEAAD5CGteI0OXhAAAAAElFTkSuQmCC`}
            sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
            unoptimized
          />
        ) : (
          <Image
            src={`${gif.images.original.url}`}
            fill
            alt={gif.title}
            className="rounded-md absolute"
            placeholder="blur"
            blurDataURL={`${gif.images.original.url}`}
            sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
          />
        )}
      {isHover && (
        <>

          {isFavorite
            ?
            <AiFillStar className={`absolute text-yellow-400 z-50 text-[20px] top-4 right-5 hover:scale-[1.1] transition-all`} onClick={(event) => { event.stopPropagation(), setIsFavorite(false), setFavoritesArray((favorite) => favorite.filter((e) => e.id !== gif.id)) }} />
            :
            <AiOutlineStar className={`absolute text-white z-50 text-[20px] top-4 right-5 hover:scale-[1.1] transition-all`} onClick={(event) => { event.stopPropagation(), setIsFavorite(true), setFavoritesArray((prev) => { if (prev) { return [...prev, gif] } else { return [gif] } }) }} />
          }
          <AiOutlineLink className='absolute text-white z-50 text-[20px] text-center top-4 right-14 hover:scale-[1.1] transition-all' onClick={(event) => { event.stopPropagation(), handleCopyClick() }} />
          <span className="absolute text-white flex items-center w-full text-[14px] font-bold bottom-4 pl-4 z-50 ">
            {takeTitle(gif.title)}
          </span>
          <span className=" absolute shadow-gif bottom-4 w-full"></span>
          <span className=" absolute shadow-icon top-4 right-0 w-24"></span>
        </>
      )}
      {copySuccess && (
        <CopiedModal />
      )}
    </div>

  );
}

function Trends({ allTrends }) {

  const { favoritesArray, setFavoritesArray, isLoading, setIsLoading } = useContextGif()

  useEffect(() => {
    setFavoritesArray(JSON.parse(localStorage.getItem('favoritesArray')))
  }, [])

  return (
    <ClientOnly>
      {isLoading
        ?
        <GifSkelaton count={12} />
        :
        <div
          className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-1 w-full h-full "
        >
          {
            allTrends.map((gif, index) => (
              <SingleElement key={gif.id} index={index + 1} gif={gif} favoritesArray={favoritesArray} setFavoritesArray={setFavoritesArray} setIsLoading={setIsLoading} />
            ))
          }
        </div>
      }
    </ClientOnly>
  );
}

export default Trends