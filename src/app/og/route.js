import { ImageResponse } from 'next/server';

import siteMetadata from "../../../data/sitemetadata";

export const runtime = "edge";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const hasTitle = searchParams.has("title");
  const title = hasTitle
    ? searchParams.get("title")?.slice(0, 100)
    : siteMetadata.publishName;
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          flexWrap: "nowrap",
          backgroundColor: "black",
          backgroundSize: "100px 100px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            height={90}
            viewBox="0 0 75 65"
            fill="white"
            style={{ margin: "0 75px" }}
          >
            <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
          </svg>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            fontStyle: "normal",
            fontWeight:"700",
            color: "white",
            marginTop: 40,
            lineHeight: 2,
            whiteSpace: "pre-wrap",
          }}
        >
          <p lang="zh-CN">{title}</p>
        </div>
        
      </div>
    )
  );
}
