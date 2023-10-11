import Head from "next/head";
import HeaderBar from "../navigation/HeaderBar";
import Footer from "../Footer/Footer";

const Layout = ({ children, meta }) => {
  const { title, description, icon } = meta;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href={icon || "favicon.ico"} />
      </Head>
      <HeaderBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
