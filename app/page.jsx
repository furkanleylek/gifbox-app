import React from 'react'
import Home from '@/components/home/home'
import {
  fetchGifTrends,
  fetchStickerTrends,
} from "@/services/index"
import Title from '@/components/home/title'

async function HomePage({ params }) {
  const pagePromises = [
    fetchGifTrends(),
    fetchStickerTrends(),
  ]
  const [trendsGifs, trendsStickers] = await Promise.all(pagePromises)
  return (
    <div className='w-full h-full'>
      <div className='w-full h-full bg-zinc-900 '>
        <Title />
      </div>
      <div className='w-full h-full bg-white '>
        <Home trendsGifs={trendsGifs} trendsStickers={trendsStickers} />
      </div>
    </div>
  )
}
export default HomePage


