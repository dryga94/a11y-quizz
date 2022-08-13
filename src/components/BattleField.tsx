import { Box, Button, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { serhiiConfig } from '../configs/serhiiSQuestionConfig';
import { characterConfig } from '../configs/character.config';
import { FIELDS_COUNT } from '../constants/battle-field-size';
import { EUser, getIndexFromEUser, IUsersState, IUserState } from '../interfaces/roads';
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
  const [activeQuestion, setActiveQuestion] = useState(serhiiConfig[0].defaultQuestions[0]);

  const [usersState, setUsersState] = useState<IUsersState>();

  const handleMove = (): void => {
    if (!gameIsStarted) {
      setGameIsStarted(true);
    }
    console.log(usersState);
    if (usersState?.[getIndexFromEUser(activeRoad)]?.isAbleToAnswer) {
      return;
    }
    setActiveRoad((prev) => (prev < 2 ? prev + 1 : 0));
  };

  const handleChangeUsersState = (index: EUser, userState: IUserState): void => {
    setUsersState(
      (prev) =>
        ({
          ...prev,
          //   [index]: { ...userState, isAbleToAnswer: prev?.[index]?.isAbleToAnswer },
          [index]: userState,
        } as IUsersState),
    );
  };

  const updateStateOnQuestionAnswer = (
    index: EUser,
    isInPrison: boolean,
    isAbleToAnswer: boolean,
  ): void => {
    setUsersState(
      (prev) =>
        ({
          ...prev,
          [index]: {
            isInPrison: isInPrison,
            isAbleToAnswer: isAbleToAnswer,
          },
        } as IUsersState),
    );
  };

  useEffect(() => {
    const config = usersState?.[getIndexFromEUser(activeRoad)]?.isInPrison
      ? 'prisonQuestions'
      : 'defaultQuestions';
    setActiveQuestion(
      serhiiConfig[activeRoad === -1 ? 0 : activeRoad][config][
        usersState?.[getIndexFromEUser(activeRoad)]?.activeStep || 0
      ],
    );
  }, [activeRoad, usersState, getIndexFromEUser]);

  console.log('activeRoad', activeRoad);
  return (
    <Stack direction="row" justifyContent="flex-end">
      <Box flex={1} bgcolor="#EDE7E2" p={(theme) => theme.spacing(11, 8, 10, 8)}>
        <Stack height={1}>
          {gameIsStarted ? (
            <QuestionContent
              activeRoad={activeRoad}
              activeQuestion={activeQuestion}
              setUserState={updateStateOnQuestionAnswer}
            />
          ) : (
            <Rules />
          )}
          <Button variant="contained" onClick={handleMove} sx={{ mt: 'auto' }}>
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
          isActive={activeRoad === 0}
          color="#80B4F0"
          position="left"
          activeRoad={0}
          character={characterConfig[0]}
          setUserState={handleChangeUsersState}
          isInPrison={usersState?.[0]?.isInPrison || false}
        />
        <Road
          isActive={activeRoad === 1}
          color="#FFB7B7"
          activeRoad={1}
          character={characterConfig[1]}
          setUserState={handleChangeUsersState}
          isInPrison={usersState?.[1]?.isInPrison || false}
        />
        <Road
          isActive={activeRoad === 2}
          color="#C3ABE1"
          position="right"
          activeRoad={2}
          character={characterConfig[2]}
          setUserState={handleChangeUsersState}
          isInPrison={usersState?.[2]?.isInPrison || false}
        />
      </Stack>
    </Stack>
  );
}
