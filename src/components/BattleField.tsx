import { Box, Button, Fade, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { QuestionsConfig } from '../configs/questionsConfig';
import { characterConfig } from '../configs/character.config';
import { FIELDS_COUNT } from '../constants/battle-field-size';
import { EUser, getIndexFromEUser, IUsersState, IUserState } from '../interfaces/roads';
import QuestionContent from './question/QuestionContent';
import Road from './Road';
import Rules from './Rules';
import { getRoadPosition } from '../utils/utils';
import FinishScreen from './FinishScreen';
import { ICharacter } from '../interfaces/character';
import StartScreen from './StartScreen';

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
  const [isStartView, setIsStartView] = useState(true);
  const [activeRoad, setActiveRoad] = useState(-1);
  const [winner, setWinner] = useState<ICharacter>();
  const [activeQuestion, setActiveQuestion] = useState(QuestionsConfig[0].defaultQuestions[0]);

  const [usersState, setUsersState] = useState<IUsersState>();

  const handleMove = (): void => {
    if (!gameIsStarted) {
      setGameIsStarted(true);
    }
    if (usersState?.[getIndexFromEUser(activeRoad)]?.isAbleToAnswer) {
      return;
    }
    setActiveRoad((prev) => {
      setUsersState(
        (innerPrev) =>
          ({
            ...innerPrev,
            [prev]: {
              isInPrison: innerPrev?.[prev as EUser].isInPrison,
              activeStep: innerPrev?.[prev as EUser].activeStep,
              isAbleToAnswer: true,
            },
          } as IUsersState),
      );
      return prev < 2 ? prev + 1 : 0;
    });
  };

  const handleChangeUsersState = (index: EUser, userState: IUserState): void => {
    setUsersState(
      (prev) =>
        ({
          ...prev,
          [index]: {
            ...userState,
            isAbleToAnswer: prev?.[index]?.isAbleToAnswer,
          },
        } as IUsersState),
    );
  };

  const updateStateOnQuestionAnswer = (
    index: EUser,
    isInPrison: boolean,
    isAbleToAnswer: boolean,
    isAnswerCorrect?: boolean,
  ): void => {
    if (isAnswerCorrect && usersState?.[index].activeStep == FIELDS_COUNT - 3) {
      setWinner(characterConfig[index]);
    }
    setUsersState(
      (prev) =>
        ({
          ...prev,
          [index]: {
            isInPrison,
            isAbleToAnswer,
          },
        } as IUsersState),
    );
  };

  useEffect(() => {
    const config = usersState?.[getIndexFromEUser(activeRoad)]?.isInPrison
      ? 'prisonQuestions'
      : 'defaultQuestions';
    setActiveQuestion(
      QuestionsConfig[activeRoad === -1 ? 0 : activeRoad][config][
        usersState?.[getIndexFromEUser(activeRoad)]?.activeStep || 0
      ],
    );
  }, [activeRoad, usersState, getIndexFromEUser]);

  return (
    <Stack direction="row" justifyContent="flex-end">
      <Box bgcolor="#EDE7E2" display="grid" gridTemplateRows="1fr max-content" width={1}>
        {gameIsStarted ? (
          <QuestionContent
            activeRoad={activeRoad}
            activeQuestion={activeQuestion}
            setUserState={updateStateOnQuestionAnswer}
            handleNextStep={handleMove}
          />
        ) : (
          <Rules />
        )}
        {!gameIsStarted && (
          <Box p={(theme) => theme.spacing(4, 7, 7, 7)}>
            <Button
              variant="contained"
              size="large"
              fullWidth={true}
              onClick={handleMove}
              sx={{ mt: 'auto' }}
            >
              <Box component="img" src="/img/arrow-right.svg" mr={2}></Box>
              Start the battle
            </Button>
          </Box>
        )}
      </Box>
      <Box sx={{ ...staticFieldStyles, bottom: 0, top: 'auto' }}>Start</Box>
      <Box sx={{ ...staticFieldStyles }}>Finish</Box>
      <Stack
        minHeight="100vh"
        display="grid"
        gridTemplateColumns="repeat(3, 20vw)"
        justifyContent="center"
      >
        {characterConfig.map((item, index) => (
          <Road
            key={index}
            isActive={activeRoad === index}
            color={item.color}
            isAbleToAnswer={usersState?.[index as EUser]?.isAbleToAnswer}
            position={getRoadPosition(index, characterConfig)}
            activeRoad={index}
            character={item}
            setWinner={setWinner}
            setUserState={handleChangeUsersState}
            isInPrison={usersState?.[index as EUser]?.isInPrison || false}
          />
        ))}
      </Stack>
      <Fade in={isStartView}>
        <Box>
          <StartScreen setStartView={setIsStartView} />
        </Box>
      </Fade>
      {winner && <FinishScreen character={winner} />}
    </Stack>
  );
}
