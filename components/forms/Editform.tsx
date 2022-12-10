import CssInputAdornment from '@components/common/CssInputAdornment';
import CssTextField from '@components/common/CssTextField';
import { Colors } from '@constants/colors';
import { Avatar, Card, Typography } from '@mui/material';
import { User } from '@prisma/client';
import path from 'path';
import { useState } from 'react';

const Editform = ({ user }: { user: User }) => {
  const [currentImg, setCurrentImg] = useState(
    user.image || path.join(__dirname, 'static/defaultavatar.png')
  );

  // updating <Avatar> component image on upload
  const onImageChange = () => {
    const avatarImgInput = document.getElementById(
      'avatarImgInput'
    ) as HTMLInputElement;

    if (avatarImgInput.files) {
      const file = avatarImgInput.files[0];
      if (file) {
        const avatarComp = document.getElementById(
          'avatarComp'
        ) as HTMLImageElement;
        const objectUrl = URL.createObjectURL(file);
        setCurrentImg(objectUrl);
      }
    }
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 600,
          backgroundColor: Colors.background,
          border: `0.2pt inset ${Colors.standard_light_white}`,
          borderRadius: '5px',
          margin: '100px 10px',
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

        <Avatar
          alt='Avatar'
          id='avatarComp'
          sx={{
            margin: '40px auto',
            width: '80px',
            height: '80px',
            cursor: 'pointer',
          }}
          onClick={() => {
            (
              document.getElementById('avatarImgInput') as HTMLInputElement
            ).click();
          }}
          src={currentImg}></Avatar>

        <input
          type={'file'}
          id='avatarImgInput'
          style={{ visibility: 'hidden', position: 'absolute' }}
          onChange={onImageChange}></input>

        <CssTextField
          id='outlined-basic'
          label='Name'
          value={user.name}
          variant='outlined'
          sx={{
            width: '100%',
            maxWidth: '450px',
            marginBottom: '10px',
          }}
        />

        <CssTextField
          id='outlined-basic'
          label='Username'
          variant='outlined'
          value={user.username}
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
      </Card>
    </>
  );
};

export default Editform;
