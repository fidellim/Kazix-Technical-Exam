'use client'

import React from 'react'
import Image from 'next/image'
import user from '@/public/assets/user.svg'
import LanguageSwitcher from './LanguageSwitcher'
import Link from 'next/link'
import { useLanguage } from '@/app/LanguageContext'

const Header = () => {
    const { getText } = useLanguage()

    return (
        <header className="header bg-yellow-400 px-4">
            <div className="max-w-[1024px] mx-[auto] py-3 justify-end items-center flex flex-wrap">
                <div className="justify-end items-center gap-3 flex flex-wrap">
                    <LanguageSwitcher />
                    <div className="p-3 bg-white rounded-xl justify-center items-center flex">
                        <Link href="/login">
                            <div className="uppercase text-teal-900 text-base font-normal leading-7 cursor-pointer">
                                {getText('login')}
                            </div>
                        </Link>
                    </div>
                    <div className="p-3 bg-cyan-950 rounded-xl justify-center items-center gap-2 flex cursor-pointer">
                        <Image
                            src={user}
                            width={24}
                            height={24}
                            alt="User Icon"
                            title="User Icon"
                            className="relative w-[24px] h-[24px]"
                        />
                        <Link href="/register">
                            <div className="uppercase text-white text-base font-normal leading-7">
                                {getText('register')}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
