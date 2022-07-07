import { createStitches } from '@stitches/react';
import { colors } from '~/styles/partials/colors';
import { font } from '~/styles/partials/font';
import { lineHeights } from '~/styles/partials/line-height';
import { utils } from '~/styles/partials/utils';
import { radii } from '~/styles/partials/radii';
import { sizes } from '~/styles/partials/sizes';
import { space } from '~/styles/partials/space';
import { media } from '~/styles/partials/media';

export const {
	styled,
	css,
	globalCss,
	keyframes,
	getCssText,
	theme,
	createTheme,
	config,
} = createStitches({
	theme: {
		colors,
		sizes,
		space,
		...font,
		lineHeights,
		radii,
	},
	media,
	utils,
});
