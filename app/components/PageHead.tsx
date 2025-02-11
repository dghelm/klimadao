import Head from "next/head";
import React from "react";

export interface PageHeadProps {
  production: boolean;
  /** <title> tag */
  title: string;
  /** og:title */
  mediaTitle: string;
  /** og:description */
  metaDescription: string;
  doNotIndex?: boolean;
  mediaImageSrc?: string;
}

export const PageHead = (props: PageHeadProps) => {
  const noRobots = props.doNotIndex || !props.production;
  return (
    <Head>
      {noRobots && <meta name="robots" content="noindex" />}
      {!noRobots && (
        <script
          defer
          data-domain="dapp.klimadao.finance"
          src="https://plausible.io/js/plausible.js"
        ></script>
      )}
      <title>{props.title}</title>
      <meta name="description" content={props.metaDescription} />
      <meta property="og:description" content={props.metaDescription} />
      <meta property="og:title" content={props.mediaTitle} />
      {props.mediaImageSrc && (
        <meta property="og:image" content={props.mediaImageSrc} />
      )}
      <meta property="og:type" content="website" />
      <link rel="icon" href="/favicon.png" />
      <meta property="og:locale" content="en" />
      <link rel="manifest" href="/manifest.json"/>
    </Head>
  );
};
