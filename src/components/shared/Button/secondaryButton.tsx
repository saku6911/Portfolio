import type { FC, ReactNode } from "react";
import * as css from "./styles.module.scss";

type Props = {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
}


export const SecondaryButton: FC<Props> = ({type = "button", children}) => {
 
  return (
   <>  
   <button type={type} className={css.secondaryButton}>
   {children}
   </button>
   </>
  );
};