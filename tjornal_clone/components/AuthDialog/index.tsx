import React from 'react';

import { Typography, Button, TextField, Divider } from '@material-ui/core';
import { ArrowBack } from '@mui/icons-material';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

interface AuthDialogProps {
  onClose: () => void;
  visible: boolean;
}

const AuthDialog: React.FC<AuthDialogProps> = ({ onClose, visible }) => {

  const [formType, setFormType] = React.useState<'main' | 'email'>('main');

  return (
    <div>
      <Dialog
        onClose={onClose}
        open={visible}
        aria-labelledby="responsive-dialog-title"
        maxWidth="xs"
        fullWidth
      >
        <DialogContent>
          <DialogContentText>
            <div style={{ display: 'flex' }}>
              <p onClick={() => setFormType('main')}>
                <ArrowBack />
              </p>
              <Typography>Вход в RJ</Typography>
            </div>
            {
              formType === 'main' &&
              <>
                <Button
                  fullWidth
                  className='mb-15'
                  variant="contained"
                >
                  ВКонтакте
                </Button>
                <Button
                  fullWidth
                  className='mb-15'
                  variant="contained"
                >
                  Google
                </Button>
                <Button
                  onClick={() => setFormType('email')}
                  fullWidth
                  className='mb-15'
                  variant="contained"
                >
                  Через почту
                </Button>
              </>
            }

            {
              formType === 'email' &&
              <div>
                <form>
                  <TextField
                    className="mb-20"
                    size="small"
                    label="Почта"
                    variant="outlined"
                    fullWidth
                    required
                  />
                  <TextField
                    className="mb-20"
                    size="small"
                    label="Пароль"
                    type="password"
                    variant="outlined"
                    fullWidth
                    required
                  />
                  <Divider className="mt-30 mb-20" />
                  <Button color="primary" variant="contained">
                    Войти
                  </Button>
                </form>
              </div>
            }

          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AuthDialog;