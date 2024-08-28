import { allList } from "@/api/work/allList";
import { content } from "@/api/work/content";
import { Article as A } from "@/components/pages/Article";
import "highlight.js/styles/tokyo-night-light.css";
import type { GetStaticPaths, NextPage } from "next";


const WorkArticle: NextPage<Props> = ({ content, isPreview }) => {
    return (
		<>
			<A
				title={content.title}
				publishedAt={content.publishedAt}
				body={content.body}
				articleType="BLOG"
			/>
		</>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await allList();
	return {
		paths: res.contents.map((content) => ({ params: { id: content.id } })),
		fallback: false,
	};
};
