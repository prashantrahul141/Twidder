import CssInputAdornment from '@components/common/CssInputAdornment';
import CssTextField from '@components/common/CssTextField';
import { User } from '@prisma/client';

const EditFormUsernameInput = ({
  _userName,
}: {
  _userName: User['username'];
}) => {
  return (
    <CssTextField
      id='username-field'
      label='Username'
      variant='outlined'
      defaultValue={_userName}
      sx={{
        width: '100%',
        maxWidth: '450px',
        marginTop: '10px',
        marginBottom: '10px',
      }}
      InputProps={{
        startAdornment: (
          <CssInputAdornment position='start'>@</CssInputAdornment>
        ),
      }}
    />
  );
};

export default EditFormUsernameInput;
