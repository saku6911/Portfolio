import { client } from "@/mods/client";
import { FIELDS_WORK } from "./const";
import type { WorkResponse } from "./types";

/**
 * @package
 */
export const list = async () =>
	await client.get<WorkResponse>({
		endpoint: "work",
		queries: {
			orders: "-publishedAt,-revisedAt",
			fields: FIELDS_WORK.join(","),
			limit: 10,
		},
	});
