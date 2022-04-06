import Link from 'next/link';
import React from 'react';

import styles from './SideComments.module.scss';

interface CommentItemProps {
  user: {
    fullname: string;
    id: number;
  };
  text: string;
  post: {
    title: string;
  };
}


const CommentItem: React.FC<CommentItemProps> = ({ user, text, post }) => {

  return (
    <div className={styles.commentItem}>
      <div className={styles.userInfo}>
        <img alt='user_avatar' src="https://leonardo.osnova.io/598fc957-a3f6-598c-b6f9-a033c3941d12/-/scale_crop/64x64/-/format/webp/" />
        <Link href={`/profile/${user.id}`}>
          <a>
            <b>{user.fullname}</b>
          </a>
        </Link>
      </div>
      <p className={styles.text}>{text}</p>
      <Link href={`/news/${user.id}`}>
        <a>
          <span className={styles.postTitle}>{post.title}</span>
        </a>
      </Link>
    </div>
  );
};


export default CommentItem;