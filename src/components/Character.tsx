import { Box } from '@mui/material';

interface IProps {
  isInPrison: boolean;
  activeStep: number;
}

export default function Character({ isInPrison, activeStep }: IProps): JSX.Element {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: '4vw',
        bottom: '1.5vh',
        width: '8vh',
        height: '8vh',
        bgcolor: isInPrison ? 'error.main' : 'primary.main',
        color: '#FFF',
        transform: `translateY(-${activeStep * 11}vh)`,
        transition: '0.3s ease',
      }}
    >
      {isInPrison ? 'Im in prison' : 'Im free'}
    </Box>
  );
}
