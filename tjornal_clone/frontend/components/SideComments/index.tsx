import React from 'react';
import clsx from 'clsx';
import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';

import CommentItem from './CommentItem';

import styles from './SideComments.module.scss';

import data from '../../data';

export const SideComments = () => {

  const [visible, setVisible] = React.useState(true);

  const toggleVisible = () => {
    setVisible(!visible);
  }

  return (
    <div className={clsx(styles.root, !visible && styles.rotated)}>
      <h3 onClick={toggleVisible}>
        Комментарии <ArrowRightIcon />
      </h3>
      {visible && data.comments.new.map((obj) => (
        <CommentItem key={obj.id} {...obj} />
      ))}
    </div>
  );
};
