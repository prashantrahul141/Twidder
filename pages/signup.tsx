import CompHead from '@components/common/CompHead';
import SignUplogIn from '@components/forms/SignUplogIn';
import { Colors } from '@constants/colors';
import { Box, Typography } from '@mui/material';

const SignUp = () => {
  return (
    <>
      <CompHead headTitle='Sign Up'></CompHead>
      <Box
        sx={{ display: 'block', alignContent: 'center', textAlign: 'center' }}>
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
        <SignUplogIn btnString='Sign up'></SignUplogIn>
      </Box>
    </>
  );
};

export default SignUp;
