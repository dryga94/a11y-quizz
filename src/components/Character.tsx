import { Stack, Typography, Box } from '@mui/material';
import { FIELDS_COUNT } from '../constants/battle-field-size';
import { ICharacter } from '../interfaces/character';

interface IProps {
  isInPrison: boolean;
  activeStep: number;
  character: ICharacter;
}

export default function Character({ isInPrison, activeStep, character }: IProps): JSX.Element {
  const fieldHeight = 100 / FIELDS_COUNT;
  const { name, color, url } = character;
  return (
    <Stack
      direction="row"
      sx={{
        position: 'absolute',
        left: 1,
        right: 1,
        bottom: 1,
        height: `calc(${100 / FIELDS_COUNT}vh - 1px)`,
        bgcolor: color,
        px: 1.5,
        py: 2,
        color: '#000000',
        transform: `translateY(-${activeStep * fieldHeight}vh)`,
        transition: '0.3s ease',
        overflow: 'hidden',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          transform: !isInPrison ? 'translateY(-100%)' : 'translateY(0)',
          transition: '0.3s ease',
          background: 'repeating-linear-gradient(to left, #e66465, #e66465 4px, transparent 4px, transparent 24px)',
          zIndex: 2,
        }}
      />
      <Box sx={{ height: 1 }} component="img" src={url} />
      <Typography fontSize={30}>{name}</Typography>
    </Stack>
  );
}
