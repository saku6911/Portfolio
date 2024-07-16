import NextLink from "next/link";
import type { LinkProps } from "next/link";
import type { FC, ReactNode } from "react";

type Props = LinkProps & {
  children: ReactNode;
  target?: boolean;
};

export const TextLink: FC<Props> = ({ href, target: t, children }) => {
  const target = t ? { target: "_blank", rel: "noopener noreferrer" } : null;
  return (
    <NextLink href={href} legacyBehavior>
      <a {...target} >
        {children}
      </a>
    </NextLink>
  );
};