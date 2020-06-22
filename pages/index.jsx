import Head from 'next/head';

import styles from '../style/module/index.module.scss';

export default function Home() {
  return (
    <main className={`l-main ${styles['p-index']}`}>
      <Head>
        <title>NEXT-TEMPLATE</title>
      </Head>
      <p>index page</p>
    </main>
  );
}
