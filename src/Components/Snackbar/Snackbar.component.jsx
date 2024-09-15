import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function CustomSnackbar(props) {
  const { state, actions: snackbarActions } = props;
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    requestAnimationFrame(() => {
      setOpen(false);
      requestAnimationFrame(() => {
        snackbarActions.clearMessage(null)
      })
    })
  };

  React.useEffect(() => {
    if (state.message) {
        setOpen(true)
    }
  }, [state.message])

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Position at top center
    >
      <Alert
        onClose={handleClose}
        severity={state.type}
        sx={{ width: '100%' }}
      >
        {state.message}
      </Alert>
    </Snackbar>
  );
}
