import React from 'react'
import Home from '@/components/home/home'
import {
  fetchGifTrends,
  fetchStickerTrends,
} from "@/services/index"
import Title from '@/components/home/title'
import Edit from '@/components/home/edit'

async function HomePage({ params }) {
  const pagePromises = [
    fetchGifTrends(),
    fetchStickerTrends(),
  ]
  const [trendsGifs, trendsStickers] = await Promise.all(pagePromises)
  return (
    <div className='w-full h-full'>
      <div className='w-full h-full bg-zinc-900 '>
        <div className='container px-4 md:px-20 lg:px-28 m-auto flex flex-col md:flex-row gap-10 md:pt-20 md:pb-10 mb-10 md:mb-0 items-center '>
          <Title />
          <Edit />
        </div>
      </div>
      <div className='w-full h-full bg-white '>
        <Home trendsGifs={trendsGifs} trendsStickers={trendsStickers} />
      </div>
    </div>
  )
}
export default HomePage


