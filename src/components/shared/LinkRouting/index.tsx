import { TextLink } from "@/components/shared/TextLink";
import { routes } from "@/components/shared/LinkRouting/const";
import type { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  href: string;
  name: string;
};

export const Link: FC<Props> = ({ children, href, name }) => {
  return (
    <TextLink href={href}>
      {name}
      {children}
    </TextLink>
  );
};

export const LinkTop: FC = () => {
  return <Link href={routes.top.href} name={routes.top.name} />;
};

export const LinkAbout: FC = () => {
  return <Link href={routes.about.href} name={routes.about.name} />;
};

export const LinkWork: FC = () => {
  return <Link href={routes.work.href} name={routes.work.name} />;
};

export const LinkContact: FC = () => {
  return <Link href={routes.contact.href} name={routes.contact.name} />;
};