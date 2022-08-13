import { Box, Button, Stack } from '@mui/material';
import { useState } from 'react';
import { serhiiConfig } from '../configs/serhiiSQuestionConfig';
import { FIELDS_COUNT } from '../constants/battle-field-size';
import { IQuestion } from '../interfaces/questions';
import { IActiveRoadInfo } from '../interfaces/roads';
import QuestionContent from './question/QuestionContent';
import Road from './Road';
import Rules from './Rules';

const staticFieldStyles = {
  position: 'fixed',
  width: '60vw',
  right: 0,
  top: 0,
  height: `${100 / FIELDS_COUNT}vh`,
  bgcolor: '#FFF',
  fontSize: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,
};

export default function BattleField(): JSX.Element {
  const [gameIsStarted, setGameIsStarted] = useState(false);
  const [activeRoad, setActiveRoad] = useState(-1);
  const [isInPrison, setIsInPrison] = useState(false);

  const [activeRoadInfo, setActiveRoadInfo] = useState<IActiveRoadInfo>({
    question: serhiiConfig[0].defaultQuestions[0],
    isInPrison: isInPrison,
    setIsInPrison
  });

  const handleMove = (): void => {
    if (!gameIsStarted) {
      setGameIsStarted(true);
    }
    setActiveRoad((prev) => (prev < 2 ? prev + 1 : 0));
  };

console.log('activeRoad', activeRoad);
  return (
    <Stack direction="row" justifyContent="flex-end">
      <Box flex={1} bgcolor="#EDE7E2" p={(theme) => theme.spacing(11, 8, 10, 8)}>
        <Stack height={1}>
          {gameIsStarted ? <QuestionContent activeRoadInfo={activeRoadInfo} activeRoad={activeRoad} /> : <Rules />}
          <Button variant="contained" onClick={handleMove} sx={{mt: "auto"}}>
            {gameIsStarted ? 'NEXT' : 'Start the battle'}
          </Button>
        </Stack>
      </Box>
      <Box sx={{ ...staticFieldStyles, bottom: 0, top: 'auto' }}>Start</Box>
      <Box sx={{ ...staticFieldStyles }}>Finish</Box>
      <Stack
        minHeight="100vh"
        display="grid"
        gridTemplateColumns="repeat(3, 20vw)"
        justifyContent="center"
      >
        <Road
          questionConfig={serhiiConfig[0].defaultQuestions}
          prisonConfig={serhiiConfig[0].prisonQuestions}
          isActive={activeRoad === 0}
          color="#80B4F0"
          position="left"
          setActiveRoadInfo={setActiveRoadInfo}
        />
        <Road
          questionConfig={serhiiConfig[1].defaultQuestions}
          prisonConfig={serhiiConfig[1].prisonQuestions}
          isActive={activeRoad === 1}
          color="#FFB7B7"
          setActiveRoadInfo={setActiveRoadInfo}
        />
        <Road
          questionConfig={serhiiConfig[2].defaultQuestions}
          prisonConfig={serhiiConfig[2].prisonQuestions}
          isActive={activeRoad === 2}
          color="#C3ABE1"
          position="right"
          setActiveRoadInfo={setActiveRoadInfo}
        />
      </Stack>
    </Stack>
  );
}
