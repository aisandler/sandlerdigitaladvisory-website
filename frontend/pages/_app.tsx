import { AppProps } from 'next/app';
import Head from 'next/head';
import { AuthProvider } from '../contexts/AuthContext';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  console.log('App component rendering, about to mount AuthProvider');
  
  return (
    <AuthProvider>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default App; 