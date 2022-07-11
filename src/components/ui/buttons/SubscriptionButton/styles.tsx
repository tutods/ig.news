import { styled } from '~/styles/stitches.config';

const StyledButton = styled('button', {
	padding: '$20 $62',

	borderRadius: '$100',

	backgroundColor: '$yellow',
	color: '$background',

	fontWeight: '$bold',
	fontSize: '$20',
	textAlign: 'center',

	transition: 'filter 0.2s',

	'&:hover': {
		filter: 'opacity(0.7)'
	}
});

export { StyledButton };
