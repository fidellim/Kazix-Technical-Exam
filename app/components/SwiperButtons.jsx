// some-inner-component.jsx
import Image from 'next/image'
import { React } from 'react'
import { useSwiper } from 'swiper/react'
import chevron_left from '@/public/assets/chevron_left.svg'

export default function SwiperButtons() {
    const swiper = useSwiper()

    return (
        <div className="justify-start items-start gap-2 flex">
            <Image
                src={chevron_left}
                width={24}
                height={24}
                alt="Chevron Left"
                title="Chevron Left"
                className="relative w-[24px] h-[24px] cursor-pointer"
                onClick={() => swiper.slidePrev()}
            />
            <Image
                src={chevron_left}
                width={24}
                height={24}
                alt="Chevron Left"
                title="Chevron Right"
                className="relative w-[24px] h-[24px] rotate-180 cursor-pointer"
                onClick={() => swiper.slideNext()}
            />
        </div>
    )
}
