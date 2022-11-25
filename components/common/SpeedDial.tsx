import { FC } from 'react';
import { useRouter } from 'next/router';
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import CreateIcon from '@mui/icons-material/Create';
import { Colors } from '@constants/colors';
import { useSession } from 'next-auth/react';

const CompSpeedDial: FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const actions = [
    { icon: <HomeIcon />, name: 'Home', url_: '/' },
    { icon: <ExploreIcon />, name: 'Explore', url_: '/explore' },
    {
      icon: <NotificationsIcon />,
      name: 'Notificaions',
      url_: '/notifications',
    },
    { icon: <PersonIcon />, name: 'Profile', url_: '/profile' },
    { icon: <CreateIcon />, name: 'Create', url_: '/create' },
  ];
  return (
    <>
      {status === 'authenticated' && (
        <SpeedDial
          ariaLabel='Speed Dial'
          sx={{
            position: 'fixed',
            bottom: '10%',
            right: 'min(10%, 100px)',
          }}
          icon={<SpeedDialIcon />}>
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              sx={{
                backgroundColor: Colors.blue_background,
                color: Colors.standard_white,
                ':hover': {
                  backgroundColor: Colors.standard_white,
                  color: Colors.blue_background,
                },
              }}
              tooltipTitle={action.name}
              onClick={() => {
                router.push(action.url_);
              }}
            />
          ))}
        </SpeedDial>
      )}
    </>
  );
};

export default CompSpeedDial;
