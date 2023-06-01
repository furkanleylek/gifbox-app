import React from 'react'
import classNames from 'classnames'
import { Inter, Roboto_Mono, Open_Sans, Mate_SC, Lora } from '@next/font/google'
import { TiTick } from 'react-icons/ti'
const lora = Lora({ subsets: ['latin'], weight: ['400'] })

const Title = () => {
    return (
        <div className='w-full h-full '>
            <div className='container m-auto hidden md:flex gap-6 text-white w-full h-full pt-10 pb-28 px-28 '>
                <div className='flex flex-col gap-6'>
                    <h1 className={classNames('text-7xl font-bold leading-loose', lora.className)}>EDIT GIFS STICKERS</h1>
                    <div className='flex items-center justify-start text-xl gap-4'>
                        <TiTick className='text-green-400 text-2xl ' />
                        <h2>Add text to gifs</h2>
                    </div>
                    <div className='flex items-center justify-start text-xl gap-4'>
                        <TiTick className='text-green-400 text-2xl' />
                        <h2>Change background </h2>
                    </div>
                    <div className='flex items-center justify-start text-xl gap-4'>
                        <TiTick className='text-green-400 text-2xl' />
                        <h2>Create your memes </h2>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Title