import { PropertyValue } from '@stitches/react';

export const utils = {
	py: (value: PropertyValue<'padding'>) => ({
		paddingTop: value,
		paddingBottom: value,
	}),
	px: (value: PropertyValue<'padding'>) => ({
		paddingLeft: value,
		paddingRight: value,
	}),
	size: (value: PropertyValue<'width'>) => ({
		width: value,
		height: value,
	}),
	inlineFlex: (direction: 'row' | 'column') => ({
		display: 'inline-flex',
		flexDirection: direction,
	}),
};
