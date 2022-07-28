import React from "react";
import Head from "next/head";
import Script from "next/script";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY;

function HeadHtml() {
  return (
    <Head>
      <title>ZAD Online | Service der Zentraler Abrechnungsdienst GmbH</title>
      <meta
        name="description"
        content="ZAD Online | Service der Zentraler Abrechnungsdienst GmbH"
      />
      <link rel="icon" href="favicon.ico" sizes="any" />
      <link rel="icon" href="favicon.svg" type="image/svg+xml" />
      <script
        async
        src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`}
      ></script>
    </Head>
  );
}

export default HeadHtml;
