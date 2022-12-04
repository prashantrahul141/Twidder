import useMediaQuery from '@mui/material/useMediaQuery';
import { User } from '@prisma/client';

const ProfileSubDetails = ({ user }: { user: User }) => {
  return (
    <>
      <div>
        <p>{user.name}</p>
        <p>@{user.username}</p>
        <p>{}</p>
        <p>{user.author_bio}</p>
      </div>
    </>
  );
};

export default ProfileSubDetails;
