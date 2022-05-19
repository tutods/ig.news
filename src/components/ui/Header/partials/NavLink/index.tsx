import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { StyledLink } from "./styles";
import { useRouter } from "next/router";

type Props = LinkProps & {
  children: string | ReactNode;
};

const NavLink = ({children, href, ...props}: Props) => {
  const router = useRouter();

  return (
      <Link href={href} {...props}>
        <StyledLink active={router.asPath === href}>{children}</StyledLink>
      </Link>
  );
};

export {NavLink};