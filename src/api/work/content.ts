import { client } from "@/mods/client";
import { FIELDS_WORK_CONTENT } from "./const";
import type { WorkContent } from "./types";

/**
 * @package
 */
export const content = async (id: string, draftKey?: string) =>
	await client.get<WorkContent>({
		endpoint:"work",
		contentId: id,
		queries: {
			fields: FIELDS_WORK_CONTENT.join(","),
			draftKey,
		},
	});
