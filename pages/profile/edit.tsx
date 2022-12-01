import CompHead from '@components/common/CompHead';
import CompSpeedDial from '@components/common/SpeedDial';
import TopBar from '@components/common/Topbar';
import { Colors } from '@constants/colors';
import prismaClient from '@lib/prismaDB';
import { Box, Card, styled, TextField, Typography } from '@mui/material';
import { User } from '@prisma/client';
import { NextPageContext } from 'next';
import { getSession, useSession } from 'next-auth/react';
import router from 'next/router';

const CssTextField = styled(TextField)({
  '& input': {
    color: Colors.standard_white,
    fontFamily: 'Lato',
  },
  '& label': {
    color: Colors.standard_light_white,
  },
  '& label.Mui-focused': {
    color: Colors.standard_white,
  },
  '&': {
    color: Colors.standard_white,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: Colors.standard_light_white,
    },
    '&:hover fieldset': {
      borderColor: Colors.standard_white,
    },
    '&.Mui-focused fieldset': {
      borderColor: Colors.standard_white,
    },
  },
});

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
          <Card
            sx={{
              maxWidth: 600,
              backgroundColor: Colors.background,
              border: `0.2pt inset ${Colors.standard_light_white}`,
              borderRadius: '5px',
              margin: '100px 10px',
              padding: '20px 10px 20px 10px',
              textAlign: 'center',
            }}>
            <Typography
              fontSize={'1.6rem'}
              fontFamily={'Roboto'}
              letterSpacing={'1px'}
              sx={{
                margin: '0px 0px 15px 0px',
                textAlign: 'center',
                color: Colors.standard_light_white,
              }}>
              EDIT
            </Typography>
            <CssTextField
              id='outlined-basic'
              label='Name'
              value={user.name}
              variant='outlined'
              sx={{
                width: '100%',
                maxWidth: '450px',
                marginBottom: '10px',
              }}
            />
            <CssTextField
              id='outlined-basic'
              label='Username'
              variant='outlined'
              value={user.username}
              sx={{
                width: '100%',
                maxWidth: '450px',
                marginTop: '10px',
                marginBottom: '10px',
              }}
            />
          </Card>
        </Box>
      </>
    );
  }
};

export const getServerSideProps = async (context: NextPageContext) => {
  const session = await getSession(context);
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
