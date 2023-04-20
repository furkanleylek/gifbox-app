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
        <section className={`${isOpenSide ? "w-48" : "w-24"}  hidden md:flex py-6 h-screen items-start flex-col  gap-6  bg-white `}>
            <div className="flex items-center w-full justify-between">
                <Link href="/"><FaBoxOpen className="text-6xl text-sky-500 cursor-pointer mt-4 ml-4" /></Link>
                {isOpenSide
                    ?
                    <AiFillLeftCircle className="text-sky-500 text-2xl" onClick={() => setIsOpenSide(false)} />
                    :
                    <AiFillRightCircle className="text-sky-500 text-2xl" onClick={() => setIsOpenSide(true)} />
                }
            </div>
            <div className="flex flex-col items-start h-full pl-4 w-full gap-16 pt-10 border-4 ml-2 ">
                <Link href="/" className="flex items-center gap-6 font-semibold text-xl"><IoHomeOutline className="text-2xl text-gray-500 cursor-pointer" />{isOpenSide && "Home"}</Link>
                <div onClick={() => setIsOpenSide(true)}><AiOutlineSearch className="text-2xl text-gray-500 cursor-pointer" /></div>
                <Link href="/favorites" className="flex border-2 items-center gap-6 font-semibold text-xl"><AiOutlineStar className="text-2xl text-gray-500  cursor-pointer" />{isOpenSide && "Favorites"}</Link>
                <Link href="/designs" className="flex border-2 items-center gap-6 font-semibold text-xl"><MdOutlineDesignServices className="text-2xl text-gray-500  cursor-pointer" />{isOpenSide && "Designs"}</Link>
            </div>
        </section>
    )
}

export default SideBar