import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
	// Import font from Google Fonts
	'@import': [
		"url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap')"
	],

	'*': {
		padding: 0,
		margin: 0,
		boxSizing: 'border-box'
	},

	button: {
		border: 0,
		boxShadow: 'none',
		color: '$text',
		cursor: 'pointer'
	},

	a: {
		color: 'inherit',
		textDecoration: 'none',
		cursor: 'pointer'
	},

	body: {
		backgroundColor: '$background',
		color: '$text',

		fontFamily: '$body',
		fontWeight: '$medium',
		fontSize: '$16',
		lineHeight: '$24'
	},

	'h1,h2,h3,h4,h5,h6': {
		color: '$white'
	}
});
