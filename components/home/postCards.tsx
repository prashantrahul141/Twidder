import { Box } from '@mui/material';
import { TypePost } from 'types/types';
import CompPostCard from './postCard';

const PostCards = ({ _postcard }: { _postcard: TypePost[] }) => {
  return (
    <>
      <Box
        sx={{
          maxWidth: 600,
          margin: '75px auto',
        }}>
        {_postcard.map((_eachpost) => {
          return (
            <>
              <CompPostCard
                key={_eachpost.authorUsername}
                _postcard={_eachpost}></CompPostCard>
            </>
          );
        })}
      </Box>
    </>
  );
};

export default PostCards;
