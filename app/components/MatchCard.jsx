'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '../LanguageContext'
import Link from 'next/link'
import Image from 'next/image'
import soccer from '@/public/assets/soccer.svg'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css'

import SwiperButtons from './SwiperButtons'

const MatchCard = () => {
    const { getText } = useLanguage()
    const swiper = useSwiper()
    const [matches, setMatches] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const pageSize = 10 // Number of games per page

    useEffect(() => {
        // function fetchMatches() {
        //     return fetch('http://localhost:3000/api/matches')
        //         .then((response) => response.json())
        //         .then((games) => setGames(games))
        //         .catch((error) => {
        //             console.error('Error fetching matches:', error)
        //             return []
        //         })
        // }
        function fetchMatches() {
            setLoading(true)
            return fetch(
                `http://localhost:3000/api/matches?page=${currentPage}&pageSize=${pageSize}`
            )
                .then((response) => response.json())
                .then((matches) => {
                    setMatches(matches)
                    setLoading(false)
                })
                .catch((error) => {
                    console.error('Error fetching matches:', error)
                    return []
                })
        }

        fetchMatches()
    }, [currentPage])

    return (
        <div className="max-w-[1024px] mx-[auto] mb-[16px]">
            <Swiper
                spaceBetween={2}
                slidesPerView="auto"
                loop={true}
                grid={{
                    rows: 5,
                }}
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
                                {getText('today_matches')}
                            </div>
                        </div>
                    </div>
                    <div className="justify-start items-center gap-[18px] flex">
                        <SwiperButtons />
                        <div className="px-2.5 py-1 bg-white rounded-lg justify-start items-start gap-2.5 flex">
                            <Link href="/matches">
                                <div className="capitalize text-black text-base font-normal leading-7">
                                    {getText('view_all')}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {loading ? (
                    <div className="p-[10px] text-black">
                        <h3>Loading Matches...</h3>
                    </div>
                ) : (
                    <>
                        {matches &&
                            matches.map((match, index) => (
                                <SwiperSlide key={`${index} ${match.league}`}>
                                    <div className="max-w-[1024px] mt-[10px] p-6 bg-neutral-100 rounded-3xl justify-between items-center gap-4 flex flex-col lg:flex-row">
                                        <div className="flex-col lg:flex-row justify-center items-center gap-2 inline-flex flex-wrap">
                                            <div className="justify-center lg:justify-start items-center lg:items-start gap-3 inline-flex">
                                                <div className="justify-center lg:justify-start items-center lg:items-start gap-2 flex">
                                                    <Image
                                                        src={soccer}
                                                        width={16}
                                                        height={16}
                                                        alt="soccer ball"
                                                        title="soccer ball"
                                                        className="relative w-[16px] h-[16px]"
                                                    />
                                                    <div className="w-auto lg:w-[125px] max-w-[125px] text-black text-[13px] font-normal uppercase">
                                                        {match.league}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grow shrink basis-0 justify-center lg:justify-between items-center gap-3 inline-flex flex-wrap">
                                            <div className="justify-center lg:justify-start items-center lg:items-start gap-4 flex w-[125px] max-w-[125px]">
                                                <div className="justify-start items-center gap-2 flex">
                                                    <div className="text-black text-sm font-normal leading-tight">
                                                        {match.teams[0]}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-6 h-6 bg-yellow-400 rounded justify-center items-center gap-2.5 flex">
                                                <div className="text-black text-[13px] font-normal">
                                                    vs
                                                </div>
                                            </div>
                                            <div className="justify-center lg:justify-start items-center lg:items-start gap-9 flex w-[125px] max-w-[125px]">
                                                <div className="justify-start items-center gap-4 flex">
                                                    <div className="justify-start items-center gap-2 flex">
                                                        <div className="text-black text-sm font-normal leading-tight">
                                                            {match.teams[1]}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="justify-center items-start gap-2 inline-flex flex-wrap">
                                            <div className="w-[86px] h-[60px] px-4 py-3 bg-yellow-400 rounded-[18px] flex-col justify-between items-center inline-flex">
                                                <div className="text-black text-xs font-bold leading-none">
                                                    1
                                                </div>
                                                <div className="text-black text-[13px] font-bold leading-[18px]">
                                                    {match.odds.home_team}
                                                </div>
                                            </div>
                                            <div className="w-[86px] h-[60px] px-4 py-3 bg-black rounded-[18px] border border-black flex-col justify-between items-center inline-flex">
                                                <div className="text-slate-300 text-xs font-bold leading-none">
                                                    draw
                                                </div>
                                                <div className="text-slate-50 text-[13px] font-bold leading-[18px]">
                                                    {match.odds.draw}
                                                </div>
                                            </div>
                                            <div className="w-[86px] h-[60px] px-4 py-3 bg-black rounded-[18px] border border-black flex-col justify-between items-center inline-flex">
                                                <div className="text-slate-300 text-xs font-bold leading-none">
                                                    2
                                                </div>
                                                <div className="text-slate-50 text-[13px] font-bold leading-[18px]">
                                                    {match.odds.away_team}
                                                </div>
                                            </div>
                                            <div className="w-[86px] h-[60px] px-4 py-3 bg-black rounded-[18px] border border-black flex-col justify-between items-center inline-flex">
                                                <div className="text-slate-300 text-xs font-bold leading-none">
                                                    +
                                                </div>
                                                <div className="text-yellow-400 text-[13px] font-bold leading-[18px]">
                                                    72
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

export default MatchCard
