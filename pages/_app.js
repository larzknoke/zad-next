import Layout from "../components/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout
      pageClass={Component.pageClass}
      noMainPadding={Component.noMainPadding}
    >
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
