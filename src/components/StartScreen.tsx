import { Box, Button, Stack, Typography } from '@mui/material';
import { ICharacter } from '../interfaces/character';

interface IProps {
  setStartView(e: boolean): void;
}

const defaultDecorStyles = {
  position: 'absolute',
  width: 200,
};

export default function StartScreen({setStartView}: IProps): JSX.Element {
  return (
    <Box
      sx={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        zIndex: 4,
        px: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: '#EDE7E2',
      }}
    >
      <Typography fontSize={100} fontWeight={800} lineHeight={1} mb={1}>
        Hunger Games
      </Typography>
      <Typography
        sx={{
            fontSize: 80,
            fontWeight: "bold",
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: "black",
            textFillColor: "#EDE7E2",
            mb: 2,
          }}>
        a11y
      </Typography>
      <Box
        component="img"
        src="/img/start.svg"
        sx={{ ...defaultDecorStyles, top: '10%', right: '10%' }}
      />
      <Box component="img" src="/img/run.gif" sx={{width: "50%"}} />
      <Button onClick={() => setStartView(false)} variant="contained" sx={{width: 90, height: 90, mt: 3}}>
        <Box component="img" src="/img/arrow.svg" />
      </Button>
    </Box>
  );
}
