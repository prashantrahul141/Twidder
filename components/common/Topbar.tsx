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
import { signOut, useSession } from 'next-auth/react';
import path from 'path';

const TopBar = () => {
  const { data: session, status } = useSession();

  const [isHovering, setIsHovering] = useState(false);
  const [avatarClick, setAvatarClick] = useState(false);
  return (
    <>
      <div
        style={{
          width: '100vw',
          background: `${Colors.background}`,
          height: '60px',
          boxShadow: `0px 3px 10px ${Colors.shadow_light}`,
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

              {status === 'authenticated' && (
                <Avatar
                  alt=''
                  onMouseEnter={() => setAvatarClick(true)}
                  onMouseLeave={() => setAvatarClick(false)}
                  sx={{ cursor: 'pointer' }}
                  src={
                    session.user?.image ||
                    path.join(__dirname, 'static/defaultavatar.png')
                  }
                />
              )}

              {status === 'authenticated' && avatarClick && (
                <Box
                  onMouseEnter={() => setAvatarClick(true)}
                  onMouseLeave={() => setAvatarClick(false)}
                  sx={{
                    width: '120px',
                    height: 'fit-content',
                    position: 'absolute',
                    right: '35px',
                    top: '50%',
                    borderRadius: '10px',
                    background: Colors.background_light,
                    boxShadow: `0px 3px 10px ${Colors.shadow_light}`,
                  }}>
                  <Typography
                    letterSpacing={'0.5px'}
                    sx={{
                      width: '100%',
                      textAlign: 'center',
                      margin: '15px 0px 0px 0px',
                    }}>
                    <Link
                      href={'/profile'}
                      style={{
                        textDecoration: 'none',
                        color: Colors.standard_light_white,
                      }}>
                      Profile
                    </Link>
                  </Typography>
                  <Typography
                    letterSpacing={'0.5px'}
                    onClick={() => signOut()}
                    sx={{
                      width: '100%',
                      textAlign: 'center',
                      margin: '10px 0px 15px 0px',
                      cursor: 'pointer',
                      color: Colors.standard_light_white,
                    }}>
                    Sign out
                  </Typography>
                </Box>
              )}

              {status === 'unauthenticated' && (
                <Button color='inherit'>
                  <Link
                    href={'/signin'}
                    style={{
                      textDecoration: 'none',
                      color: isHovering ? 'white' : Colors.standard_light_white,
                    }}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}>
                    Sign in
                  </Link>
                </Button>
              )}
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </>
  );
};

export default TopBar;
