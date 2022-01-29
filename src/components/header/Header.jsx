import React from 'react'
import { FormattedDate, FormattedMessage } from 'react-intl'
import styled from 'styled-components'

const Title = styled.h1`
	font-size: 1.3rem;
	margin-right: 1rem;
	@media screen and (max-width: 850px) {
		font-size: 1.2rem;
		margin-right: 0;
	}
`

const Time = styled.time`
	font-size: 0.9rem;
	min-width: 145px;
	@media screen and (max-width: 850px) {
		display: none;
	}
`

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	margin: 0.9rem 1.3rem;

	@media screen and (max-width: 850px) {
		flex-direction: column;
		align-items: flex-start;
	}
`

const HeaderCm = () => {
	return (
		<Header>
			<Title>
				<FormattedMessage id='title' />
			</Title>
			<Time>
				<FormattedMessage id='publish' /> : <FormattedDate year='numeric' month='2-digit' day='2-digit' />
			</Time>
		</Header>
	)
}

export default HeaderCm
