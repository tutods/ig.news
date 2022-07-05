import { styled } from 'styles/stitches.config';

const LinkContainer = styled('a', {
	width: '100%',

	display: 'flex',
	flexDirection: 'column',

	paddingBottom: '$32',
	borderBottom: '1px solid $colors$gray700',

	cursor: 'pointer',

	'&>time': {
		marginBottom: '$16',

		color: '$gray300',
		fontSize: '$16',
	},

	'&>h3': {
		color: '$white',

		fontSize: '$24',
		lineHeight: '$34',
		fontWeight: '$bold',

		transition: 'color 0.2s ease-in-out',
	},

	'&>p': {
		marginTop: '$8',

		color: '$gray300',
		fontWeight: '$light',
	},

	'&:hover': {
		'&>h3': {
			color: '$yellow',
		},
	},
});

export { LinkContainer };
