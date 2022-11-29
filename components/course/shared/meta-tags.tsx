import Head from "next/head";
import { useRouter } from "next/router";
import type { FC } from "react";
import type { MetaTagsForSeo } from "../../../types/courses.types";

interface MetaTagsProps {
  props: MetaTagsForSeo;
}

const MetaTags: FC<MetaTagsProps> = ({ props }) => {
  const { asPath } = useRouter();

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const URL = `${origin}${asPath}`;

  return (
    <Head>
      <title>{props?.title}</title>
      <meta name="description" content={props?.metaDescription} />
      <link rel="canonical" href={props?.canonicalTag || URL} />
      <meta name="keywords" content={props?.metaKeywords?.join(", ")} />
      {props?.metaRobots?.length ? (
        <meta name="robots" content={props?.metaRobots?.join(", ")} />
      ) : (
        ""
      )}
      <meta name="author" content={props?.metaAuthor || "Dialect"} />
      <meta name="theme-color" content={props?.metaTheme || "#1A4742"} />
      {props?.metaRefresh ? (
        <meta httpEquiv="refresh" content={props?.metaRefresh} />
      ) : (
        ""
      )}
    </Head>
  );
};

export default MetaTags;
