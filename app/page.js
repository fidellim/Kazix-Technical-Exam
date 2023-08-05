'use client'

import Link from 'next/link'
import { useLanguage } from './LanguageContext'
import { instrument_sans } from './fonts'

export default function Home() {
    const { getText } = useLanguage()

    return (
        <main className="pt-[30px] px-4 bg-white">
            <div className="HeaderImages max-w-[1024px] mx-[auto] relative rounded-3xl bg-welcome_banner bg-no-repeat bg-cover">
                <div className="flex-col justify-start py-[40px] pl-[55px] items-start gap-2 inline-flex">
                    <div className="relative mr-4">
                        <span className="text-yellow-400 text-[32px] sm:text-[68px] font-normal leading-[32px] sm:leading-[69px]">
                            €200
                            <br />
                        </span>
                        <span className="text-white uppercase text-[32px] sm:text-[68px] font-normal leading-[32px] sm:leading-[69px]">
                            {getText('welcome_bonus')}
                        </span>
                    </div>
                    <div
                        className={`text-white text-base font-normal leading-[34px] ${instrument_sans.className} mr-4`}
                    >
                        {getText('receive_bonus')}
                    </div>
                    <div className="ButtonsV2 p-3 bg-yellow-400 rounded-xl justify-center items-center inline-flex mr-4">
                        <Link href="/register">
                            <div className="uppercase text-teal-900 text-base font-normal leading-7">
                                {getText('register')}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
