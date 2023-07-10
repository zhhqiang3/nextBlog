import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkPresetLintConsistent from "remark-preset-lint-consistent";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import readingTime from "reading-time";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`.toLowerCase(),
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/").toLowerCase(),
  },
  readingTime: {
    type: "json",
    resolve: (doc) => readingTime(doc.body.raw, { wordsPerMinute: 500 }),
  },
  headings: {
    type: "json",
    resolve: async (doc) => {
      const regXHeader = /\n(?<flag>#{2,6})\s+(?<content>.+)/g;
      const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
        ({ groups }) => {
          const flag = groups?.flag;
          const content = groups?.content;
          return {
            level:
              flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
            text: content,
            id: content.split(" ").join("-").toLowerCase(),
          };
        }
      );
      return headings;
    },
  },
};

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.md`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
  },
  computedFields,
}));

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.md`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    pubDate: {
      type: "date",
      required: true,
    },
    updatedDate: {
      type: "date",
      required: false,
    },
    image: {
      type: "string",
      default:""
    },
    layout: {
      type: "string",
      default:""
    },
    draft: {
      type: "boolean",
      default: false,
      required: false,
    },
    categories: {
      type: "list",
      default: [],
      of: { type: "string" },
    },
    tags: {
      type: "list",
      default: [],
      of: { type: "string" },
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./data/content",
  documentTypes: [Post, Page],
  mdx: {
    remarkPlugins: [remarkPresetLintConsistent, remarkGfm, remarkMath],
    rehypePlugins: [
      [rehypePrettyCode, { theme: "one-dark-pro", keepBackground: true }],
      rehypeKatex,
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});
