'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '../LanguageContext'
import Link from 'next/link'
import Image from 'next/image'
import chevron_left from '@/public/assets/chevron_left.svg'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css'
import SwiperButtons from './SwiperButtons'

const GameCard = () => {
    const { getText } = useLanguage()
    const swiper = useSwiper()
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 10 // Number of games per page

    useEffect(() => {
        // function fetchGames() {
        //     return fetch('http://localhost:3000/api/games')
        //         .then((response) => response.json())
        //         .then((games) => setGames(games))
        //         .catch((error) => {
        //             console.error('Error fetching games:', error)
        //             return []
        //         })
        // }
        function fetchGames() {
            setLoading(true)
            return fetch(
                `http://localhost:3000/api/games?page=${currentPage}&pageSize=${pageSize}`
            )
                .then((response) => response.json())
                .then((games) => {
                    setGames(games)
                    setLoading(false)
                })
                .catch((error) => {
                    console.error('Error fetching games:', error)
                    return []
                })
        }

        fetchGames()
    }, [currentPage])

    return (
        <div className="max-w-[1024px] mx-[auto] mb-[16px]">
            <Swiper
                spaceBetween={16}
                slidesPerView="auto"
                loop={true}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                className="mt-[10px]"
            >
                <div
                    slot="container-start"
                    className=" px-4 py-3 bg-black rounded-tl-[18px] rounded-tr-[18px] justify-between items-center gap-3 flex flex-wrap"
                >
                    <div className="justify-start items-center gap-2 flex">
                        <div className="w-3 h-3 relative">
                            <div className="w-3 h-3 left-0 top-0 absolute bg-yellow-400 rounded-full shadow border border-yellow-400" />
                        </div>
                        <div className="justify-start items-center gap-3 flex">
                            <div className="text-white text-xl font-normal leading-7 uppercase">
                                {getText('popular_slots')}
                            </div>
                        </div>
                    </div>
                    <div className="justify-start items-center gap-[18px] flex">
                        <SwiperButtons />
                        <div className="px-2.5 py-1 bg-white rounded-lg justify-start items-start gap-2.5 flex">
                            <Link href="/games">
                                <div className="capitalize text-black text-base font-normal leading-7">
                                    {getText('view_all')}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {loading ? (
                    <div className="p-[10px] text-black">
                        <h3>Loading Games...</h3>
                    </div>
                ) : (
                    <>
                        {games &&
                            games.map((game) => (
                                <SwiperSlide
                                    key={game.id}
                                    className="max-w-[181px]"
                                >
                                    <div className="group h-[250px] mt-[10px] relative rounded-[18px] overflow-hidden">
                                        <div className="hidden group-hover:block absolute inset-0 bg-gradient-to-t from-black to-slate-800 opacity-60 z-10" />
                                        {/* <img
                                            className="w-[181px] h-[250px] left-0 top-0 absolute bg-opacity-25 bg-gradient-to-t from-black to-slate-800"
                                            src={`${game.bg_img_url}`}
                                        /> */}
                                        <Image
                                            src={game.bg_img_url}
                                            width={181}
                                            height={250}
                                            alt={game.title}
                                            title={game.title}
                                            className="w-[181px] h-[250px] left-0 top-0 absolute bg-opacity-25 bg-gradient-to-t from-black to-slate-800"
                                        />

                                        <div className="group-hover:hidden p-[16px] left-0 right-0 bottom-0 absolute bg-opacity-25 bg-gradient-to-t from-black from-50% to-[98%] to-transparent flex-col justify-start items-start gap-6 flex z-20">
                                            <div className="flex-col justify-start items-start gap-0.5 flex">
                                                <div className="text-white text-lg font-normal">
                                                    {game.title}
                                                </div>
                                                <div className="text-white text-[10px] font-normal">
                                                    {game.provider}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 hidden group-hover:flex h-full p-[16px] flex-col justify-between z-10">
                                            <div className="flex-col justify-start items-start gap-0.5 flex">
                                                <div className="text-yellow-400 text-lg font-normal">
                                                    {game.title}
                                                </div>
                                                <div className="text-white text-[10px] font-normal">
                                                    {game.provider}
                                                </div>
                                            </div>
                                            <div className="flex-col justify-start items-start gap-2 flex">
                                                <div className="px-2.5 py-1 bg-orange-500 rounded-lg justify-start items-start gap-2.5 inline-flex">
                                                    <Link href="/login">
                                                        <div className="text-white text-base font-normal leading-7">
                                                            {getText(
                                                                'game_card.login'
                                                            )}
                                                        </div>
                                                    </Link>
                                                </div>

                                                <div className="px-2.5 py-1 bg-yellow-400 rounded-lg justify-start items-start gap-2.5 inline-flex">
                                                    <Link href={game.play_url}>
                                                        <div className="text-black text-base font-normal leading-7">
                                                            {getText(
                                                                'game_card.play_btn_text'
                                                            )}
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                    </>
                )}
            </Swiper>
        </div>
    )
}

export default GameCard
