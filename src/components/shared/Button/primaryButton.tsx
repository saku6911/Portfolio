import type { FC, ReactNode } from "react";
import NextLink from "next/link";
import * as css from "./styles.module.scss";

type Props = {
  children: ReactNode;
  href: string;
}


export const PrimaryButton: FC<Props> = ({ href, children}) => {
 
  return (
    <NextLink href={href}>
   <button className={css.primaryButton}>
   {children}
   </button>
   </NextLink>
  );
};