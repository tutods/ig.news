import { styled } from '~/styles/stitches.config';

const StyledPostContent = styled('section', {
	marginTop: '$32',

	background: 'linear-gradient($colors$gray200, transparent)',
	backgroundClip: 'text',
	'-webkit-text-fill-color': 'transparent',
	color: '$gray100',
	lineHeight: '$32',
	fontSize: '$18',

	'p, ul': {
		margin: '$space$24 0'
	},

	ul: {
		paddingLeft: '$24',

		li: {
			margin: '$space$8 0'
		}
	}
});

const StyledPostContainer = styled('main', {
	maxWidth: '$1120',
	margin: '0 auto',

	'&>article': {
		display: 'flex',
		flexDirection: 'column',
		gap: '$24',

		margin: '$space$80 auto 0',

		h1: {
			fontWeight: '$extraBold',
			fontSize: '$54',
			lineHeight: '$56'
		},

		time: {
			fontSize: '$16',
			color: '$gray300'
		}
	}
});

export { StyledPostContainer, StyledPostContent };