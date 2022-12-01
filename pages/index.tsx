import CompHead from '@components/common/CompHead';
import CompSpeedDial from '@components/common/SpeedDial';
import PostCards from '@components/lists/postCards';
import { TypePost } from 'types/types';
import TopBar from '@components/common/Topbar';

const Home = () => {
  let sampleTwdeetDatas: TypePost[] = [];

  for (let i = 0; i < 10; i++) {
    sampleTwdeetDatas.push({
      authorId: `thisisanid${i}`,
      authorName: 'fullnamne',
      authorUsername: 'username',
      authorProfile:
        'https://i.picsum.photos/id/880/536/354.jpg?hmac=Tpt84Al9HFHuVxRHGO8W4_7jGxTE3zkPbVrg6GZGVSU',
      postId: '1215454',
      postTime: '12/7/2022',
      textData: 'this is a post data.',
      likes: '1',
      photoData:
        'https://i.picsum.photos/id/880/536/354.jpg?hmac=Tpt84Al9HFHuVxRHGO8W4_7jGxTE3zkPbVrg6GZGVSU',
    });
  }

  return (
    <div>
      <CompHead headTitle='Home'></CompHead>
      <TopBar></TopBar>
      <CompSpeedDial></CompSpeedDial>
      <PostCards _postcard={sampleTwdeetDatas}></PostCards>
    </div>
  );
};

export default Home;
