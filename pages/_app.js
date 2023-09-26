import "../styles/globals.css";

import { League_Spartan } from 'next/font/google';
const leagueSpartan = League_Spartan({ subsets: ['latin'] });
function MyApp({ Component, pageProps }) {
  return (
    <div className={leagueSpartan.className}>

    
    <Component className="h-screen w-screen scroll-smooth" {...pageProps} /></div>
  );
}

export default MyApp;
