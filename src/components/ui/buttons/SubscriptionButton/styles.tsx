import { styled } from '~/styles/stitches.config';

const StyledButton = styled('button', {
	inlineFlex: 'row',
	alignItems: 'center',
	justifyContent: 'center',

	borderRadius: '$100',

	textAlign: 'center',
	fontWeight: '$bold',
	fontSize: '$20',

	transition: 'filter 0.2s',

	'&:hover': {
		filter: 'opacity(0.7)'
	},

	variants: {
		size: {
			inline: {
				padding: '$20 $62',

				backgroundColor: '$yellow',
				color: '$background'
			},
			block: {
				width: '100%',

				py: '$27',
				px: '$20',

				backgroundColor: '$shape',
				color: '$white',

				span: {
					'&:nth-of-type(1)': {
						color: '$yellow'
					},
					'&:nth-of-type(2)': {
						marginLeft: '$16',

						fontSize: '$26'
					}
				}
			}
		}
	},

	defaultVariants: {
		size: 'inline'
	}
});

export { StyledButton };