import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MyButton = styled(Button)(() => ({
  backgroundColor: 'black',
  position: 'relative',
  overflow: 'hidden',
  span: { position: 'relative', zIndex: '2' },
  '&:hover': { backgroundColor: 'black' },
  '&:after': {
    content: '""',
    width: '100%',
    height: '100%',
    backgroundColor: '#29c7cc',
    position: 'absolute',
    top: '0',
    left: '0',
    transform: 'translateX(-100%)',
    transition: '0.8s',
  },
  '&:hover:after': {
    transform: 'translateX(0)',
  },
}));
