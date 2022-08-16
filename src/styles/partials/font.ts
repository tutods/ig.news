import { calculateRem } from '~/utils/calculateRem';

const font = {
	fonts: {
		body: '"Roboto", sans-serif'
	},
	fontSizes: {
		8: '0.35rem',
		10: '0.50rem',
		12: '0.75rem',
		14: '0.875rem',
		16: '1rem',
		18: '1.125rem',
		20: calculateRem(20),
		24: '1.5rem',
		26: calculateRem(26),
		28: '1.75rem',
		32: '2rem',
		48: '3rem',
		54: '3.375rem',
		72: '4.5rem'
	},
	fontWeights: {
		extraLight: '100',
		light: '300',
		regular: '400',
		medium: '500',
		semiBold: '600',
		bold: '700',
		extraBold: '900'
	}
};

export { font };
