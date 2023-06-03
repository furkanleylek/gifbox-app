'use client'
import React from 'react'
import { useContextGif } from '../context'
import Image from 'next/image'
import { AiOutlineFileAdd, AiOutlineDownload, AiOutlineBgColors } from 'react-icons/ai'
import { BsFileEarmarkPlus } from 'react-icons/bs'
import { IoText } from 'react-icons/io5'
import { Tooltip } from 'react-tooltip';
import classNames from 'classnames'
import { Lora } from '@next/font/google'


const lora = Lora({ subsets: ['latin'], weight: ['400'] })

const Edit = () => {

  const { editGif, setEditGif } = useContextGif()
  return (
    <div className='w-full max-w-[400px]  relative'>
      <div className='h-60 relative w-full p-4 bg-sky-700 border-2 border-dotted border-gray-400 rounded-[10px]'>
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
      <div className='text-base md:text-xl flex text-zinc-900 bg-gray-200 items-center justify-evenly h-full gap-2  mt-2 rounded-full border-2'>
        <button
          className='p-2 rounded  opacity-80 hover:opacity-100 hover:scale-105 flex items-center justify-center flex-col'
          data-tooltip-id="edit-tooltip" data-tooltip-content="Add Text"
        >
          <IoText />
        </button>
        <button
          className='p-2 rounded opacity-80 hover:opacity-100 hover:scale-105 flex items-center justify-center flex-col'
          data-tooltip-id="edit-tooltip" data-tooltip-content="Color"
        >
          <AiOutlineBgColors />
        </button>
        <button
          className='p-2 rounded opacity-80 hover:opacity-100 hover:scale-105 flex items-center justify-center flex-col'
          data-tooltip-id="edit-tooltip" data-tooltip-content="Save Edit"
        >
          <AiOutlineFileAdd />
        </button>
        <button
          className='p-2 rounded opacity-80 hover:opacity-100 hover:scale-105 flex items-center justify-center flex-col'
          data-tooltip-id="edit-tooltip" data-tooltip-content="Download"
        >
          <AiOutlineDownload />
        </button>
        <Tooltip id="edit-tooltip" style={{ backgroundColor: 'white', border: '2px solid transparent', color: 'black', fontSize: '10px', padding: '4px 4px' }} place='bottom' />
      </div>
    </div>
  )
}

export default Edit