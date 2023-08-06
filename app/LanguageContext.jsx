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
        const languageData = languages[currentLang]

        const nestedKeyPath = key.split('.')
        let translation = languageData

        for (const nestedKey of nestedKeyPath) {
            if (translation[nestedKey]) {
                translation = translation[nestedKey]
            } else {
                // If the nested key is not found in the current language, fallback to English.
                translation = languages['en']
                break
            }
        }

        return translation
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
