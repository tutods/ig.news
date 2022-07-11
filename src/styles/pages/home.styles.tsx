import { styled } from '~/styles/stitches.config';

const HeroSection = styled('section', {
	width: '100%',
	minHeight: 'calc(100vh - $80)',

	display: 'flex',
	alignItems: 'center'
});

const Content = styled('div', {
	width: '100%',
	maxWidth: '1440px',

	margin: '0 auto', // center horizontally

	display: 'grid',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '$32',
	gridTemplateColumns: '1fr 1fr',

	// Title and Text Column
	'div:first-of-type': {
		h3: {
			display: 'flex',
			alignItems: 'center',
			gap: '$20',

			marginBottom: '$40',

			fontSize: '$24',
			lineWeight: '$32',
			fontWeight: '$bold',
			color: '$white'
		},

		h1: {
			marginBottom: '$24',

			fontSize: '$72',
			fontWeight: '$extraBold',
			lineHeight: '$72',

			span: {
				color: '$blue'
			}
		},

		p: {
			marginBottom: '$40',

			color: '$white',
			fontSize: '$24',
			lineHeight: '$36',

			span: {
				color: '$blue'
			}
		}
	},

	// Image Column
	'div:nth-of-type(2)': {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},

	'@sm': {
		px: '$32',

		gridTemplateColumns: '1fr !important',
		gridTemplateRows: '1fr 1fr',

		// Title and Text Column
		'div:first-of-type': {
			h1: {
				fontSize: '$32',
				lineHeight: '$36'
			}
		}
	}
});

export { Content, HeroSection };
