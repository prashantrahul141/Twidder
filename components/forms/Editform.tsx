import CssTextField from '@components/common/CssTextField';
import { Colors } from '@constants/colors';
import { Button, Card, Typography } from '@mui/material';
import { User } from '@prisma/client';
import { useState } from 'react';
import EditFormImageInput from '@components/Edit/EditFormAvatarInput.tsx';
import EditFormBannerInput from '@components/Edit/EditFormBannerInput';
import EditFormSizeWarning from '@components/Edit/EditFormSizeWarning';
import EditFormUsernameInput from '@components/Edit/EditFormUsernameInput';

const Editform = ({ user }: { user: User }) => {
  const [sizeWarning, setSizeWarning] = useState(false);

  return (
    <>
      {sizeWarning && (
        <EditFormSizeWarning
          setSizeWarning={setSizeWarning}></EditFormSizeWarning>
      )}

      <Card
        sx={{
          maxWidth: 600,
          backgroundColor: Colors.background,
          border: `0.2pt inset ${Colors.standard_light_white}`,
          borderRadius: '5px',
          margin: '100px 0px',
          padding: '20px 10px 20px 10px',
          textAlign: 'center',
        }}>
        <Typography
          fontSize={'1.6rem'}
          fontFamily={'Roboto'}
          letterSpacing={'1px'}
          sx={{
            margin: '0px 0px 15px 0px',
            textAlign: 'center',
            color: Colors.standard_light_white,
          }}>
          EDIT
        </Typography>

        <EditFormImageInput
          userImage={user.image}
          setSizeWarning={setSizeWarning}></EditFormImageInput>

        <EditFormBannerInput
          userBanner={user.banner}
          setSizeWarning={setSizeWarning}></EditFormBannerInput>

        <CssTextField
          id='outlined-basic'
          label='Name'
          defaultValue={user.name}
          variant='outlined'
          sx={{
            width: '100%',
            maxWidth: '450px',
            marginBottom: '10px',
          }}
        />

        <EditFormUsernameInput
          _userName={user.username}></EditFormUsernameInput>

        <Button
          sx={{
            width: '100%',
            maxWidth: '450px',
            marginTop: '10px',
            marginBottom: '10px',
          }}
          variant='outlined'
          size='medium'>
          save
        </Button>
      </Card>
    </>
  );
};

export default Editform;
