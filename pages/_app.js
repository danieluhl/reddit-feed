import '../styles/globals.css';
import {fetchRedditData} from 'fetch-reddit-data';

function MyApp({Component, pageProps}) {
  console.log(fetchRedditData());
  return <Component {...pageProps} />;
}

export default MyApp;
