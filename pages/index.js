import { Typography } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Seas Dreams</title>
        <meta
          name="description"
          content="The Ecommerce website by Seas Dreams"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography component="h1" variant="h1">
        Seas Dreams LLC
      </Typography>
    </div>
  );
}
