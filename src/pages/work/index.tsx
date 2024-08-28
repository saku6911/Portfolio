import { list } from "@/api/work/list";
import type { WorkContent } from "@/api/work";
import { Work as W } from "@/components/pages/Work";
import { WorkContainer } from "@/components/pages/Top/Work/workContainer";
import type { GetStaticProps, NextPage } from "next";

type Props = {
	contents: WorkContent[];
	totalCount: number;
};

const Blog: NextPage<Props> = ({ contents, totalCount }) => {
	return (
		<>
			<W>
				{contents.map((content) => (
					<WorkContainer
						key={content.id}
						id={content.id}
						title={content.title}
						publishedAt={content.publishedAt}
						thumbnail={content.thumbnail.url}
						alt={content.title}
					/>
				))}
			</W>
		</>
	);
};

export default Blog;

export const getStaticProps: GetStaticProps<Props> = async () => {
	const res = await list();
	return {
		props: {
			contents: res.contents,
			totalCount: res.totalCount,
		},
	};
};
