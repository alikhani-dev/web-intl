import { useLayoutEffect, useState } from 'react'

const useChangeLanguage = () => {
	const [useDocument, setDocument] = useState()

	const replaceAddress = (target, directory) => {
		const element = document.querySelector(target)
		const href = element.href.replace(/assets\/\w+/g, `assets/${directory}`)
		element.setAttribute('href', href)
	}

	useLayoutEffect(() => {
		if (useDocument) {
			const { direction, language, link, title, directory } = useDocument
			replaceAddress('link[rel=icon]', directory)
			replaceAddress('link[rel=manifest]', directory)
			replaceAddress('link[rel=apple-touch-icon]', directory)
			document.documentElement.dir = direction
			document.documentElement.lang = language
			document.title = title
			window.history.pushState('', '', `/${link}`)
		}
	}, [useDocument])

	return setDocument
}

export default useChangeLanguage
