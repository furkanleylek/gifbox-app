'use client'
import { useState, useEffect, useRef } from "react"
import { AiFillCloseCircle } from 'react-icons/ai'
import { fetchWantedGifs, fetchWantedStickers } from "@/services";
import { useContextGif } from "./context";

export default function Search({ }) {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null)
    const { setWantedGifs, setWantedStickers, search, setSearch, setIsLoading, offSet } = useContextGif()

    useEffect(() => {
        async function handleData() {
            setIsLoading(true)
            try {
                const pagePromises = [
                    fetchWantedGifs(search, offSet),
                    fetchWantedStickers(search, offSet)
                ]
                const [gifsData, stickersData] = await Promise.all(pagePromises)
                setWantedGifs(gifsData)
                setWantedStickers(stickersData)
                setIsLoading(false)
            } catch (error) {
                console.error(error);
            }
        }
        handleData()
    }, [search])

    /* fetch new data when scroll */

    return (
        <div className="relative gap-2 mt-12 w-full md:hidden">
            <input
                className={`${isFocused ? 'bg-white' : 'bg-sky-100 text-gray-700'} pl-4 italic text-gray-900 text-xl font-semibold py-2 px-10 w-full m-auto h-12 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-200 transition duration-200 ease-in-out`}
                type="text"
                value={search}
                ref={inputRef}
                placeholder={`${isFocused ? "" : "🔍   Search all the GIFs and Stickers"}`}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(event) => setSearch(event.target.value)}
            />
            {search.length > 0 && (
                <button
                    className="absolute top-0 right-6 h-full flex items-center justify-center z-30 hover:scale-105"
                    onClick={() => {
                        inputRef.current.focus();
                        setSearch('')
                    }}
                >
                    <AiFillCloseCircle className="text-2xl text-gray-700" />
                </button>
            )}
        </div>
    );
}
