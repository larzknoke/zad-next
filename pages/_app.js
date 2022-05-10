import Layout from "../components/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout pageClass={Component.pageClass}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
