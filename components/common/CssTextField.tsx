import { Colors } from '@constants/colors';
import { styled, TextField } from '@mui/material';

const CssTextField = styled(TextField)({
  '& input': {
    color: Colors.standard_white,
    fontFamily: 'Lato',
  },
  '& label': {
    color: Colors.standard_light_white,
  },
  '& label.Mui-focused': {
    color: Colors.standard_white,
  },
  '&': {
    color: Colors.standard_white,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: Colors.standard_light_white,
    },
    '&:hover fieldset': {
      borderColor: Colors.standard_white,
    },
    '&.Mui-focused fieldset': {
      borderColor: Colors.standard_white,
    },
  },
});

export default CssTextField;
