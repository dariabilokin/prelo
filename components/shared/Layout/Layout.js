import Head from "next/head";
import HeaderBar from "../Navigation/header";
import Footer from "../Footer/Footer";

const Layout = ({ children, meta, style }) => {
  const { title, description, icon } = meta;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <HeaderBar />
      <main className={...style}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
