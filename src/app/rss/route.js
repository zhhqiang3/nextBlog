import Rss from "rss";
import siteMetadata from "../../../data/sitemetadata";
import { allPosts } from "contentlayer/generated"


export async function GET() {

  const feed = new Rss({
    title: siteMetadata.title,
    description: siteMetadata.description,
    feed_url: `${siteMetadata.siteUrl}/rss`,
    site_url: siteMetadata.siteUrl,
    language: siteMetadata.language,
  });

  allPosts.filter((post) => post.draft === false).forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${siteMetadata.siteUrl}${post.slug}`,
      guid: `${siteMetadata.siteUrl}${post.slug}`,
      date: post.pubDate,
    });
  });

  return new Response(feed.xml(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}