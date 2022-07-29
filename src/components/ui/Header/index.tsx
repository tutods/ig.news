import { GithubButton } from '~/components/ui/buttons/GithubButton';
import { NavLink } from '~/components/ui/Header/partials/NavLink';

import { HeaderContent, StyledHeader, StyledLogo } from '~/components/ui/Header/styles';

const Header = () => {
	return (
		<StyledHeader>
			<HeaderContent>
				<StyledLogo>
					ig<span>.</span>news
				</StyledLogo>

				<nav>
					<NavLink href={'/'}>Home</NavLink>
					<NavLink href={'/posts'} prefetch>
						Posts
					</NavLink>
				</nav>

				<GithubButton />
			</HeaderContent>
		</StyledHeader>
	);
};

export { Header };
