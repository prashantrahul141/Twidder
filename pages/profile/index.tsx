import CompHead from '@components/common/CompHead';
import CompSpeedDial from '@components/common/SpeedDial';
import TopBar from '@components/common/Topbar';
import { Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Profile = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return (
      <>
        <Typography
          fontFamily={'Lato'}
          letterSpacing='1px'
          sx={{
            color: 'white',
            position: 'absolute',
            left: '50%',
            top: '50%',
          }}>
          loading..
        </Typography>
      </>
    );
  } else if (status === 'unauthenticated') {
    router.push('/signin');
  } else if (status === 'authenticated') {
    console.log(session);
    return (
      <>
        <CompHead headTitle={session.user?.name || 'Profile'}></CompHead>
        <TopBar></TopBar>
        <CompSpeedDial></CompSpeedDial>
      </>
    );
  }
};

export default Profile;
