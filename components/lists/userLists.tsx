import UserList from '@components/lists/userList';
import { Box } from '@mui/material';
import { User } from '@prisma/client';

const UserLists = ({ _userlist }: { _userlist: User[] }) => {
  return (
    <>
      <Box
        sx={{
          maxWidth: 600,
          margin: '20px auto',
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
