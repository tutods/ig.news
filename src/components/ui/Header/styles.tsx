import { styled } from '~/styles/stitches.config';

const StyledHeader = styled('header', {
	height: '$80',

	borderBottom: '1px solid $shape',
});

const HeaderContent = styled('div', {
	width: '100%',
	maxWidth: '1440px',

	margin: '0 auto', // center horizontally
	padding: '0 $20',

	display: 'flex',
	alignItems: 'center',
	gap: '$80',

	nav: {
		height: '$80',

		flex: '1 1 auto', // use all available space

		display: 'flex',
		gap: '$24',
	},

	'@sm': {
		height: '$80',

		nav: {
			display: 'none',
		},

		button: {
			display: 'none',
		},
	},
});

const StyledLogo = styled('div', {
	color: '$white',
	fontSize: '$26',
	fontWeight: '$bold',

	span: {
		color: '$blue',
	},
});

export { StyledHeader, HeaderContent, StyledLogo };
