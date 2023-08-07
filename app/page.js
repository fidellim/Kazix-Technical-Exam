'use client'

import Link from 'next/link'
import { useLanguage } from './LanguageContext'
import Hero from './components/Hero'
import PromoItem from './components/PromoItem'
import GameCard from './components/GameCard'
import MatchCard from './components/MatchCard'
import BetSlipCard from './components/BetSlipCard'

export default function Home() {
    const { getText } = useLanguage()

    return (
        <main className="pt-[30px] px-4 bg-white">
            <Hero
                welcomeBonus={getText('welcome_bonus')}
                receiveBonus={getText('receive_bonus')}
                register={getText('register')}
                bg_banner="bg-welcome_banner"
                btn_link="/register"
            />

            <div className="mx-[auto] mt-[18px] mb-[26px] max-w-[1024px] justify-start items-start gap-[18px] flex flex-col md:flex-row">
                <PromoItem
                    headingOne={getText('bet_sports.heading_one')}
                    headingTwo={getText('bet_sports.heading_two')}
                    buttonText={getText('bet_sports.button_text')}
                    bg_banner="bg-bet_sports_banner"
                    btn_link="/matches"
                />
                <PromoItem
                    headingOne={getText('play_casino.heading_one')}
                    headingTwo={getText('play_casino.heading_two')}
                    buttonText={getText('play_casino.button_text')}
                    bg_banner="bg-play_casino_banner"
                    btn_link="/games"
                />
            </div>

            <GameCard />
            <MatchCard />

            <BetSlipCard />
        </main>
    )
}
