import '../../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import AuthProvider from '@/context/AuthContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
    <Head>
        <title>
        فرانت تاپ لرن | دنیای کدهای بی‌نهایت
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://stijndv.com" />
        <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </Head>
      <Component {...pageProps} />
      <Toaster position="top-right" />
    </AuthProvider>
)}

export default MyApp
