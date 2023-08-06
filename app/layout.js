import { LanguageProvider } from './LanguageContext'
import Header from './components/Header'
import { fjalla } from './fonts'
import './globals.css'

export const metadata = {
    title: 'Kazix',
    description: 'A task for a senior frontend developer position.',
}

export default function RootLayout({ children }) {
    return (
        <LanguageProvider>
            <html lang="en" className="bg-white">
                <body className={`${fjalla.className} bg-white`}>
                    <Header />
                    {children}
                </body>
            </html>
        </LanguageProvider>
    )
}
