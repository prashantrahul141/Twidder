import { Colors } from '@constants/colors';
import { Avatar, Stack, Typography } from '@mui/material';
import { User } from '@prisma/client';
import router from 'next/router';

const UserList = ({ _each_user }: { _each_user: User }) => {
  return (
    <>
      <div
        style={{
          maxWidth: 600,
          backgroundColor: Colors.background,
          border: `0.1pt inset ${Colors.standard_light_white}`,
          borderRadius: '3px',
          margin: '0px 10px',
          cursor: 'pointer',
        }}
        onClick={() => router.push(`/user/${_each_user.username}`)}>
        <Stack
          direction='row'
          spacing={1.5}
          sx={{ marginLeft: 2, marginTop: 2, marginBottom: 2 }}>
          <Avatar
            sx={{ width: '45px', height: '45px' }}
            variant='circular'
            src={`${_each_user.image}`}
          />
          <Stack spacing={0.1} direction='column'>
            <Typography
              color={Colors.standard_white}
              fontFamily={'Roboto'}
              fontSize='1.1rem'
              letterSpacing='0.025rem'
              display={'flex'}
              justifyContent='center'
              alignItems={'center'}>
              {_each_user.name}
            </Typography>

            <Typography
              variant='body2'
              fontWeight={400}
              fontFamily={'Roboto Mono'}
              fontSize={'0.65rem'}
              letterSpacing='0.025rem'
              display={'flex'}
              justifyContent='center'
              alignItems={'center'}
              color={Colors.standard_light_white}>
              {_each_user.username}
            </Typography>
          </Stack>
        </Stack>
        <Typography
          variant='body2'
          fontWeight={400}
          fontFamily={'Roboto'}
          fontSize={'1rem'}
          letterSpacing='0.025rem'
          alignItems={'left'}
          margin='20px 20px 20px 20px'
          color={Colors.standard_light_white}>
          {_each_user.author_bio}
        </Typography>
      </div>
    </>
  );
};

export default UserList;
