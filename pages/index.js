// dependencies
import Head from 'next/head';
// elements
import { LinkBlob } from '../components/elements';
// layout
import { DefaultLayout } from '../layout';

const Home = ({
}) => {
  return (
    <DefaultLayout>
      <div className="container">
        <Head>
            <title>jomou</title>
        </Head>

        <h1>Hit the API by going to /api</h1>
        <LinkBlob linkDestination='/api' linkText='API' />
        <img src="/favicon.svg" alt='site-logo' />
      </div>
    </DefaultLayout>
  );
}

export default Home;