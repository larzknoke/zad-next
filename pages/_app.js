import Layout from "../components/layout";
import "../styles/globals.css";
import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Layout
        pageClass={Component.pageClass}
        noMainPadding={Component.noMainPadding}
      >
        <Component {...pageProps} />
      </Layout>
    </ParallaxProvider>
  );
}

export default MyApp;
