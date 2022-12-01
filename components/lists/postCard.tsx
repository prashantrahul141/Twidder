import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { Colors } from '@constants/colors';
import { TypePost } from 'types/types';
import { useRouter } from 'next/router';

const CompPostCard = ({ _postcard }: { _postcard: TypePost }) => {
  const router = useRouter();

  return (
    <>
      <Card
        sx={{
          maxWidth: 600,
          backgroundColor: Colors.background,
          border: `0.2pt inset ${Colors.standard_light_white}`,
          borderRadius: '5px',
          margin: '0px 10px',
          cursor: 'pointer',
        }}>
        <Stack
          direction='row'
          spacing={1.5}
          sx={{ marginLeft: 2, marginTop: 2 }}>
          <Avatar
            variant='circular'
            onClick={() => {
              router.push(`./${_postcard.authorUsername}`);
            }}
            src={`${_postcard.authorProfile}`}
          />
          <Stack spacing={0.1} direction='row'>
            <Typography
              fontWeight={400}
              color={Colors.standard_white}
              fontFamily={'Roboto'}
              fontSize='1rem'
              letterSpacing='0.025rem'
              display={'flex'}
              justifyContent='center'
              alignItems={'center'}
              onClick={() => {
                router.push(`./${_postcard.authorUsername}`);
              }}>
              {_postcard.authorName}&nbsp;
            </Typography>

            <Typography
              variant='body2'
              fontWeight={400}
              fontFamily={'Roboto Mono'}
              fontSize={'0.6rem'}
              letterSpacing='0.025rem'
              display={'flex'}
              justifyContent='center'
              alignItems={'center'}
              color={Colors.standard_light_white}>
              • {_postcard.postTime}
            </Typography>
          </Stack>
        </Stack>

        <CardContent
          onClick={() => {
            router.push(`./post/${_postcard.postId}`);
          }}>
          <Typography
            variant='body2'
            fontFamily={'Lato'}
            color={Colors.standard_white}
            fontWeight={400}
            letterSpacing='0.04rem'
            fontSize={'0.9rem'}>
            {_postcard.textData}
          </Typography>
          {_postcard.photoData !== null && (
            <CardMedia
              component='img'
              height='300'
              image={`${_postcard.photoData}`}
              alt='img'
              sx={{
                marginTop: '10px',
                borderRadius: '15px',
              }}
            />
          )}
        </CardContent>

        <CardActions>
          <IconButton aria-label='like'>
            <FavoriteBorderOutlinedIcon
              sx={{
                color: `${Colors.standard_white}`,
                transition: 'all 0.1s ease-in-out',
                ':hover': {
                  color: `${Colors.like_hover}`,
                },
              }}
            />
          </IconButton>
          <IconButton aria-label='comment'>
            <CommentOutlinedIcon
              sx={{
                color: `${Colors.standard_white}`,
                transition: 'all 0.1s ease-in-out',
                ':hover': { color: `${Colors.comment_hover}` },
              }}
            />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareOutlinedIcon
              sx={{
                color: `${Colors.standard_white}`,
                transition: 'all 0.1s ease-in-out',
                ':hover': { color: `${Colors.share_hover}` },
              }}
            />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default CompPostCard;
