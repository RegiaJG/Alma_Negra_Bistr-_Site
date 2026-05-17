'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { TRANSLATIONS } from './translations'

type Lang = 'pt' | 'en'

interface LanguageContextType {
  lang: Lang
  t: typeof TRANSLATIONS['pt']
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'pt',
  t: TRANSLATIONS.pt,
  toggle: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('pt')

  useEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved === 'pt' || saved === 'en') setLang(saved as Lang)
  }, [])

  const toggle = () => {
    const next: Lang = lang === 'pt' ? 'en' : 'pt'
    setLang(next)
    localStorage.setItem('lang', next)
  }

  return (
    <LanguageContext.Provider value={{ lang, t: TRANSLATIONS[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
