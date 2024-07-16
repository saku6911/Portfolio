import { Menu } from "@/components/shared/Header/Menu";
import { Modal } from "@/components/shared/Header/Modal";
import { Linklist } from "@/components/shared/Linklist";
import * as css from "@/components/shared/Header/styles.module.scss";
import clsx from "clsx";
import type { FC } from "react";
import { useState } from "react";

export const Header: FC = () => {
  const [isOpen, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  return (
        <div className={css.header}>
          <div className={css.pclinkList}>
            <Linklist />
          </div>
          <div className={css.splinkList}>
            <div className={css.humbugger}>
              <button
                className={clsx(css.toggle, { [css.isOpen]: isOpen })}
                onClick={() => setOpen(!isOpen)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
      <Modal isOpen={isOpen}>
        <Menu isOpen={isOpen}/>
      </Modal>
    </div></div>
  );
};
