import { Fjalla_One, Roboto, Instrument_Sans } from 'next/font/google'

export const fjalla = Fjalla_One({ subsets: ['latin'], weight: '400' })
export const roboto = Roboto({ subsets: ['latin'], weight: '400' })
export const instrument_sans = Instrument_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})
