import * as css from "./styles.module.scss";
import Img from "next/image";
import type { FC } from "react";

export const Main: FC = () => {
    return (
      <div>
            <div>
              <div className={css.imgArea}>
                <Img
                  src="/main.webp"
                  alt="TOPの画像"
                  fill
                />
              </div>
            </div>
      </div>
    );
  };
  