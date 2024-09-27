import '../../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import { wrapper } from 'src/redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster position="top-right" />
    </>
)}

export default wrapper.withRedux(MyApp)
