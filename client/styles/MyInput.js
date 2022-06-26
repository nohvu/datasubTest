import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MyInput = styled(TextField)(() => ({
  backgroundColor: '#FFF',
  marginBottom: '10px',
  border: 'none',
  borderRadius: '5px',
  input: {
    boxShadow: 'inset 5px 5px 5px -5px rgba(0, 0, 0, 0.6)',
  },
  '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
    display: 'none',
  },
  '& input[type=number]': {
    MozAppearance: 'textfield',
  },
}));
