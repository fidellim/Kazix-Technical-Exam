import { useState } from 'react'
import { useLanguage } from '../LanguageContext'
import Image from 'next/image'
import { roboto } from '../fonts'
import chevron_down from '@/public/assets/chevron_down.svg'

const LanguageSwitcher = () => {
    const { currentLang, setCurrentLang, languages, getText } = useLanguage()
    const [isOpen, setIsOpen] = useState(false)

    const handleLanguageChange = (lang) => {
        setCurrentLang(lang)
        setIsOpen(false)
    }

    return (
        <div className="LanguageDropdown relative">
            <div
                className="p-2 justify-start items-center gap-3 flex cursor-pointer"
                onClick={() => setIsOpen((prev) => !prev)}
                onBlur={() => setIsOpen(false)}
            >
                <div className="Flags relative" tabIndex="0">
                    <Image
                        src={languages[currentLang].flag}
                        width={28}
                        height={20}
                        alt={languages[currentLang].name}
                        title={languages[currentLang].name}
                        className="w-[28px] h-[20px]"
                    />
                </div>
                <div className="Text justify-start items-center gap-1.5 flex">
                    <div
                        className={`Eng text-black text-sm font-normal leading-none uppercase ${roboto.className}`}
                    >
                        {languages[currentLang].lang_code}
                    </div>
                    <Image
                        src={chevron_down}
                        width={14}
                        height={14}
                        alt="chevron down"
                        className="ChevronArrowsIcons relative"
                    />
                </div>
            </div>
            {isOpen && (
                <div className="dropdown-content w-[120px] z-50 h-[auto] p-4 bg-white shadow flex-col justify-start items-start gap-4 inline-flex absolute top-[55px]">
                    {Object.keys(languages).map((lang) => (
                        <div
                            className="Lang w-[88px] justify-start items-center gap-3 cursor-pointer flex relative"
                            onClick={() => handleLanguageChange(lang)}
                            key={lang}
                        >
                            <div className="Flags flex-col justify-start items-start inline-flex">
                                <Image
                                    src={languages[lang].flag}
                                    width={28}
                                    height={20}
                                    alt={languages[lang].name}
                                    title={languages[lang].name}
                                    className="w-[28px] h-[20px]"
                                />
                            </div>
                            <div className="Text w-12 h-4 left-[40px] top-[2px] justify-start items-center gap-1.5 inline-flex">
                                <div
                                    className={`Eng text-black text-sm font-normal leading-none uppercase ${roboto.className}`}
                                >
                                    {languages[lang].lang_code}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default LanguageSwitcher
