import clsx from "clsx";
import type { FC, ReactNode } from "react";
import * as css from "./styles.module.scss";

type Props = {
	isOpen: boolean;
	children: ReactNode;
};

export const Modal: FC<Props> = ({ isOpen, children }) => (
	<div
		className={clsx(css.overlay, {
			[css.isOpen]: isOpen,
		})}
	>
		{children}
	</div>
);
