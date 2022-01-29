import { createContext, useContext, useLayoutEffect, useState } from 'react'
import useChangeLanguage from '../hook/useChangeDocument'
import english from '../translation/english.json'
import persian from '../translation/persian.json'

const languageContext = createContext()

export const useLanguage = () => {
	const context = useContext(languageContext)

	if (!context) {
		throw new Error('useLanguage must be used within a LanguageProvider')
	}

	return context
}

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState(window.location.pathname.split('/')[1] || 'en')
	const changeLanguage = (value) => setLanguage(value)
	const setDocument = useChangeLanguage()

	const allLanguages = ['en', 'fa']

	let message = ''

	if (language === 'en') {
		message = english
	} else {
		message = persian
	}

	useLayoutEffect(() => {
		if (language === 'en') {
			setDocument({
				direction: 'ltr',
				language: 'en',
				link: 'en',
				title: 'English',
				directory: 'english',
			})
		} else {
			setDocument({
				direction: 'rtl',
				language: 'fa',
				link: 'fa',
				title: 'فارسی',
				directory: 'persian',
			})
		}
	}, [language, setDocument])

	return (
		<languageContext.Provider value={{ language, changeLanguage, message, allLanguages }}>
			{children}
		</languageContext.Provider>
	)
}

export default languageContext
