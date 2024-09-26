import '../../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import AuthProvider from '@/context/AuthContext';
import { wrapper } from 'src/redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <Toaster position="top-right" />
    </AuthProvider>
)}

export default wrapper.withRedux(MyApp)
