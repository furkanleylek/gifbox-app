'use client'
import React from 'react'
import { useContextGif } from '../context'
import Image from 'next/image'
import { AiOutlineFileAdd, AiOutlineDownload, AiOutlineFileGif } from 'react-icons/ai'
import { BsFileEarmarkPlus } from 'react-icons/bs'
import { Tooltip } from 'react-tooltip';
import classNames from 'classnames'
import { Lora } from '@next/font/google'


const lora = Lora({ subsets: ['latin'], weight: ['400'] })

const Edit = () => {

  const { editGif, setEditGif } = useContextGif()
  return (
    <div className='w-full max-w-[400px]  relative'>
      <div className='h-60 relative w-full p-4 bg-sky-700 rounded-[10px]'>
        {
          editGif
            ?
            editGif.images.original.webp
              ?
              (
                <Image
                  src={`${editGif.images.original.webp}`}
                  fill
                  alt={editGif.title}
                  className="rounded-[10px] absolute "
                  placeholder="blur"
                  blurDataURL={`data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKCAYAAAC9vt6cAAAAGElEQVR42mNce/BgPQMFgHHUgFEDqGEAAD5CGteI0OXhAAAAAElFTkSuQmCC`}
                  sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                />
              ) : (
                <Image
                  src={`${editGif.images.original.url}`}
                  fill
                  alt={editGif.title}
                  className="rounded-md absolute "
                  placeholder="blur"
                  blurDataURL={`data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKCAYAAAC9vt6cAAAAGElEQVR42mNce/BgPQMFgHHUgFEDqGEAAD5CGteI0OXhAAAAAElFTkSuQmCC`}
                  sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                />
              )
            :
            <div className='flex text-center items-center justify-center gap-6 h-full w-full font-semibold  flex-col'>
              <BsFileEarmarkPlus className='text-4xl pointer-events-none text-white' />
              <button className={classNames('text-base text-zinc-900 uppercase font-semibold py-3 px-6 bg-white rounded flex items-center justify-center gap-2 shadow-sm shadow-white', lora.className)}>
                Select a File
              </button>
              <p className='text-white text-[12px]'>
                or drop a Image
              </p>
            </div>
        }
      </div>
      <div className='text-3xl  flex items-center justify-center gap-10 h-full py-10'>
        <button
          className='p-2 rounded text-green-300 opacity-70 hover:opacity-100 hover:scale-105 flex items-center justify-center flex-col'
        >
          <AiOutlineFileAdd />
          <span className='text-white text-[12px] font-bold'>
            Save Edit
          </span>
        </button>
        <button
          className='p-2 rounded text-rose-300 opacity-70 hover:opacity-100 hover:scale-105 flex items-center justify-center flex-col'
        >
          <AiOutlineDownload />
          <span className='text-white text-[12px] font-bold'>
            Download
          </span>
        </button>
      </div>
    </div>
  )
}

export default Edit