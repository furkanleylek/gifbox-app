"use client"
import React, { useRef, useState } from "react";
import Link from 'next/link'
import { AiOutlineStar, AiOutlineSearch, AiFillRightCircle, AiFillLeftCircle } from 'react-icons/ai'
import { MdOutlineDesignServices } from 'react-icons/md'
import { FaBoxOpen } from 'react-icons/fa'
import { IoHomeOutline } from 'react-icons/io5'

function SideBar() {

    const [isOpenSide, setIsOpenSide] = useState(false)

    return (

        <div className="h-screen w-72 hidden md:flex items-start flex-col gap-6 bg-gradient-to-b from-zinc-900 to-zinc-800 border-r-4 border-zinc-900 " >
            <div className="flex flex-col items-center h-full w-full gap-32 pt-10 transition-all duration-1000 ">
                <Link href="/"><FaBoxOpen className="text-6xl text-primary cursor-pointer mt-4 ml-4" /></Link>
                <div className="flex flex-col gap-10 text-2xl text-white font-bold w-full">
                    <Link href="/" className="flex items-center gap-6 hover:bg-primary hover:text-secondary transition-all duration-500 px-4 py-2 rounded ">
                        <IoHomeOutline className="text-3xl" />
                        <span>Home</span>
                    </Link>
                    <Link href="/favorites" className="flex items-center  gap-6 hover:bg-primary hover:text-secondary  transition-all duration-500 px-4 py-2 rounded ">
                        <AiOutlineStar className="text-3xl" />
                        <span>Favorites</span>
                    </Link>
                    <Link href="/designs" className="flex items-center gap-6 hover:bg-primary hover:text-secondary  transition-all duration-500 px-4 py-2 rounded ">
                        <MdOutlineDesignServices className="text-3xl" />
                        <span>Designs</span>
                    </Link>
                    {/* <div onClick={() => setIsOpenSide(true)}><AiOutlineSearch className="text-2xl text-gray-500 cursor-pointer" /></div> */}
                </div>
            </div>
        </div>
    )
}

export default SideBar