import UserList from '@components/lists/userList';
import { Box } from '@mui/material';
import { User } from '@prisma/client';
import useMediaQuery from '@mui/material/useMediaQuery';

const UserLists = ({ _userlist }: { _userlist: User[] }) => {
  const mobile_ = useMediaQuery('(max-width: 600px)');
  return (
    <>
      <Box
        sx={{
          maxWidth: 400,
          position: 'absolute',
          left: mobile_ ? '0' : '50%',
          margin: mobile_ ? '0px 10px 0px 10px' : '0px',
        }}>
        {_userlist.map((_each_user) => {
          return (
            <UserList key={_each_user.id} _each_user={_each_user}></UserList>
          );
        })}
      </Box>
    </>
  );
};

export default UserLists;
