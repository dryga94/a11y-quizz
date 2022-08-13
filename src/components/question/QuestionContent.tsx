import { Box, Button, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { IQuestion, IAnswer } from '../../interfaces/questions';
import { IActiveRoadInfo } from '../../interfaces/roads';
import QuestionImage from './QuestionImage';
import QuestionResultAnswer from './QuestionResultAnswer';

interface IQuestionContentProps {
  activeRoadInfo: IActiveRoadInfo;
  activeRoad: number;
}

interface IShowResultAnswer {
  isFirsteState: boolean;
  isCorrectAnswer: boolean;
}

export default function QuestionContent({
  activeRoadInfo,
  activeRoad,
}: IQuestionContentProps): JSX.Element {

  const [showResultAnswer, setShowResultAnswer] = useState<IShowResultAnswer>({isFirsteState: true, isCorrectAnswer: true});
  console.log('activeRoadQQQQ', activeRoad);
  const resultAnswer = (isCorrect: boolean): void => {
    if (isCorrect) {
      setShowResultAnswer({isFirsteState: false, isCorrectAnswer: true});
    }
    else {
      setShowResultAnswer({isFirsteState: false, isCorrectAnswer: false});
    }
  }

  const handleAnswerOptionClick = (isCorrect: IAnswer): void => {
    const isCorrectValue = !!isCorrect.isCorrect;
    activeRoadInfo.setIsInPrison?.(!isCorrectValue);

    resultAnswer(isCorrectValue);
    console.log('isCorrect content', isCorrect);

  };

  const handleHardAnswerOptionClick = (isCorrect: boolean): void => {
    resultAnswer(isCorrect);
    activeRoadInfo.setIsInPrison?.(false);

    if (isCorrect) {
      setShowResultAnswer({isFirsteState: false, isCorrectAnswer: true});
    }
    else {
      setShowResultAnswer({isFirsteState: false, isCorrectAnswer: false});
    }
  };

  useEffect(() => {
    setShowResultAnswer({isFirsteState: true, isCorrectAnswer: false});
  }, [activeRoad]);

  const QuestionBody = (): JSX.Element => {
    return (
      <>
        <Typography variant="h1" mb={4}>{activeRoadInfo.question?.title}</Typography>
        <Typography mb={3}>{activeRoadInfo.question?.description}</Typography>
          <QuestionImage src={activeRoadInfo.question?.imgUrl}></QuestionImage>

          {/* INFO: Options */}
          {!!activeRoadInfo.question?.options && (
            <List>
              {activeRoadInfo.question?.options?.map((answerOption: IAnswer, key) => (
                <ListItem disablePadding key={key}>
                  <ListItemButton onClick={() => handleAnswerOptionClick(answerOption)}>
                    <ListItemText primary={`${key + 1}) ${answerOption.title}`} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}

        {activeRoadInfo.isInPrison && (
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
