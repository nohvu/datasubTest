import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MyBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '500px',
  height: '300px',
  justifyContent: 'space-between',

  padding: '30px',
  borderRadius: '20px',
  background: 'rgb(241, 0, 0)',
  background:
    'linear-gradient(45deg, rgba(241,0,0,1) 0%, rgba(68,73,140,1) 50%, rgba(35,255,0,1) 100%)',
}));
