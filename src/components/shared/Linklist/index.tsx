import * as css from "./styles.module.scss";
import {
  LinkTop,
  LinkAbout,
  LinkWork,
  LinkContact,
} from "@/components/shared/LinkRouting";
import type { FC } from "react";

export const Linklist: FC = () => {
  return (
    <div className={css.links}>
        <div className={css.lists}>
          <div className={css.list}>
            <LinkTop />
          </div>
          <div className={css.list}>
            <LinkAbout/>
          </div>
          <div className={css.list}>
            <LinkWork />
          </div>
          <div className={css.list}>
            <LinkContact />
          </div>
        </div>
    </div>
  );
};
