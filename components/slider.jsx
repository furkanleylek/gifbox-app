'use client'
import { useState, useEffect } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { SingleFavorites } from "./favorites";
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
SwiperCore.use([Navigation]);

const Slider = ({ favoritesArray, setFavoritesArray }) => {
    const [swiper, setSwiper] = useState(null);
    const [isBeginning, setIsBeginning] = useState(false)
    const [isEnd, setIsEnd] = useState(false)
    const handlePrev = () => {
        if (swiper) {
            swiper.slidePrev();
            swiper.on('reachBeginning', () => setIsBeginning(true));
            swiper.on('fromEdge', () => {
                setIsBeginning(false);
                setIsEnd(false);
            });
        }
    };

    const handleNext = () => {
        if (swiper) {
            swiper.slideNext();
            swiper.on('reachEnd', () => setIsEnd(true));
            swiper.on('fromEdge', () => {
                setIsBeginning(false);
                setIsEnd(false);
            });
        }
    };

    useEffect(() => {
        if (swiper) {
            swiper.on('reachBeginning', () => setIsBeginning(true));
            swiper.on('reachEnd', () => setIsEnd(true));
            swiper.on('fromEdge', () => {
                setIsBeginning(false);
                setIsEnd(false);
            });
        }
    }, [swiper]);

    return (
        <div className="relative">
            <Swiper
                spaceBetween={16}
                slidesPerView={2}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                }}
                onSwiper={setSwiper}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    }
                }}
            >
                {favoritesArray.map((gif, index) => (
                    <SwiperSlide key={index}>
                        <SingleFavorites
                            key={gif.id}
                            gif={gif}
                            favoritesArray={favoritesArray}
                            setFavoritesArray={setFavoritesArray}
                        />
                    </SwiperSlide>
                ))}
                <div className={` mt-4 w-full text-center`}>
                    {favoritesArray.map((gif, index) => (
                        <span
                            key={index}
                            className={`inline-block mx-1 mb-1 w-3 h-3 rounded-full ${swiper && swiper.realIndex === index ? "bg-sky-500" : "bg-gray-500"
                                }`}
                            onClick={() => {
                                if (swiper) {
                                    swiper.slideTo(index);
                                }
                            }}
                        ></span>
                    ))}
                </div>
                <div className={`absolute top-0 bottom-0 left-0 ${isBeginning ? 'hidden' : 'flex items-center'}`}>
                    <button
                        className="text-base md:text-3xl text-white opacity-50 bg-sky-500 hover:opacity-100 p-2 rounded-full z-50"
                        onClick={handlePrev}
                    >
                        <AiOutlineLeft />
                    </button>
                </div>
                <div className={`absolute top-0 ${favoritesArray} bottom-0 right-0 ${isEnd ? 'hidden' : 'flex items-center'}`}>
                    <button
                        className="text-base z-50 md:text-3xl text-white opacity-50 bg-sky-500 hover:opacity-100 p-2 rounded-full "
                        onClick={handleNext}
                    >
                        <AiOutlineRight />
                    </button>
                </div>
            </Swiper>
        </div>
    );
};

export default Slider;