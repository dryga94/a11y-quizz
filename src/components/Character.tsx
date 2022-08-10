import { Box } from '@mui/material';
import { CHARACTER_SIZE, FIELDS_COUNT } from '../constants/battle-field-size';

interface IProps {
  isInPrison: boolean;
  activeStep: number;
}

export default function Character({ isInPrison, activeStep }: IProps): JSX.Element {
  const fieldHeight = 100 / FIELDS_COUNT;
  return (
    <Box
      sx={{
        position: 'absolute',
        left: '50%',
        bottom: `${(fieldHeight - CHARACTER_SIZE) / 2}vh`,
        width: `${CHARACTER_SIZE}vh`,
        height: `${CHARACTER_SIZE}vh`,
        bgcolor: isInPrison ? 'error.main' : 'primary.main',
        color: '#FFF',
        transform: `translateY(-${activeStep * fieldHeight}vh) translateX(-50%)`,
        transition: '0.3s ease',
      }}
    >
      {isInPrison ? 'Im in prison' : 'Im free'}
    </Box>
  );
}
