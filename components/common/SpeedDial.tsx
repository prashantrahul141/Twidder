import { FC } from 'react';
import { useRouter } from 'next/router';
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import CreateIcon from '@mui/icons-material/Create';
import { Colors } from '@constants/colors';

const CompSpeedDial: FC = () => {
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
    <SpeedDial
      ariaLabel='Speed Dial'
      sx={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
      }}
      icon={<SpeedDialIcon />}>
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          sx={{
            backgroundColor: Colors.background,
            color: Colors.standard_white,
            ':hover': {
              backgroundColor: Colors.standard_white,
              color: Colors.background,
            },
          }}
          tooltipTitle={action.name}
          onClick={() => {
            router.push(action.url_);
          }}
        />
      ))}
    </SpeedDial>
  );
};

export default CompSpeedDial;
