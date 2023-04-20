import React from 'react'
import Home from '@/components/home/home'
import {
  fetchGifTrends,
  fetchStickerTrends,
} from "@/services/index"


async function HomePage({ params }) {
  const pagePromises = [
    fetchGifTrends(),
    fetchStickerTrends(),
  ]
  const [trendsGifs, trendsStickers] = await Promise.all(pagePromises)
  return (
    <>
      <Home trendsGifs={trendsGifs} trendsStickers={trendsStickers} />
    </>
  )
}
export default HomePage


