import { Box } from '@mui/material';
import { TypePost } from 'types/types';
import CompPostCard from './postCard';

const PostCards = ({ _postcard }: { _postcard: TypePost[] }) => {
  return (
    <>
      {_postcard.map((_eachpost) => {
        return (
          <>
            <Box
              sx={{
                maxWidth: 550,
                margin: '0 auto',
              }}>
              <CompPostCard
                key={_eachpost.authorUsername}
                _postcard={_eachpost}></CompPostCard>
            </Box>
          </>
        );
      })}
    </>
  );
};

export default PostCards;
