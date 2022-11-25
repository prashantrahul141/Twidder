import { Button, FormControl } from '@mui/material';
import { signIn } from 'next-auth/react';
import { Colors } from '@constants/colors';
import { FC } from 'react';

const Signin: FC = () => {
  return (
    <FormControl
      sx={{
        border: `1pt solid ${Colors.standard_light_white_400}`,
        borderRadius: '5px',
        width: '95vw',
        maxWidth: '400px',
        height: 'fit-content',
        marginTop: '50px',
        padding: '30px',
      }}>
      <Button
        onClick={() => signIn('google')}
        variant='outlined'
        href=''
        sx={{
          height: '45px',
          marginBottom: '10px',
        }}>
        Sign in with Google
      </Button>
      <Button
        onClick={() => signIn('github')}
        variant='outlined'
        href=''
        sx={{
          height: '45px',
          marginBottom: '10px',
          marginTop: '10px',
        }}>
        Sign in with Github
      </Button>
      <Button
        onClick={() => signIn('discord')}
        variant='outlined'
        href=''
        sx={{
          height: '45px',
          marginBottom: '10px',
          marginTop: '10px',
        }}>
        Sign in with Discord
      </Button>
    </FormControl>
  );
};

export default Signin;
