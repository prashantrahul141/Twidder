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
import NotFound from '@components/common/NotFound';
import possibleTabs from 'types/consts';

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
  const { data: session, status } = useSession();
  const router = useRouter();

  let { tab } = router.query;

  // making sure tab parameter.
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
        <ProfileBanner currentTab={tab} user={user}></ProfileBanner>

        {tab === possibleTabs.twiddets && user.posts.length > 0 && (
          <PostCards _postcard={user.posts}></PostCards>
        )}

        {tab === possibleTabs.twiddets && user.posts.length <= 0 && (
          <NotFound text={`${user.name} hasn't twiddeted ;(`}></NotFound>
        )}

        {tab === possibleTabs.followers && user.followers.length > 0 && (
          <UserLists _userlist={user.followers}></UserLists>
        )}

        {tab === possibleTabs.followers && user.followers.length <= 0 && (
          <NotFound
            text={`${user.name} doesn't have any followers ;(`}></NotFound>
        )}

        {tab === possibleTabs.followings && user.followings.length > 0 && (
          <UserLists _userlist={user.followings}></UserLists>
        )}

        {tab === possibleTabs.followings && user.followings.length <= 0 && (
          <NotFound text={`${user.name} doesn't follow anyone ;(`}></NotFound>
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
