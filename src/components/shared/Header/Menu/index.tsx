import * as css from "./styles.module.scss";
import { LinkTop, LinkAbout, LinkWork,LinkContact } from "@/components/shared/LinkRouting";
import type { FC } from "react";

type Props = {
  isOpen: boolean;
};

export const Menu: FC<Props> = ({ isOpen }) => {

  return (
    <>
      {isOpen && (
        <div className={css.menu}>
          <div className={css.links}>
            <div className={css.title}>
              <LinkTop />
            </div>
          </div>
          <div className={css.links}>
            <div className={css.title}>
              <LinkAbout />
            </div>
          </div>
          <div className={css.links}>
            <div className={css.title}>
              <LinkWork />
            </div>
          </div>
          <div className={css.links}>
            <div className={css.title}>
              <LinkContact />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
