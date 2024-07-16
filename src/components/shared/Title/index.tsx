import type { FC, ReactNode } from "react";
import * as css from "./styles.module.scss";

type Props = {
  children: ReactNode;
}


export const Title: FC<Props> = ({children}) => {
 
  return (
   <>  
   <h1 className={css.title}>
   {children}
   </h1>
   </>
  );
};