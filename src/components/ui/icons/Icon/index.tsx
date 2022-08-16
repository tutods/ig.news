import { CSSProps } from '~/@types/CSS';

import { Svg } from '~/components/ui/icons/Icon/styles';

type Props = CSSProps & {
	name: string;
	size?: 'sm' | 'md' | 'base' | 'lg';
	color?: 'base' | 'blue' | 'green' | 'yellow' | 'gray200' | 'gray300';
	onClick?: () => void;
};

const Icon = ({ name, css, size, color, onClick, ...props }: Props) => {
	return (
		<Svg onClick={onClick} color={color} size={size} css={css} {...props}>
			<use href={`#${name}`} />
		</Svg>
	);
};

export default Icon;
