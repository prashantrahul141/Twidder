import { Alert, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const EditFormSizeWarning = ({
  setSizeWarning,
}: {
  setSizeWarning: Function;
}) => {
  return (
    <>
      <Alert
        severity='error'
        sx={{
          zIndex: '100',
          position: 'fixed',
          top: '85%',
          left: '50%',
          transform: 'translate(-50%)',
        }}
        action={
          <IconButton
            aria-label='close'
            color='inherit'
            size='small'
            onClick={() => {
              setSizeWarning(false);
            }}>
            <CloseIcon fontSize='inherit' />
          </IconButton>
        }>
        File size cannot exceed 5mb.
      </Alert>
    </>
  );
};

export default EditFormSizeWarning;
