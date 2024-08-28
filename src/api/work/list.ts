import { ENDPOINT, PER_PAGE } from "@/const";
import { client } from "@/mods/client";
import { FIELDS_WORK } from "./const";
import type { WorkResponse } from "./types";

/**
 * @package
 */
export const list = async () =>
	await client.get<WorkResponse>({
		endpoint: ENDPOINT.work,
		queries: {
			orders: "-publishedAt,-revisedAt",
			fields: FIELDS_WORK.join(","),
			limit: PER_PAGE,
		},
	});