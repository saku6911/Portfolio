import type { WorkContent } from "@/api/work";
import type { FC } from "react";
import { PrimaryButton } from "@/components/shared/Button";
import { WorkContainer } from "./workContainer";
import { Title } from "@/components/shared/Title";
import { routes } from "@/components/shared/LinkRouting/const";
import * as css from "./styles.module.scss";

type Props = {
	posts: WorkContent[];
};

export const Work: FC<Props> = ({ posts }) => {
	return (
		<section className={css.wrapper} id="work">
					<Title>WORK</Title>
				<div className={css.sectionAreaCard}>
						{posts?.map((post) => (
							<WorkContainer
								key={post.id}
								id={post.id}
								title={post.title}
								publishedAt={post.publishedAt}
								thumbnail={post.thumbnail.url}
								alt={post.title}
							/>
						))} 
				</div>
				<PrimaryButton  href={routes.work.href}>実績をもっと見る</PrimaryButton>
		</section>
	);
};
