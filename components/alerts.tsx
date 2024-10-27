import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface props{
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    message: string;
    severity: 'success' | 'info' | 'warning' | 'error';
    variant?: "filled" | "standard" | "outlined";
}
export const CustomizedSnackbars:React.FC<props>=({open, setOpen, message, severity, variant='filled'})=> {

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar anchorOrigin={{vertical: "top", horizontal: "right"}} open={open} autoHideDuration={6000} onClose={handleClose} >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant={variant}
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
