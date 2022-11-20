import { faker } from '@faker-js/faker';
import CompHead from '@components/common/CompHead';
import CompSpeedDial from '@components/common/SpeedDial';
import PostCards from '@components/common/home/postCards';
import { TypePost } from 'types/types';

const Home = () => {
  const sampleTwdeetDatas: TypePost[] = [
    {
      authorName: faker.name.fullName(),
      authorUsername: faker.internet.userName(),
      authorProfile: faker.internet.avatar(),
      postTime: faker.date.recent(10).toLocaleDateString(),
      textData: faker.lorem.lines(2),
      likes: faker.random.numeric(),
      photoData: null,
    },
    {
      authorName: faker.name.fullName(),
      authorUsername: faker.internet.userName(),
      authorProfile: faker.internet.avatar(),
      postTime: faker.date.recent(10).toLocaleDateString(),
      textData: faker.lorem.lines(3),
      likes: faker.random.numeric(),
      photoData: faker.image.image(),
    },
  ];

  return (
    <div>
      <CompHead headTitle='Home'></CompHead>
      <CompSpeedDial></CompSpeedDial>
      <PostCards _postcard={sampleTwdeetDatas}></PostCards>
    </div>
  );
};

export default Home;
