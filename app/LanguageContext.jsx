'use client'

import { createContext, useState, useContext } from 'react'
import en from '@/public/languages/en.json'
import fr from '@/public/languages/fr.json'
// Import other language JSON files as needed.

const languages = {
    en,
    fr,
    // Add other languages here.
}

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
    const [currentLang, setCurrentLang] = useState('en')

    const getText = (key) => {
        return languages[currentLang][key] || languages['en'][key] || key
    }

    return (
        <LanguageContext.Provider
            value={{ currentLang, setCurrentLang, languages, getText }}
        >
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    return useContext(LanguageContext)
}
