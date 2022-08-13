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
import { useEffect, useState } from 'react';
import { IAnswer, IQuestion } from '../../interfaces/questions';
import { EUser } from '../../interfaces/roads';
import QuestionImage from './QuestionImage';
import QuestionResultAnswer from './QuestionResultAnswer';

interface IQuestionContentProps {
  activeQuestion: IQuestion;
  activeRoad: EUser;
  setUserState(activeRoad: number, isInPrison: boolean, isAbleToAnswer: boolean): void;
}

interface IShowResultAnswer {
  isFirsteState: boolean;
  isCorrectAnswer: boolean;
}

export default function QuestionContent({
  activeQuestion,
  activeRoad,
  setUserState,
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

  useEffect(() => {
    setShowResultAnswer({ isFirsteState: true, isCorrectAnswer: false });
  }, [activeRoad]);

  const QuestionBody = (): JSX.Element => {
    return (
      <>
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
                <ListItemButton onClick={() => handleAnswerOptionClick(answerOption)}>
                  <ListItemText primary={`${key + 1}) ${answerOption.title}`} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        )}

        {!activeQuestion.options?.length && (
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
      </>
    );
  };

  return (
    <Box display="grid">
      {!showResultAnswer.isFirsteState ? (
        <QuestionResultAnswer isCorrectAnswer={showResultAnswer.isCorrectAnswer} />
      ) : (
        <QuestionBody />
      )}
    </Box>
  );
}
