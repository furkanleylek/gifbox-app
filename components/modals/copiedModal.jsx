'use client'
import React, { useEffect } from 'react'
import { useContextGif } from '../context';

const handleCopyClick = (setCopySuccess, url) => {
    navigator.clipboard.writeText(url);
    setTimeout(() => {
        setCopySuccess(false);
    }, 1000);
}

function CopiedModal({ copySuccess, setCopySuccess, url }) {

    useEffect(() => {
        handleCopyClick(setCopySuccess, url)
    }, [copySuccess])
    return (
        <div className='text-[12px] px-2 py-[9px] text-center text-white w-full z-[51] bg-green-500 font-bold absolute top-0'>Link copied to clipboard ! </div>
    )
}

export default CopiedModal