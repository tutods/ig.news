import {Svg} from "components/ui/icons/Icon/styles";
import {CSSProps} from "core/@types/CSS";

type Props = CSSProps & {
    name: string;
    size?: 'sm' | 'md' | 'base' | 'lg',
    color?: 'base' | 'blue' | 'green' | 'yellow'
};

const Icon = ({name, css, size, color, ...props}: Props) => {
    return (
        <Svg
            color={color}
            size={size}
            css={
                css
            }
            {...props}
        >
            <use href={`#${name}`}/>
        </Svg>
    );
};

export default Icon;