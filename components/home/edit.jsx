'use client'
import React from 'react'
import { useContextGif } from '../context'
import Image from 'next/image'
import { AiOutlineFileAdd, AiOutlineDownload } from 'react-icons/ai'
import { Tooltip } from 'react-tooltip';

const Edit = () => {

  const { editGif, setEditGif } = useContextGif()
  return (
    <div className='w-full max-w-[400px]  relative'>
      <div className='h-60 relative w-full p-4 bg-white rounded-[10px]'>
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
            <p className='flex text-center items-center justify-center h-full w-full  font-semibold'>
              Drop a Image<br />or<br /> Choose a File
            </p>
        }
      </div>
      <div className='text-3xl  flex items-center justify-center gap-10 h-full py-10'>
        <button
          className='p-2 rounded text-green-300 opacity-70 hover:opacity-100 hover:scale-105'
          data-tooltip-id="edit-tooltip" data-tooltip-content="Save Edit"
        >
          <AiOutlineFileAdd />
        </button>
        <button
          className='p-2 rounded text-rose-300 opacity-70 hover:opacity-100 hover:scale-105'
          data-tooltip-id="edit-tooltip" data-tooltip-content="Download"
        >
          <AiOutlineDownload />
        </button>
        <Tooltip id="edit-tooltip" style={{ backgroundColor: 'transparent', color: 'white', fontSize: '10px' }} place='bottom' />
      </div>
    </div>
  )
}

export default Edit