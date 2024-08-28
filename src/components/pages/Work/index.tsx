import { Title } from "@/components/shared/Title";
import { Wrapper } from "@/components/shared/Wrapper";
import type { FC, ReactNode } from "react";
import * as css from "./styles.module.scss";

type Props = {
	children?: ReactNode;
};

export const Work: FC<Props> = ({ children }) => {
	return (
		<Wrapper>
			<Title>WORK</Title>
			<div className={css.itemBoxLayout}>{children}</div>
		</Wrapper>
	);
};