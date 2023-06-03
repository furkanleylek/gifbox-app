import React from 'react'
import classNames from 'classnames'
import { Lora } from '@next/font/google'
import { TiTick } from 'react-icons/ti'
import ChooseGif from './chooseGif'

const lora = Lora({ subsets: ['latin'], weight: ['400'] })

const Title = () => {
    return (
        <section className='w-full h-full'>
            <div className='flex gap-6 text-white w-full h-full pt-10 pb-28 '>
                <div className='flex flex-col gap-12'>
                    <h1 className={classNames('text-4xl md:text-5xl lg:text-7xl font-bold leading-loose', lora.className)}>EDIT GIFS STICKERS</h1>
                    <div className='flex flex-col gap-6 text-[18px]'>
                        <div className='flex items-center justify-start  gap-4'>
                            <TiTick className='text-green-400 text-2xl ' />
                            <h2>Add text to gifs</h2>
                        </div>
                        <div className='flex items-center justify-start  gap-4'>
                            <TiTick className='text-green-400 text-2xl' />
                            <h2>Change background </h2>
                        </div>
                        <div className='flex items-center justify-start gap-4'>
                            <TiTick className='text-green-400 text-2xl' />
                            <h2>Create your memes </h2>
                        </div>
                    </div>

                    <ChooseGif />
                </div>
            </div>
        </section>
    )
}

export default Title