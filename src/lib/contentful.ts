import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "1675pux1lrbe",
  accessToken:
    process.env.CONTENTFUL_ACCESS_TOKEN ||
    "Sw141rKx5i4khcRS4agfIemDnPuqvlmyaYP8zjq37pg",
  host: "cdn.contentful.com",
});

export async function fetchEntries(contentType: string) {
  const entries = await client.getEntries({
    content_type: contentType,
    include: 10,
  });

  return entries.items;
}



