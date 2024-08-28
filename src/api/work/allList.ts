import { ENDPOINT, PER_PAGE } from "@/const";
import { client } from "@/mods/client";
import { FIELDS_WORK } from "./const";
import type { WorkContent, WorkResponse } from "./types";

/**
 * @package
 */
export const allList = async () => {
	const res = await client.get<WorkResponse>({
		endpoint: ENDPOINT.work,
		queries: {
			orders: "-publishedAt,-revisedAt",
			fields: FIELDS_WORK.join(","),
			limit: PER_PAGE,
		},
	});
	const count = Math.trunc(res.totalCount / PER_PAGE);
	const contents = await [...Array(count)].reduce<Promise<WorkContent[]>>(
		async (acc, _, i) => {
			const number = i + 1;
			const v = await client.get<WorkResponse>({
				endpoint: ENDPOINT.work,
				queries: {
					orders: "-publishedAt,-revisedAt",
					fields: FIELDS_WORK.join(","),
					offset: number * PER_PAGE,
				},
			});
			return acc.then((vs) => vs.concat(v.contents));
		},
		Promise.resolve(res.contents),
	);

	return { contents, totalCount: res.totalCount };
};
