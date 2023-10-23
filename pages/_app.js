import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Component className="h-screen w-screen scroll-smooth" {...pageProps} />
  );
}

export default MyApp;
