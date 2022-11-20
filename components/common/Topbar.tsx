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

const TopBar = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnterLogin = () => {
    setIsHovering(true);
  };

  const handleMouseEnterLeave = () => {
    setIsHovering(false);
  };

  const loginAvatar = (loggedIn: boolean) => {
    if (loggedIn) {
      return <Avatar alt='' src='/static/images/avatar/2.jpg' />;
    } else {
      return (
        <Button color='inherit'>
          <Link
            href={'./login'}
            style={{
              textDecoration: 'none',
              color: isHovering ? 'white' : Colors.standard_light_white,
            }}
            onMouseEnter={handleMouseEnterLogin}
            onMouseLeave={handleMouseEnterLeave}>
            Login
          </Link>
        </Button>
      );
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position='fixed'
          sx={{
            height: '60px',
            marginBottom: '30px',
            background: `${Colors.background}`,
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
    </>
  );
};

export default TopBar;
