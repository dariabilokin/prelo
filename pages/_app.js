import { Fragment } from "react";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return <Fragment>{getLayout(<Component {...pageProps} />)}</Fragment>;
}

export default MyApp;
