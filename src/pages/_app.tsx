import '@/styles/globals.css';
import { AppProps } from 'next/app';
import { AuthProvider } from '@/context/auth';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
);

export default MyApp;
