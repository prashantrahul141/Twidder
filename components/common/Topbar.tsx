import {
  AppBar,
  Avatar,
  Box,
  Button,
  Toolbar,
  Typography,
} from '@mui/material';
import { Colors } from '@constants/colors';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

const TopBar = () => {
  const router = useRouter();
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnterLogin = () => {
    setIsHovering(true);
  };

  const handleMouseEnterLeave = () => {
    setIsHovering(false);
  };

  const loginAvatar = (loggedIn: boolean) => {
    if (loggedIn) {
      return (
        <Avatar
          alt=''
          onClick={() => {
            router.push('./profile');
          }}
          sx={{ cursor: 'pointer' }}
          src='/static/images/avatar/2.jpg'
        />
      );
    } else {
      return (
        <Button color='inherit'>
          <Link
            href={'./signin'}
            style={{
              textDecoration: 'none',
              color: isHovering ? 'white' : Colors.standard_light_white,
            }}
            onMouseEnter={handleMouseEnterLogin}
            onMouseLeave={handleMouseEnterLeave}>
            Sign in
          </Link>
        </Button>
      );
    }
  };

  return (
    <>
      <div
        style={{
          width: '100vw',
          background: `${Colors.background}`,
          height: '60px',
          boxShadow: '0px 3px 10px black',
          position: 'fixed',
          zIndex: '1',
          top: '0',
        }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position='fixed'
            sx={{
              height: '60px',
              background: `${Colors.background}`,
              boxShadow: 'none',
              maxWidth: '900px',
              left: '50%',
              transform: 'translate(-50%)',
            }}>
            <Toolbar>
              <Typography
                color={Colors.standard_white}
                fontFamily={'Oswald'}
                letterSpacing='0.09rem'
                fontSize={'1.8rem'}
                variant='h4'
                component='div'
                sx={{ flexGrow: 1 }}>
                <Link
                  href={'./'}
                  style={{ textDecoration: 'none', color: Colors.accent_blue }}>
                  Twidder
                </Link>
              </Typography>
              {loginAvatar(false)}
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </>
  );
};

export default TopBar;
