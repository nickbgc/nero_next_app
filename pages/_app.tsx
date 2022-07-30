import { ApplicationProvider } from 'context/ApplicationContext';
import { AppProps /* , AppContext */ } from 'next/app';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <ApplicationProvider>
      <Component {...pageProps} />
    </ApplicationProvider>
  );
}

export default App;
