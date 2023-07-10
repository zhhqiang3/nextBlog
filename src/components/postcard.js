import Link from "next/link";
import moment from "moment/moment";

export default function PostCard({
  slug,
  title,
  description,
  pubDate,
  readingTime,
}) {
  return (
    <div className="py-4">
      <Link href={slug} passHref>
        <h3 className="no-underline hover:underline text-xl font-semibold py-2 mt-1">
          {title}
        </h3>
      </Link>
      {description && (
        <p className="prose py-1 dark:prose-invert max-w-none">{description}</p>
      )}
      <div className="py-2 text-sm text-zinc-500 dark:text-zinc-400">
        <time>{moment(pubDate).format("LL")}</time>
        <span className="select-none"> · </span>
        <span>{readingTime}</span>
      </div>
    </div>
  );
}
