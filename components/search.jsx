'use client'
import { useState, useEffect, useRef } from "react"
import { AiFillCloseCircle } from 'react-icons/ai'
import { fetchWantedGifs, fetchWantedStickers } from "@/services";
import { useContextGif } from "./context";
import { useRouter } from 'next/navigation';
import { MdOutlineSearch } from 'react-icons/md'

export default function Search({ }) {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null)
    const router = useRouter()
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
        localStorage.setItem('search', JSON.stringify(search))

        handleData()
    }, [search])

    /* fetch new data when scroll */
    return (
        <div className="w-full lg:w-[400px] h-full flex items-center rounded-full relative gap-2 mt-0 pt-0 max-w-[800px] ">
            <input
                className={`${isFocused ? '' : 'shadow-md shadow-zinc-300'} italic text-xl font-semibold py-2 px-10 w-full rounded-full focus:outline-none focus:ring-2 transition duration-200 ease-in-out`}
                type="text"
                value={search}
                ref={inputRef}
                placeholder={`${isFocused ? "" : "Search GIF's"}`}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(event) => {
                    setSearch(event.target.value)
                }}
            />
            {search.length > 0 && (
                <button
                    className="absolute top-0 right-6 h-full flex items-center justify-center z-10 hover:scale-105"
                    onClick={() => {
                        inputRef.current.focus();
                        setSearch('')
                    }}
                >
                    <AiFillCloseCircle className="text-2xl text-gray-700" />
                </button>
            )}
            <MdOutlineSearch className="absolute top-0 left-2 text-2xl  h-full flex text-gray-500  items-center justify-center  cursor-default pointer-events-none " />

        </div>
    );
}
