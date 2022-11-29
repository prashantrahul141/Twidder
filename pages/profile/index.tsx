import CompHead from '@components/common/CompHead';
import CompSpeedDial from '@components/common/SpeedDial';
import TopBar from '@components/common/Topbar';
import ProfileBanner from '@components/profile/Profilebanner';
import { getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import prismaClient from '@lib/prismaDB';
import { User, Follows, Post } from '@prisma/client';
import { NextPageContext } from 'next';

const Profile = ({
  user,
}: {
  user: User & {
    followings: Follows[];
    followers: Follows[];
    likes: Post[];
    posts: Post[];
  };
}) => {
  const { data: session, status } = useSession();
  const router = useRouter();
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
