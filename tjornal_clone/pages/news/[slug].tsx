import React from 'react';

import { MainLayout } from '../../layouts/MainLayout';
import { FullPost } from '../../components/FullPost';
import PostComments from '../../components/PostComments';

const Post = () => {
  return (
    <MainLayout className="mb-50" contentFullWidth>
      <FullPost />
      <PostComments />
    </MainLayout>
  );
}

export default Post;