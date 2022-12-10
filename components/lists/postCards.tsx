import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { TypePost } from 'types/types';
import CompPostCard from './postCard';

const PostCards = ({ _postcard }: { _postcard: TypePost[] }) => {
  const router = useRouter();

  return (
    <>
      <Box
        sx={{
          maxWidth: 600,
          margin: router.pathname === '/' ? '70px auto' : '20px auto',
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

export default PostCards;
