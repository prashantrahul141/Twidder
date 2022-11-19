import Head from 'next/head';

const CompHead = ({ headTitle }: { headTitle: string }) => {
  return (
    <Head>
      <title>{`Twidder | ${headTitle}`}</title>
      <meta name='description' content='My Twidder Clone.' />
    </Head>
  );
};

export default CompHead;
