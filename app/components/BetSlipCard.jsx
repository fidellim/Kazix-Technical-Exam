import warning_sign from '@/public/assets/warning_sign.svg'
import edit_icon from '@/public/assets/edit.svg'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/app/LanguageContext'

const BetSlipCard = () => {
    const [isBetSlipVisible, setBetSlipVisible] = useState(false)
    const { getText } = useLanguage()

    const toggleBetSlip = () => {
        setBetSlipVisible(!isBetSlipVisible)
    }

    return (
        <div
            id="betSlipToggle"
            className={`${
                isBetSlipVisible && 'show'
            } bet-slip-container w-full sm:max-w-[304px] h-[438px] bg-black rounded-tl-[18px] rounded-tr-[18px] flex-col justify-start items-end gap-1 flex z-50 fixed left-0 sm:left-[unset] bottom-0 right-0 `}
        >
            <div
                className="cursor-pointer self-stretch rounded-tl-[18px] rounded-tr-[18px] justify-start items-start inline-flex"
                onClick={toggleBetSlip}
            >
                <div className="grow shrink basis-0 self-stretch px-4 py-3 bg-black rounded-tl-[18px] rounded-tr-[18px] justify-start items-start gap-3 flex">
                    <div className="justify-start items-center gap-2 flex">
                        <div className="w-3 h-3 relative">
                            <div className="w-3 h-3 left-0 top-0 absolute bg-yellow-400 rounded-full shadow border border-yellow-400" />
                        </div>
                        <div className="justify-start items-center gap-3 flex">
                            <div className="text-white text-xl font-normal uppercase leading-7">
                                {getText('bet_slip.title')} (1)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full sm:max-w-[304px] px-3 py-2.5 bg-white bg-opacity-20 rounded justify-between items-center inline-flex">
                <div className="capitalize text-white text-opacity-90 text-xs font-normal">
                    {getText('bet_slip.single')}
                </div>
                <div className="cursor-pointer capitalize text-white text-opacity-50 text-xs font-normal underline">
                    {getText('bet_slip.remove_text')}
                </div>
            </div>
            <div className="w-full sm:max-w-[304px] h-[182px] mx-auto p-3 bg-white bg-opacity-10 rounded flex-col justify-center items-center gap-3.5 flex">
                <div className="w-full flex-col justify-start items-start gap-1 flex">
                    <div className="w-full justify-between items-start gap-4 flex">
                        <div className="text-white text-opacity-70 text-[11px] font-normal leading-none">
                            Team Name 1 <br />
                            Team Name 2
                        </div>
                        <div className="w-3.5 h-3.5 relative" />
                    </div>
                    <div className="text-white text-opacity-40 text-[11px] font-normal leading-none">
                        19.07.2023, 11:00
                    </div>
                    <div className="capitalize text-white text-opacity-60 text-xs font-normal leading-[14px]">
                        {getText('bet_slip.match_result')}
                    </div>
                    <div className="w-full justify-between items-start gap-1 inline-flex">
                        <div className="text-white text-opacity-95 text-xs font-normal">
                            Team Name 1
                        </div>
                        <div className="text-yellow-400 text-xs font-normal leading-[14px]">
                            2.27
                        </div>
                    </div>
                </div>
                <input
                    type="text"
                    name={getText('bet_slip.input_placeholder')}
                    id={getText('bet_slip.input_placeholder')}
                    className="text-white text-opacity-80 text-sm font-normal w-full px-3 py-2.5 bg-white bg-opacity-10 rounded border border-white border-opacity-20 justify-start items-start inline-flex"
                    placeholder={getText('bet_slip.input_placeholder')}
                />
                <div className="w-full justify-between items-start gap-1 inline-flex">
                    <div className="text-white text-opacity-95 text-xs font-normal">
                        {getText('bet_slip.possible_win')}:
                    </div>
                    <div className="text-yellow-400 text-xs font-normal leading-[14px]">
                        $0{' '}
                    </div>
                </div>
            </div>
            <div className="w-full sm:max-w-[304px] px-2.5 py-1.5 bg-yellow-700 bg-opacity-20 rounded justify-start items-center gap-[5px] inline-flex">
                <Image
                    src={warning_sign}
                    width={24}
                    height={24}
                    alt="Warning Icon"
                    title="Warning Icon"
                    className="relative w-[24px] h-[24px]"
                />
                <div className="text-white text-opacity-90 text-[11px] font-normal leading-none">
                    {getText('bet_slip.possible_win')}
                </div>
                <Link href="/login" className="hover:underline">
                    <div className="text-white text-opacity-90 text-[11px] font-normal leading-none hover:underline">
                        {getText('bet_slip.sign_in')}
                    </div>
                </Link>
                <div className="text-white text-opacity-90 text-[11px] font-normal leading-none">
                    or
                </div>
                <Link href="/register" className="hover:underline">
                    <div className="text-white text-opacity-90 text-[11px] font-normal leading-none hover:underline">
                        {getText('bet_slip.register')}
                    </div>
                </Link>
            </div>
            <div className="w-full h-14 py-2.5 bg-white bg-opacity-5 rounded flex-col justify-center items-center gap-2.5 flex">
                <div className="w-full px-[10px] justify-start items-start gap-0.5 flex">
                    <div className="h-9 bg-white bg-opacity-10 rounded justify-center items-center flex flex-[3_3_0%] cursor-pointer">
                        <div className="text-center text-white text-opacity-80 text-sm font-normal leading-9 ">
                            5
                        </div>
                    </div>
                    <div className="h-9 bg-white bg-opacity-10 rounded justify-center items-center flex flex-[3_3_0%] cursor-pointer">
                        <div className="text-center text-white text-opacity-80 text-sm font-normal leading-9 ">
                            10
                        </div>
                    </div>
                    <div className="h-9 bg-white bg-opacity-10 rounded justify-center items-center flex flex-[3_3_0%] cursor-pointer">
                        <div className="text-center text-white text-opacity-80 text-sm font-normal leading-9 ">
                            50
                        </div>
                    </div>
                    <div className="px-[9px] py-1.5 bg-white bg-opacity-10 rounded justify-start items-start flex flex-1 cursor-pointer">
                        <Image
                            src={edit_icon}
                            width={24}
                            height={24}
                            alt="Edit Icon"
                            title="Edit Icon"
                            className="relative w-[24px] h-[24px]"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full sm:max-w-[304px] p-2.5 bg-white bg-opacity-5 rounded flex-col justify-center items-center gap-2.5 flex ">
                <div className="w-full py-[11px] bg-yellow-400 rounded justify-center items-center inline-flex cursor-pointer">
                    <div className="capitalize text-center text-black text-xs font-normal uppercas ">
                        {getText('bet_slip.btn_text')}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BetSlipCard
