import React from 'react';

import styles from './AddCommentForm.module.scss';

import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';

interface AddCommentFormProps { }

const AddCommentForm = () => {

  const [clicked, setClicked] = React.useState(false);
  const [text, setText] = React.useState('');

  const onAddComment = () => {
    setClicked(false);
    setText('');
  };

  return (
    <div className={styles.form}>
      <Input
        classes={{ root: styles.fieldRoot }}
        placeholder="Написать комментарий..."
        minRows={clicked ? 5 : 1}
        fullWidth
        multiline
        value={text}
        onChange={(e) => setText(e.target.value)}
        onFocus={() => setClicked(true)} />

      {clicked &&
        <Button
          onClick={onAddComment}
          className={styles.addButton}
          variant="contained"
          color="primary">
          Опубликовать
        </Button>
      }
    </div>
  );
}

export default AddCommentForm;