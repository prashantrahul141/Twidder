import { Colors } from '@constants/colors';
import { Avatar, Button, Card, CardMedia } from '@mui/material';
import path from 'path';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import CreateIcon from '@mui/icons-material/Create';

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
  const bannerTableStyles = {
    padding: '4px 10px 0px 10px',
    margin: '0px 1px',
    width: 'fit-content',
    textAlign: 'center',
    fontSize: 'clamp(12px, 0.9rem, 18px)',
    color: Colors.standard_white,
  } as DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
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
            <div style={bannerTableStyles}>
              Likes
              <br />
              <b>{likes}</b>
            </div>
          </div>
          <Button
            sx={{
              height: '40px',
              position: 'absolute',
              right: '15px',
              margin: '5px 0px 0px 0px',
            }}
            variant='outlined'
            href='/profile/edit'>
            <CreateIcon />
          </Button>
        </Card>
      </div>
    </>
  );
};

export default ProfileBanner;
