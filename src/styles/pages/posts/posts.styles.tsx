import { styled } from '~/styles/stitches.config';

const Container = styled('main', {
	maxWidth: '1440px',
	margin: '0 auto',

	'&>section': {
		display: 'flex',
		flexDirection: 'column',
		gap: '$32',

		margin: '$space$80 auto 0'
	}
});

export { Container };
