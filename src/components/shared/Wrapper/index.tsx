import type { FC, ReactNode } from "react";
import * as css from "./styles.module.scss";

type Props = {
	children: ReactNode;
};
export const Wrapper: FC<Props> = ({ children }) => (
	<div className={css.style}>
		<div className={css.contentArea}>
			<div className={css.content}>{children}</div>
		</div>
	</div>
);
