import type { FC, ReactNode } from "react";
import * as css from "./styles.module.scss";

type Props = {
  children: ReactNode;
}


export const PrimaryButton: FC<Props> = ({children}) => {
 
  return (
   <>  
   <button className={css.primaryButton}>
   {children}
   </button>
   </>
  );
};