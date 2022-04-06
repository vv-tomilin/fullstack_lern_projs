import React from 'react';

import dynamic from "next/dynamic";

import { Input } from '@material-ui/core';
import styles from './WriteForm.module.scss';

import { Button } from '@material-ui/core';

const Editor = dynamic(() => import('../Editor'), { ssr: false });

interface WriteFormProps {
  title?: string
}

const WriteForm: React.FC<WriteFormProps> = ({ title }) => {

  return (
    <div>
      <Input classes={{ root: styles.titleField }} placeholder="Заголовок" defaultValue={title} />
      <div className={styles.editor}>
        <Editor />
      </div>
      <Button
        variant="contained"
        color="primary">
        Опубликовать
      </Button>
    </div>
  )
}

export default WriteForm;