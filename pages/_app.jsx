import GlobalHeader from '../components/layout/header';
import GlobalNav from '../components/layout/nav';
import '../style/style.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalHeader />
      <Component {...pageProps} />
      <GlobalNav />
    </>
  );
};

export default MyApp;
