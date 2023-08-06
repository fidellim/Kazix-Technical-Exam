import Link from 'next/link'
import { instrument_sans } from '@/app/fonts'

const Hero = ({
    welcomeBonus,
    receiveBonus,
    register,
    bg_banner,
    btn_link,
}) => {
    return (
        <div
            className={`HeaderImages max-w-[1024px] mx-[auto] relative rounded-3xl ${bg_banner} bg-no-repeat bg-cover`}
        >
            <div className="flex-col justify-start px-[20px] py-[25px] md:py-[40px] md:pl-[55px] items-start gap-2 inline-flex">
                <div className="relative mr-4">
                    <span className="text-yellow-400 text-[32px] sm:text-[68px] font-normal leading-[32px] sm:leading-[69px]">
                        €200
                        <br />
                    </span>
                    <span className="text-white uppercase text-[32px] sm:text-[68px] font-normal leading-[32px] sm:leading-[69px]">
                        {welcomeBonus}
                    </span>
                </div>
                <div
                    className={`text-white text-base font-normal leading-[34px] ${instrument_sans.className} mr-4`}
                >
                    {receiveBonus}
                </div>
                <div className="ButtonsV2 p-3 bg-yellow-400 rounded-xl justify-center items-center inline-flex mr-4">
                    <Link href={btn_link}>
                        <div className="uppercase text-teal-900 text-base font-normal leading-7">
                            {register}
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
