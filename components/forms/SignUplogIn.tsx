import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  styled,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { Colors } from '@constants/colors';

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
      borderColor: Colors.standard_light_white,
    },
    '&.Mui-focused fieldset': {
      borderColor: Colors.standard_white,
    },
  },
});

const SignUplogIn = ({ btnString }: { btnString: string }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl
      sx={{
        border: `1pt solid ${Colors.standard_light_white_400}`,
        borderRadius: '5px',
        width: '95vw',
        maxWidth: '400px',
        height: 'fit-content',
        marginTop: '50px',
        padding: '30px',
      }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          marginBottom: '20px',
        }}>
        <IconButton
          sx={{
            cursor: 'default',
            width: '5%',
            marginRight: '15px',
          }}>
          <AccountCircleOutlinedIcon
            sx={{ color: Colors.standard_light_white }}
          />
        </IconButton>
        <CssTextField
          id='outlined-basic'
          label='Email'
          variant='outlined'
          sx={{
            width: '90%',
          }}
        />
      </Box>

      <Box
        sx={{
          marginBottom: '20px',
          display: 'flex',
          flexWrap: 'nowrap',
        }}>
        <CssTextField
          id='outlined-basic'
          label='Password'
          variant='outlined'
          type={showPassword ? 'password' : 'type'}
          sx={{
            width: '90%',
          }}
        />
        <IconButton
          onClick={() => setShowPassword(!showPassword)}
          sx={{ width: '5%', marginLeft: '15px' }}>
          {showPassword && (
            <VisibilityOutlinedIcon
              sx={{ color: Colors.standard_light_white }}
            />
          )}
          {!showPassword && (
            <VisibilityOffOutlinedIcon
              sx={{ color: Colors.standard_light_white }}
            />
          )}
        </IconButton>
      </Box>
      <Button
        variant='outlined'
        href=''
        sx={{
          height: '45px',
          marginTop: '30px',
        }}>
        {btnString}
      </Button>
      <Divider
        sx={{
          marginTop: '30px',
          borderColor: Colors.standard_light_white_400,
        }}></Divider>
    </FormControl>
  );
};

export default SignUplogIn;
