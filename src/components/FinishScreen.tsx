import { Box, Stack, Typography } from '@mui/material';
import { ICharacter } from '../interfaces/character';

interface IProps {
  character?: ICharacter;
}

const defaultDecorStyles = {
  position: 'absolute',
  width: 200,
};

export default function FinishScreen({ character }: IProps): JSX.Element {
  return (
    <Box
      sx={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#EDE7E2',
      }}
    >
      <Typography fontSize={80} fontWeight="bold" mb={3}>
        Congratulations
      </Typography>
      <Stack direction="row" alignItems="center" gap={2} mb={4}>
        <Box sx={{ height: 80 }} component="img" src={character?.url} />
        <Typography fontSize={40} textTransform="uppercase">
          {character?.name}
        </Typography>
      </Stack>
      <Box
        component="img"
        src="/img/decor1.png"
        sx={{ ...defaultDecorStyles, top: '60%', left: '10%' }}
      />
      <Box
        component="img"
        src="/img/decor2.png"
        sx={{ ...defaultDecorStyles, top: '20%', right: '10%' }}
      />
      <Box component="img" src="/img/congrats.gif" />
    </Box>
  );
}
