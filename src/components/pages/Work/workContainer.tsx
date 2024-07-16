import { routing } from "@/routing";
import Img from "next/image";
import Link from "next/link";
import type { FC } from "react";
import * as css from "./styles.module.scss";

type Props = {
	id: string;
	title: string;
	publishedAt: string;
	thumbnail: string;
	alt: string;
};

export const WorkContainer: FC<Props> = ({
	id,
	title,
	publishedAt,
	thumbnail,
	alt,
}) => {
	return (
		<div className={css.itemBoxArea}>
			<Link href={`${routing.work}${id}`} legacyBehavior>
				<div className={css.itemLink}>
					<div className={css.itemBoxContents}>
						<div className={css.itemPhoto}>
							<Img
								src={thumbnail}
								alt={alt}
								width={800}
								height={800}
								className={css.photo}
							/>
						</div>
						<div className={css.itemArea}>
							<div>
								<div className={css.itemDate}>
									<p>{publishedAt}</p>
								</div>
								<div className={css.itemTitle}>{title}</div>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};
