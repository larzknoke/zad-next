import Layout from "../components/layout";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <Layout
      pageClass={Component.pageClass}
      noMainPadding={Component.noMainPadding}
    >
      <NextNProgress color="#123274" height={2} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
