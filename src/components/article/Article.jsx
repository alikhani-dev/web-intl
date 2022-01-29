import { FormattedMessage, useIntl } from 'react-intl'
import styled from 'styled-components'

const Article = styled.article`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;

	@media screen and (max-width: 800px) {
		flex-direction: column;
	}
`

const ImageWrapper = styled.div`
	margin: 0 auto;
	padding: 10px;
`

const Image = styled.img`
	width: 100%;
	height: 100%;
	display: block;
	margin: 0 auto;
`

const Content = styled.div`
	padding: 0 1rem;
	text-align: justify;
	flex-shrink: 2;

	@media screen and (max-width: 800px) {
		margin-bottom: 1rem;
	}
`

const About = styled.div`
	padding: 0 1rem;
`

const Category = styled.div``

const ArticleCm = () => {
	const intl = useIntl()

	return (
		<main>
			<Article>
				<Content>
					<FormattedMessage id='description' />
				</Content>
				<ImageWrapper>
					<Image src={intl.formatMessage({ id: 'image' })} alt='preview' />
				</ImageWrapper>
			</Article>
			<About>
				<a href={intl.formatMessage({ id: 'link' })} target='_blank' rel='noreferrer'>
					<FormattedMessage id='source' /> - <FormattedMessage id='newsID' /> : <FormattedMessage id='id' />
				</a>
			</About>
		</main>
	)
}

export default ArticleCm
