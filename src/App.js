import { IntlProvider } from 'react-intl'
import { useLanguage } from './context/languageContext'
import { Header, Main } from './layout'

const App = () => {
	const { language, message } = useLanguage()

	return (
		<IntlProvider locale={language} messages={message}>
			<Header />
			<Main />
		</IntlProvider>
	)
}

export default App
