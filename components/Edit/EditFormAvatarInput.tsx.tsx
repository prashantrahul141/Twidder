import { Avatar } from '@mui/material';
import { User } from '@prisma/client';
import { useState } from 'react';

const EditFormImageInput = ({
  userImage,
  setSizeWarning,
}: {
  userImage: User['image'];
  setSizeWarning: Function;
}) => {
  const [currentImg, setCurrentImg] = useState(userImage);

  // updating <Avatar> component image on upload
  const onImageChange = () => {
    const avatarImgInput = document.getElementById(
      'avatarImgInput'
    ) as HTMLInputElement;

    if (avatarImgInput.files) {
      const file = avatarImgInput.files[0];
      if (file) {
        if (file.size / 1000000 < 5) {
          const objectUrl = URL.createObjectURL(file);
          setCurrentImg(objectUrl);
        } else {
          setSizeWarning(true);
        }
      }
    }
  };

  return (
    <>
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
        accept='.jpg, .png'
        id='avatarImgInput'
        style={{
          visibility: 'hidden',
          position: 'absolute',
          top: -1000,
          left: -1000,
        }}
        onChange={onImageChange}></input>
    </>
  );
};

export default EditFormImageInput;
