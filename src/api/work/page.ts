import { client } from "@/mods/client";
import { FIELDS_WORK } from "./const";
import type { WorkResponse } from "./types";

/**
 * @package
 */
export const page = async (num: number) =>
	await client.get<WorkResponse>({
		endpoint:"work",
		queries: {
			orders: "-publishedAt,-revisedAt",
			fields: FIELDS_WORK.join(","),
			offset: (num - 1) * 10,
			limit: 10,
		},
	});
