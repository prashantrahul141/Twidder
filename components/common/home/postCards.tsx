import { TypePost } from 'types/types';
import CompPostCard from './postCard';

const PostCards = ({ _postcard }: { _postcard: TypePost[] }) => {
  return (
    <>
      {_postcard.map((_eachpost) => {
        return (
          <>
            <CompPostCard
              key={_eachpost.authorUsername}
              _postcard={_eachpost}></CompPostCard>
          </>
        );
      })}
    </>
  );
};

export default PostCards;
