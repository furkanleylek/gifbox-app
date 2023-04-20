'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useContextGif } from '@/components/context';
import GifSkelaton from '@/components/skelaton';
import { fetchSingleMeme } from '@/services';

function takeTitle(giftitle) {
    let GIFindex = giftitle.indexOf("GIF")
    let title = giftitle.slice(0, GIFindex)
    return title
}

function SingleGif({ id }) {

    const { isLoading, setIsLoading } = useContextGif()
    const [gifDetail, setGifDetail] = useState()
    const [title, setTitle] = useState('')


    useEffect(() => {
        async function handleData() {
            const gifDetailData = await fetchSingleMeme("gifs", id);
            setGifDetail(gifDetailData)
            setTitle(takeTitle(gifDetailData.title))
            setIsLoading(false)
        }
        handleData()
    }, [])



    console.log("isLoading: ", isLoading)
    return (
        <>
            {isLoading
                ?
                <GifSkelaton count={1} />
                :
                <div className="">
                    <h1>{title}</h1>
                    <Image
                        width={200}
                        height={200}
                        key={gifDetail?.id}
                        alt={title}
                        src={gifDetail?.images.original.webp}
                    />
                </div>
            }
        </>
    )
}

export default SingleGif