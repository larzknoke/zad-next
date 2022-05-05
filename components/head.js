import React from "react";
import Head from "next/head";

function HeadHtml() {
  return (
    <Head>
      <title>ZAD Online | Service der Zentraler Abrechnungsdienst GmbH</title>
      <meta
        name="description"
        content="ZAD Online | Service der Zentraler Abrechnungsdienst GmbH"
      />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,700&display=swap"
        as="style"
        onLoad="this.onload=null;this.rel='stylesheet'"
      />
      <noscript>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,700&display=swap"
          rel="stylesheet"
          type="text/css"
        />
      </noscript>
      <link rel="icon" href="favicon.ico" sizes="any" />
      <link rel="icon" href="favicon.svg" type="image/svg+xml" />
    </Head>
  );
}

export default HeadHtml;
