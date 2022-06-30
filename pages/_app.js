import Layout from "../components/layout";
import "../styles/globals.css";
import { ParallaxProvider } from "react-scroll-parallax";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Layout
        pageClass={Component.pageClass}
        noMainPadding={Component.noMainPadding}
      >
        <NextNProgress color="#123274" height={2} />
        <Component {...pageProps} />
      </Layout>
    </ParallaxProvider>
  );
}

export default MyApp;
