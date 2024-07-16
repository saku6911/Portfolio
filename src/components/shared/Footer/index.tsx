import type { FC, ReactNode } from "react";
import * as css from "./styles.module.scss";
import { Linklist } from "@/components/shared/Linklist";

export const Footer: FC = () => {
 
  return (
   <>  
    <div className={css.footer}>
   <h1 className={css.title}>Portfolio　Site</h1>
            <Linklist />
          </div>
   </>
  );
};