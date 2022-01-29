import { IntlProvider } from 'react-intl'
import { useLanguage } from './context/languageContext'
import { Header, Main, Footer } from './layout'

const App = () => {
	const { language, message } = useLanguage()

	return (
		<IntlProvider locale={language} messages={message}>
			<Header />
			<Main />
			<Footer />
		</IntlProvider>
	)
}

export default App
