const BASE_URL = "https://api.giphy.com"
const APIKEY = "qQLlc0Uw4J2FAjEDGziI9XGAdFVtUz8c"

async function fetchData(path, limit = "", rating = "", { query = "" } = {}) {
    try {
        const res = await fetch(
            `${BASE_URL}${path}?api_key=${APIKEY}${limit}${rating}${query}`
        );
        return res.json();
    } catch (error) {
        throw new Error(error);
    }
}

export async function fetchGifTrends() {
    try {
        const res = await fetchData("/v1/gifs/trending", "&limit=24", "&rating=g")
        return res.data
    } catch (error) {
        throw new Error("Error happened while fetching trends", error);
    }
}

export async function fetchStickerTrends() {
    try {
        const res = await fetchData("/v1/stickers/trending", "&limit=24", "&rating=g")
        return res.data
    } catch (error) {
        throw new Error("Error happened while fetching trends", error);
    }
}
// https://api.giphy.com/v1/gifs/yJkTVdGYBARxivtDB9?api_key=qQLlc0Uw4J2FAjEDGziI9XGAdFVtUz8c


export async function fetchSingleMeme(meme, memeId) {
    try {
        const res = await fetch(
            `${BASE_URL}/v1/${meme}/${memeId}?api_key=${APIKEY}`
        )
        const data = await res.json()
        return data.data
    } catch (error) {
        throw new Error("Error happened while fetching single data", error);
    }
}

export async function fetchWantedGifs(search, offSet) {
    try {
        const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${search}&limit=12&offset=${offSet}&rating=g&lang=en`)
        const data = await res.json()
        return data.data
    } catch (error) {
        throw new Error("Error happened while fetching wanted gif datas", error);
    }
}
export async function fetchWantedStickers(search, offSet) {
    try {
        const res = await fetch(`https://api.giphy.com/v1/stickers/search?api_key=${APIKEY}&q=${search}&limit=12&offset=${offSet}&rating=g&lang=en`)
        const data = await res.json()
        return data.data
    } catch (error) {
        throw new Error("Error happened while fetching wanted gif datas", error);
    }
}