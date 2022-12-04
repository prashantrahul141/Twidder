import { Box, useMediaQuery } from '@mui/material';
import { TypePost } from 'types/types';
import CompPostCard from '@components/lists/postCard';

const ProfilePostCards = ({ _postcard }: { _postcard: TypePost[] }) => {
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
        {_postcard.map((_eachpost) => {
          return (
            <CompPostCard
              key={_eachpost.authorId}
              _postcard={_eachpost}></CompPostCard>
          );
        })}
      </Box>
    </>
  );
};

export default ProfilePostCards;
