import CompHead from '@components/common/CompHead';
import CompSpeedDial from '@components/common/SpeedDial';
import TopBar from '@components/common/Topbar';
import ProfileBanner from '@components/profile/Profilebanner';
import { getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import prismaClient from '@lib/prismaDB';
import { User, Post } from '@prisma/client';
import { NextPageContext } from 'next';
import PostCards from '@components/lists/postCards';
import { TypePost } from 'types/types';
import UserLists from '@components/lists/userLists';
import { Colors } from '@constants/colors';

const Profile = ({
  user,
}: {
  user: User & {
    followings: User[];
    followers: User[];
    likes: Post[];
    posts: Post[] & TypePost[];
  };
}) => {
  const sampleUsersList: User[] = [];
  for (let i = 0; i < 10; i++) {
    sampleUsersList.push({
      id: `thiisad${i}`,
      name: 'thisisaname',
      username: 'thjisisusername',
      emailVerified: null,
      author_bio: 'thisisabio for testing',
      author_joined_on: null,
      email: 'testemail141@gmail.com',
      banner: null,
      image: null,
    });
  }

  const { data: session, status } = useSession();
  const router = useRouter();

  let { tab } = router.query;

  // making sure tab parameter.
  const possibleTabs = {
    twiddets: 'twiddets',
    followers: 'followers',
    followings: 'followings',
  };

  if (tab) {
    if (!(typeof tab === 'string')) {
      tab = tab[0];
    }
    if (!Object.values(possibleTabs).includes(tab)) {
      tab = 'twiddets';
    }
  } else {
    tab = 'twiddets';
  }

  if (status === 'unauthenticated') {
    router.push('/signin');
  } else if (status === 'authenticated') {
    return (
      <>
        <CompHead headTitle={session.user?.name || 'Profile'}></CompHead>
        <TopBar></TopBar>
        <CompSpeedDial></CompSpeedDial>
        <ProfileBanner
          bannerImg={user.banner || ''}
          avatarImg={user.image || ''}
          followers={user.followers.length}
          following={user.followings.length}
          posts={user.posts.length}></ProfileBanner>

        {tab === possibleTabs.twiddets && user.posts.length > 0 && (
          <PostCards _postcard={user.posts}></PostCards>
        )}

        {tab === possibleTabs.twiddets && user.posts.length <= 0 && (
          <p
            style={{
              color: Colors.standard_light_white,
              position: 'absolute',
              left: '50%',
              marginTop: '50px',
              transform: 'translate(-50%)',
            }}>
            No twiddets by {user.name}
          </p>
        )}

        {tab === possibleTabs.followers && (
          <UserLists _userlist={sampleUsersList}></UserLists>
        )}

        {tab === possibleTabs.followings && (
          <UserLists _userlist={sampleUsersList}></UserLists>
        )}
      </>
    );
  }
};

export const getServerSideProps = async (context: NextPageContext) => {
  const session = await getSession(context);
  if (session) {
    const user: User | null = await prismaClient.user.findUnique({
      where: {
        email: session.user?.email || '',
      },
      include: {
        followers: true,
        followings: true,
        likes: true,
        posts: true,
      },
    });
    if (user) {
      return {
        props: {
          user: JSON.parse(JSON.stringify(user)),
        },
      };
    }
  }
  return {
    props: {},
  };
};

export default Profile;
