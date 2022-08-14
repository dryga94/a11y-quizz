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
  setUserState(activeRoad: number, isInPrison: boolean, isAbleToAnswer: boolean): void;
  handleNextStep(): void,
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
    setUserState(activeRoad, !isCorrectValue, false);

    resultAnswer(isCorrectValue);
  };

  const handleHardAnswerOptionClick = (isCorrect: boolean): void => {
    resultAnswer(isCorrect);
    setUserState(activeRoad, false, isCorrect);

    if (isCorrect) {
      setShowResultAnswer({ isFirsteState: false, isCorrectAnswer: true });
    } else {
      setShowResultAnswer({ isFirsteState: false, isCorrectAnswer: false });
    }
  };

  const handleNextStepClick = (): void => {
    setShowResultAnswer({ isFirsteState: true, isCorrectAnswer: false });
    handleNextStep();
  }

  const sistItemButtonStyles = {
    ".MuiBox-root": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      width: 40,
      height: 40,
      background: (theme: Theme) => theme.palette.background.paper,
      border: "1px solid",
      borderRadius: 1.5,
    },
    "&:hover": {
      ".MuiBox-root": {
        background: (theme: Theme) => theme.palette.error.light,
      }
    }
  }

  const questionBodyStyles = {
    maxHeight: "100vh",
    p: (theme: Theme) => theme.spacing(7, 0, 7, 7),
    overflow: 'auto',
  }

  const QuestionBody = (): JSX.Element => {
    return (
      <Box sx={{...questionBodyStyles}}>
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
                  <ListItemButton sx={{...sistItemButtonStyles}} onClick={() => handleAnswerOptionClick(answerOption)}>
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
          <Box display="grid" p={7}><QuestionResultAnswer isCorrectAnswer={showResultAnswer.isCorrectAnswer} /></Box>
          <Box p={7}>
            <Button fullWidth={true} variant="contained" onClick={handleNextStepClick}>
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
