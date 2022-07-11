import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import { StyledLink } from './styles';

type Props = LinkProps & {
	children: string | ReactNode;
};

const NavLink = ({ children, href, ...props }: Props) => {
	const router = useRouter();

	return (
		<Link href={href} {...props}>
			<StyledLink active={router.asPath === href}>{children}</StyledLink>
		</Link>
	);
};

export { NavLink };
