import { ENDPOINT } from "@/const";
import { client } from "@/mods/client";
import { FIELDS_BLOG_CONTENT } from "./const";
import type { WorkContent } from "./types";

/**
 * @package
 */
export const content = async (id: string, draftKey?: string) =>
	await client.get<WorkContent>({
		endpoint: ENDPOINT.work,
		contentId: id,
		queries: {
			fields: FIELDS_BLOG_CONTENT.join(","),
			draftKey,
		},
	});
