import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { IAnswer, IQuestion } from '../../interfaces/questions';
import { EUser } from '../../interfaces/roads';
import QuestionImage from './QuestionImage';
import QuestionResultAnswer from './QuestionResultAnswer';
import { Theme } from '@mui/material/styles';
interface IQuestionContentProps {
  activeQuestion: IQuestion;
  activeRoad: EUser;
  setUserState(
    activeRoad: number,
    isInPrison: boolean,
    isAbleToAnswer: boolean,
    isAnswerCorrect?: boolean,
  ): void;
  handleNextStep(): void;
}

interface IShowResultAnswer {
  isFirsteState: boolean;
  isCorrectAnswer: boolean;
}

export default function QuestionContent({
  activeQuestion,
  activeRoad,
  setUserState,
  handleNextStep,
}: IQuestionContentProps): JSX.Element {
  const [showResultAnswer, setShowResultAnswer] = useState<IShowResultAnswer>({
    isFirsteState: true,
    isCorrectAnswer: true,
  });
  const resultAnswer = (isCorrect: boolean): void => {
    if (isCorrect) {
      setShowResultAnswer({ isFirsteState: false, isCorrectAnswer: true });
    } else {
      setShowResultAnswer({ isFirsteState: false, isCorrectAnswer: false });
    }
  };

  const handleAnswerOptionClick = (isCorrect: IAnswer): void => {
    const isCorrectValue = !!isCorrect.isCorrect;
    setUserState(activeRoad, !isCorrectValue, false, isCorrectValue);

    resultAnswer(isCorrectValue);
  };

  const handleHardAnswerOptionClick = (isCorrect: boolean): void => {
    resultAnswer(isCorrect);
    setUserState(activeRoad, false, isCorrect);
  };

  const handleNextStepClick = (): void => {
    setShowResultAnswer({ isFirsteState: true, isCorrectAnswer: false });
    handleNextStep();
  };

  const userTestStyles = {
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
    color: '#787878',
    textTransform: 'upercase',
    mb: 10,
    typography: 'h5',
  };

  const characterInfo = [
    {
      name: 'Serhii M',
      img: '/img/characters/player1.png',
    },
    {
      name: 'Maksym Z',
      img: '/img/characters/player2.png',
    },
    {
      name: 'Serhi iS',
      img: '/img/characters/player3.png',
    },
  ];

  const getUser = (): JSX.Element => {
    return (
      <Stack sx={{ ...userTestStyles }}>
        <Box component="img" src={characterInfo[activeRoad].img} width={40} height={40} />
        {characterInfo[activeRoad].name}
      </Stack>
    );
  };

  const sistItemButtonStyles = {
    '.MuiBox-root': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexShrink: 0,
      width: 40,
      height: 40,
      background: (theme: Theme) => theme.palette.background.paper,
      border: '1px solid',
      borderRadius: 1.5,
    },
    '&:hover': {
      '.MuiBox-root': {
        background: (theme: Theme) => theme.palette.error.light,
      },
    },
  };

  const questionBodyStyles = {
    maxHeight: '100vh',
    p: (theme: Theme) => theme.spacing(7, 0, 7, 7),
    overflow: 'auto',
  };

  const QuestionBody = (): JSX.Element => {
    return (
      <Box sx={{ ...questionBodyStyles }}>
        <Box pr={7}>
          <Typography variant="h1" mb={4}>
            {activeQuestion?.title}
          </Typography>
          <Typography mb={3}>{activeQuestion?.description}</Typography>
          <QuestionImage src={activeQuestion?.imgUrl}></QuestionImage>

          {/* INFO: Options */}
          {!!activeQuestion?.options && (
            <List>
              {activeQuestion?.options?.map((answerOption: IAnswer, key) => (
                <ListItem disablePadding key={key}>
                  <ListItemButton
                    sx={{ ...sistItemButtonStyles }}
                    onClick={() => handleAnswerOptionClick(answerOption)}
                  >
                    <ListItemText
                      primary={
                        <Stack direction="row" alignItems="center" gap={3}>
                          <Box>{key + 1}</Box>
                          {answerOption.title}
                        </Stack>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}

          {!activeQuestion?.options?.length && (
            <Stack direction="row" gap={2}>
              <Button
                variant="contained"
                color="error"
                onClick={() => handleHardAnswerOptionClick(false)}
              >
                Wrong answer
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={() => handleHardAnswerOptionClick(true)}
                autoFocus
              >
                Correct answer
              </Button>
            </Stack>
          )}
        </Box>
      </Box>
    );
  };

  return (
    <>
      {!showResultAnswer.isFirsteState ? (
        <>
          <Box display="grid" p={7} alignContent="start">
            <QuestionResultAnswer
              isCorrectAnswer={showResultAnswer.isCorrectAnswer}
              character={getUser()}
            />
          </Box>
          <Box p={7}>
            <Button fullWidth={true} size="large" variant="contained" onClick={handleNextStepClick}>
              <Box component="img" src="/img/arrow-right.svg" mr={2}></Box>
              NEXT
            </Button>
          </Box>
        </>
      ) : (
        <QuestionBody />
      )}
    </>
  );
}
