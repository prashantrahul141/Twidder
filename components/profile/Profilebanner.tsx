import { Colors } from '@constants/colors';
import { Avatar, Card, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useSession } from 'next-auth/react';
import path from 'path';

const ProfileBanner = ({
  bannerImg,
  avatarImg,
  posts,
  followers = 0,
  following = 0,
  likes = 0,
}: {
  bannerImg: string;
  avatarImg: string;
  posts: number;
  followers: number;
  following: number;
  likes: number;
}) => {
  const { data: session, status } = useSession();

  return (
    <>
      <div
        style={{
          width: '100vw',
          background: `${Colors.background}`,
          height: 'clamp(250px, 60vw, 375px)',
          position: 'fixed',
          boxShadow: 'none',
          top: '0',
          marginTop: '62px',
        }}>
        <Card
          sx={{
            width: '100vw',
            height: 'clamp(250px, 60vw, 375px)',
            background: 'none',
            position: 'absolute',
            boxShadow: 'none',
            maxWidth: '900px',
            left: '50%',
            transform: 'translate(-50%)',
          }}>
          <CardMedia
            image={
              bannerImg || path.join(__dirname, 'static/defaultBanner.webp')
            }
            sx={{
              width: '100%',
              height: '75%',
            }}></CardMedia>
          <Avatar
            sx={{
              position: 'absolute',
              top: '60%',
              width: 'clamp(90px, 20vw, 130px)',
              height: 'clamp(90px, 20vw, 130px)',
              left: '20px',
            }}
            src={avatarImg}></Avatar>
          <Box
            display={'flex'}
            sx={{
              border: '2px solid red',
              display: 'inline-block',
              width: '100%',
            }}>
            <Box
              sx={{
                width: '33%',
                border: '2px solid red',
              }}>
              <Typography
                sx={{
                  color: Colors.standard_white,
                }}>
                Twiddets
                <br />
                <b>{12}</b>
              </Typography>
            </Box>
            <Box
              sx={{
                width: '33%',
                border: '2px solid red',
              }}>
              <Typography
                sx={{
                  color: Colors.standard_white,
                }}>
                Followers
                <br />
                <b>{followers}</b>
              </Typography>
            </Box>
          </Box>
        </Card>
      </div>
    </>
  );
};

export default ProfileBanner;
