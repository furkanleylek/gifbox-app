'use client'
import React, { createContext, useState, useContext } from 'react'
const Context = createContext()

function Provider({ children }) {

    const [isOpen, setIsOpen] = useState(false);
    const [favoritesArray, setFavoritesArray] = useState([])
    const [wantedGifs, setWantedGifs] = useState([])
    const [wantedStickers, setWantedStickers] = useState([])
    const [search, setSearch] = useState('')
    const [offSet, setOffSet] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    const data = {
        isOpen,
        setIsOpen,
        isLoading,
        setIsLoading,
        favoritesArray,
        setFavoritesArray,
        wantedGifs,
        setWantedGifs,
        wantedStickers,
        setWantedStickers,
        search,
        setSearch,
        offSet,
        setOffSet
    }
    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export default Provider

export const useContextGif = () => useContext(Context)