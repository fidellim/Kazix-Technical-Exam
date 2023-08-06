'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '../LanguageContext'
import Link from 'next/link'
import Image from 'next/image'

const Games = () => {
    const { getText } = useLanguage()
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        function fetchGames() {
            setLoading(true)
            const apiURL = process.env.NEXT_PUBLIC_API_URL
            return fetch(`${apiURL}/games`)
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
    }, [])

    return (
        <div className="bg-white">
            <div className="max-w-[1024px] py-8 mx-[auto] flex flex-wrap gap-4">
                {loading ? (
                    <div className="p-[10px] text-black">
                        <h3>Loading Games...</h3>
                    </div>
                ) : (
                    <>
                        {games &&
                            games.map((game) => (
                                <div
                                    className="group w-[181px] h-[250px] relative rounded-[18px] overflow-hidden "
                                    key={game.id}
                                >
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
                            ))}
                    </>
                )}
            </div>
        </div>
    )
}

export default Games
