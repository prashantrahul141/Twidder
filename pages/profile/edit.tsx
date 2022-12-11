import CompHead from '@components/common/CompHead';
import CompSpeedDial from '@components/common/SpeedDial';
import TopBar from '@components/common/Topbar';
import Editform from '@components/forms/Editform';
import prismaClient from '@lib/prismaDB';
import { Box } from '@mui/material';
import { User } from '@prisma/client';
import { GetServerSidePropsContext } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import router from 'next/router';
import { authOptions } from 'pages/api/auth/[...nextauth]';

const Edit = ({ user }: { user: User }) => {
  const { data: session, status } = useSession();
  if (status === 'unauthenticated') {
    router.push('/signin');
  } else {
    return (
      <>
        <CompHead headTitle='Edit'></CompHead>
        <TopBar></TopBar>
        <CompSpeedDial></CompSpeedDial>

        <Box sx={{ maxWidth: 600, margin: '75px auto' }}>
          <Editform user={user}></Editform>
        </Box>
      </>
    );
  }
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  if (session) {
    const user: User | null = await prismaClient.user.findUnique({
      where: {
        email: session.user?.email || '',
      },
    });
    if (user) {
      return {
        props: {
          user: JSON.parse(JSON.stringify(user)),
        },
      };
    }
  }
  return {
    props: {},
  };
};
export default Edit;
