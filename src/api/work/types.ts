/**
 * @package
 */
export type WorkResponse = {
	contents: WorkContent[];
	totalCount: number;
	offset: number;
	limit: number;
};

/**
 * @package
 */
export type WorkContent = {
	title: string;
	body: string;
	publishedAt: string;
	id: string;
	thumbnail: {
		url: string;
	};
};
