import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import { useLanguage } from '../../context/languageContext'
import { useIntl } from 'react-intl'

const Header = styled.header`
	background-color: #eee;
	box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.75);
	height: 42px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1.3rem;

	@media screen and (max-width: 380px) {
		padding: 0;
	}
`

const HeaderNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const HeaderNavItem = styled.span`
	color: #333;
	text-decoration: none;
	padding: 0.5rem 1rem;
	font-size: 1rem;
	cursor: pointer;

	&:hover {
		color: #000;
	}
`

const Select = styled.select`
	@media screen and (max-width: 380px) {
		margin: 0.5rem 1rem;
	}
`

const HeaderCm = () => {
	const { changeLanguage, allLanguages, language } = useLanguage()
	const intl = useIntl()

	const allOptions = allLanguages.map((lang) => (
		<option value={lang} key={lang}>
			{intl.formatMessage({ id: lang })}
		</option>
	))

	return (
		<Header>
			<HeaderNav>
				<HeaderNavItem>
					<FormattedMessage id='home' />
				</HeaderNavItem>
				<HeaderNavItem>
					<FormattedMessage id='blog' />
				</HeaderNavItem>
				<HeaderNavItem>
					<FormattedMessage id='about' />
				</HeaderNavItem>
			</HeaderNav>
			<Select onChange={(e) => changeLanguage(e.target.value)} value={language}>
				{allOptions}
			</Select>
		</Header>
	)
}

export default HeaderCm
