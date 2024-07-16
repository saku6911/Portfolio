import { createClient } from "microcms-js-sdk";

export const client = createClient({
	serviceDomain: "hgolynaamm",
	apiKey: process.env.API_KEY!,
});
