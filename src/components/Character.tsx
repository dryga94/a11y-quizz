import { Box } from '@mui/material';

interface IProps {
  isInPrison: boolean;
  activeStep: number;
}

export default function Character({ isInPrison, activeStep }: IProps): JSX.Element {
  return (
    <Box
      sx={{
        width: '10vh',
        height: '10vh',
        bgcolor: isInPrison ? 'error.main' : 'primary.main',
        color: '#FFF',
        transform: `translateX(${activeStep * 10}vw)`,
        transition: '0.3s ease',
      }}
    >
      {isInPrison ? 'Im in prison' : 'Im free'}
    </Box>
  );
}
