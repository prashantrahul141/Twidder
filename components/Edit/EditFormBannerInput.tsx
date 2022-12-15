import { CardMedia } from '@mui/material';
import { User } from '@prisma/client';
import { useState } from 'react';

const EditFormBannerInput = ({
  userBanner,
  setSizeWarning,
}: {
  userBanner: User['banner'];
  setSizeWarning: Function;
}) => {
  const [currentBanner, setCurrentBanner] = useState(userBanner);

  const onBannerChange = () => {
    const bannerImgInput = document.getElementById(
      'bannerImgInput'
    ) as HTMLInputElement;

    if (bannerImgInput.files) {
      const file = bannerImgInput.files[0];
      if (file) {
        if (file.size / 1000000 < 5) {
          const objectUrl = URL.createObjectURL(file);
          setCurrentBanner(objectUrl);
        } else {
          setSizeWarning(true);
        }
      }
    }
  };

  return (
    <>
      <CardMedia
        component='img'
        image={currentBanner}
        alt='banner'
        sx={{
          width: '95%',
          height: 'fit-content',
          maxWidth: '450px',
          cursor: 'pointer',
          margin: '0px auto',
          marginBottom: '30px',
          borderRadius: '7px',
        }}
        onClick={() => {
          (
            document.getElementById('bannerImgInput') as HTMLInputElement
          ).click();
        }}
      />
      <input
        type={'file'}
        accept='.jpg, .png'
        id='bannerImgInput'
        style={{
          visibility: 'initial',
          position: 'absolute',
          top: -1000,
          left: -1000,
        }}
        onChange={onBannerChange}></input>
    </>
  );
};

export default EditFormBannerInput;
