import Link from 'next/link'

const PromoItem = ({
    headingOne,
    headingTwo,
    buttonText,
    bg_banner,
    btn_link,
}) => {
    return (
        <div
            className={`w-full px-[20px] md:pl-[55px] py-[25px] md:py-[60px] relative rounded-3xl flex-1 ${bg_banner} bg-no-repeat bg-cover`}
        >
            <div className="flex-col justify-start items-start gap-2 flex">
                <div>
                    <span className="text-yellow-400 uppercase text-[32px] sm:text-[68px] font-normal leading-[32px] sm:leading-[68px]">
                        {headingOne}
                        <br />
                    </span>
                    <span className="text-white uppercase text-[32px] sm:text-[68px] font-normal leading-[32px] sm:leading-[68px]">
                        {headingTwo}
                    </span>
                </div>
                <div className="p-3 bg-yellow-400 rounded-xl justify-center items-center inline-flex">
                    <Link href={btn_link}>
                        <div className="text-teal-900 uppercase text-base font-normal leading-7">
                            {buttonText}
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PromoItem
