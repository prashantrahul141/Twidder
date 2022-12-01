import { Colors } from '@constants/colors';
import { Avatar, Button, Card, CardMedia, IconButton } from '@mui/material';
import path from 'path';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import CreateIcon from '@mui/icons-material/Create';

const ProfileBanner = ({
  bannerImg,
  avatarImg,
  posts,
  followers = 0,
  following = 0,
}: {
  bannerImg: string;
  avatarImg: string;
  posts: number;
  followers: number;
  following: number;
}) => {
  const bannerTableStyles = {
    padding: '4px 10px 0px 10px',
    margin: '0px 1px',
    width: 'fit-content',
    textAlign: 'center',
    fontSize: 'clamp(0.5rem, 0.5rem + 1vw, 1rem)',
    color: Colors.standard_white,
  } as DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  return (
    <>
      <div
        style={{
          width: '100vw',
          background: `${Colors.background}`,
          height: 'clamp(250px, 60vw, 375px)',
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
              width: 'clamp(70px, 17vw, 115px)',
              height: 'clamp(70px, 17vw, 115px)',
              left: '20px',
            }}
            src={avatarImg}></Avatar>
          <div
            style={{
              position: 'absolute',
              left: 'min(150px, 25%)',
              width: 'max-content',
              height: '14%',
              display: 'flex',
            }}>
            <div style={bannerTableStyles}>
              Twiddets
              <br />
              <b>{posts}</b>
            </div>
            <div style={bannerTableStyles}>
              Followers
              <br />
              <b>{followers}</b>
            </div>
            <div style={bannerTableStyles}>
              Followings
              <br />
              <b>{following}</b>
            </div>
          </div>
          <IconButton
            aria-label='edit profile'
            size='small'
            href='/profile/edit'
            sx={{
              position: 'absolute',
              right: '15px',
              margin: '15px 0px 0px 0px',
            }}>
            <CreateIcon
              fontSize='small'
              sx={{ color: `${Colors.standard_white}` }}
            />
          </IconButton>
        </Card>
      </div>
    </>
  );
};

export default ProfileBanner;
