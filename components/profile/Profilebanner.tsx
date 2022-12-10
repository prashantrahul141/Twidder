import { Colors } from '@constants/colors';
import { Avatar, Card, CardMedia, IconButton, Typography } from '@mui/material';
import path from 'path';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import Link from 'next/link';
import { Post, User } from '@prisma/client';
import { TypePost } from 'types/types';
import possibleTabs from 'types/consts';
import { color } from '@mui/system';

const ProfileBanner = ({
  user,
  currentTab,
}: {
  user: User & {
    followings: User[];
    followers: User[];
    likes: Post[];
    posts: Post[] & TypePost[];
  };
  currentTab: string;
}) => {
  const bannerTableStyles = {
    padding: '4px 5px 0px 10px',
    margin: '0px 1px',
    width: 'fit-content',
    textAlign: 'center',
    fontSize: 'clamp(0.7rem, 2.5vw, 0.9rem)',
  } as DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

  return (
    <>
      <div
        style={{
          width: '100vw',
          background: `${Colors.background}`,
          height: 'clamp(400px, 70vw, 450px)',
          boxShadow: 'none',
          top: '0',
          marginTop: '62px',
        }}>
        <Card
          sx={{
            width: '95vw',
            height: 'clamp(400px, 70vw, 450px)',
            background: 'none',
            position: 'absolute',
            boxShadow: 'none',
            maxWidth: '900px',
            left: '50%',
            transform: 'translate(-50%)',
          }}>
          <CardMedia
            image={
              user.banner || path.join(__dirname, 'static/defaultBanner.webp')
            }
            sx={{
              width: '100%',
              height: '60%',
            }}></CardMedia>
          <Avatar
            sx={{
              position: 'absolute',
              top: '48%',
              width: 'clamp(80px, 17vw, 115px)',
              height: 'clamp(80px, 17vw, 115px)',
              left: '10px',
            }}
            src={
              user.image || path.join(__dirname, 'static/defaultAvatar.webp')
            }></Avatar>
          <div
            style={{
              position: 'absolute',
              left: 'min(150px, 25%)',
              width: 'max-content',
              height: '14%',
              display: 'flex',
            }}>
            <Link href={'/profile'} style={{ textDecoration: 'none' }}>
              <div
                style={{
                  ...bannerTableStyles,
                  color:
                    currentTab === possibleTabs.twiddets
                      ? Colors.accent_blue
                      : Colors.standard_white,
                }}>
                Twiddets
                <br />
                <b>{user.posts.length}</b>
              </div>
            </Link>

            <Link
              href={'/profile?tab=followers'}
              style={{ textDecoration: 'none' }}>
              <div
                style={{
                  ...bannerTableStyles,
                  color:
                    currentTab === possibleTabs.followers
                      ? Colors.accent_blue
                      : Colors.standard_white,
                }}>
                Followers
                <br />
                <b>{user.followers.length}</b>
              </div>
            </Link>

            <Link
              href={'/profile?tab=followings'}
              style={{ textDecoration: 'none' }}>
              <div
                style={{
                  ...bannerTableStyles,
                  color:
                    currentTab === possibleTabs.followings
                      ? Colors.accent_blue
                      : Colors.standard_white,
                }}>
                Followings
                <br />
                <b>{user.followings.length}</b>
              </div>
            </Link>
          </div>
          <IconButton
            aria-label='edit profile'
            size='small'
            href='/profile/edit'
            sx={{
              position: 'absolute',
              right: '0px',
              margin: '15px 0px 0px 0px',
            }}>
            <CreateIcon
              fontSize='small'
              sx={{ color: `${Colors.standard_white}` }}
            />
          </IconButton>
          <div style={{ marginTop: 'max(50px,8%)', marginLeft: '10px' }}>
            <Typography
              fontFamily={'Oswald'}
              letterSpacing='1px'
              fontSize={'clamp(1.3rem, 5vw, 1.9rem)'}
              color={Colors.standard_white}>
              {user.name}
            </Typography>
            <Typography
              fontFamily={'Roboto Mono'}
              letterSpacing='0.1'
              fontSize={'clamp(0.7rem, 2.5vw, 0.9rem)'}
              color={Colors.standard_light_white}>
              @{user.username}
            </Typography>
            <Typography
              fontFamily={'Roboto Mono'}
              letterSpacing='0.1'
              fontSize={'clamp(0.7rem, 2.5vw, 0.9rem)'}
              marginTop='10px'
              color={Colors.standard_light_white_400}>
              joined on {`${user.author_joined_on}`.split('T')[0]}
            </Typography>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ProfileBanner;
