import { Button, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { serhiiConfig, serhiiProConfig } from '../configs/serhiiSQuestionConfig';
import Road from './Road';

export default function BattleField(): JSX.Element {
  const [gameIsStarted, setGameIsStarted] = useState(false);
  const [activeRoad, setActiveRoad] = useState(-1);

  const handleMove = (): void => {
    if (!gameIsStarted) {
      setGameIsStarted(true);
    }
    setActiveRoad((prev) => (prev < 2 ? prev + 1 : 0));
  };
  return (
    <Container>
      <Typography variant="h3" textAlign="center" mb={2}>This is the battlefield</Typography>
      <Stack
        minHeight="88vh"
        display="grid"
        gridTemplateColumns="repeat(3, 14vw)"
        justifyContent="center"
        gap={3}
      >
        <Road
          prisonConfig={serhiiProConfig}
          questionConfig={serhiiConfig}
          isActive={activeRoad === 0}
        />
        <Road
          prisonConfig={serhiiProConfig}
          questionConfig={serhiiConfig}
          isActive={activeRoad === 1}
        />
        <Road
          prisonConfig={serhiiProConfig}
          questionConfig={serhiiConfig}
          isActive={activeRoad === 2}
        />
      </Stack>
      <Button sx={{ position: 'absolute', top: '50%', right: 100 }} onClick={handleMove}>
        {gameIsStarted ? 'Ready for the next turn' : 'Start the battle'}
      </Button>
    </Container>
  );
}
