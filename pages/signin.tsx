import CompHead from '@components/common/CompHead';
import Signin from '@components/forms/Signin';
import { Colors } from '@constants/colors';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const SignIn = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === 'authenticated') {
    router.push('/');
  } else if (status === 'unauthenticated') {
    return (
      <>
        <CompHead headTitle='Sign In'></CompHead>
        <Box
          sx={{
            display: 'block',
            alignContent: 'center',
            textAlign: 'center',
          }}>
          <Link href='./' style={{ textDecoration: 'none' }}>
            <Box
              sx={{
                marginTop: '80px',
              }}>
              <Typography
                variant='h6'
                color={Colors.standard_light_white}
                fontFamily='Lato'
                fontSize={'0.8rem'}
                letterSpacing={0}
                sx={{
                  display: 'inline',
                }}>
                WELCOME TO&nbsp;
                <div>
                  <Typography
                    color={Colors.accent_blue}
                    variant='h2'
                    letterSpacing={1.9}
                    fontFamily={'Oswald'}
                    sx={{ display: 'inline' }}>
                    TWIDDER.
                  </Typography>
                </div>
              </Typography>
            </Box>
          </Link>
          <Signin></Signin>
        </Box>
      </>
    );
  }
};

export default SignIn;
