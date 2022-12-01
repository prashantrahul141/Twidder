import CompHead from '@components/common/CompHead';
import CompSpeedDial from '@components/common/SpeedDial';
import TopBar from '@components/common/Topbar';
import ProfileBanner from '@components/profile/Profilebanner';
import { getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import prismaClient from '@lib/prismaDB';
import { User, Follows, Post } from '@prisma/client';
import { NextPageContext } from 'next';
import PostCards from '@components/lists/postCards';
import { TypePost } from 'types/types';

const Profile = ({
  user,
}: {
  user: User & {
    followings: Follows[];
    followers: Follows[];
    likes: Post[];
    posts: Post[] & TypePost[];
  };
}) => {
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
          posts={user.posts.length}
          likes={user.likes.length}></ProfileBanner>
        {tab === possibleTabs.twiddets && (
          <PostCards _postcard={user.posts}></PostCards>
        )}
        {tab === possibleTabs.followers}
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
