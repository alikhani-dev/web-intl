import React from 'react'
import { render } from 'react-dom'
import App from './App.js'
import { LanguageProvider } from './context/languageContext.js'

import './index.css'

render(
	<LanguageProvider>
		<App />
	</LanguageProvider>,
	document.getElementById('root'),
)
