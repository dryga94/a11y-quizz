import { Box, Typography } from '@mui/material';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import { IAnswer, IQuestion } from '../../interfaces/questions';
import QuestionImage from './QuestionImage';
import QuestionResultAnswer from './QuestionResultAnswer';

interface QuestionContentProps {
  open: boolean;
  isInPrison: boolean;
  isAbleToAnswer?: boolean;
  questionConfig: IQuestion;
  handleClose(): void;
  setIsAbleToAnswer(e: boolean): void;
  setIsInPrison(e: boolean): void;
}

export default function QuestionContent({
  questionConfig,
  isInPrison,
  setIsAbleToAnswer,
  handleClose,
  setIsInPrison,
}: QuestionContentProps): JSX.Element {
  // TODO: Optimize logic

  const [showResultAnswer, setShowResultAnswer] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const handleAnswerOptionClick = (isCorrect: IAnswer): void => {
    const isCorrectValue = !!isCorrect.isCorrect;
    console.log(isCorrectValue);
    setIsInPrison(!isCorrectValue);
    setIsAbleToAnswer(false);

    setIsCorrectAnswer(isCorrectValue);
    setShowResultAnswer(true);

    setTimeout(() => {
      setShowResultAnswer(false);
      handleClose();
    }, 2000);
  };

  // const handleHardAnswerOptionClick = (isCorrect: boolean): void => {
  //   if (isCorrect) {
  //     setIsInPrison(false);
  //     setIsAbleToAnswer(true);
  //     setIsCorrectAnswer(true);
  //     setShowResultAnswer(true);
  //     setTimeout(() => {
  //       handleClose();
  //     }, 2000);
  //   } else {
  //     setIsInPrison(false);
  //     setIsAbleToAnswer(false);
  //     setIsCorrectAnswer(false);
  //     setShowResultAnswer(true);
  //     setTimeout(() => {
  //       handleClose();
  //     }, 2000);
  //   }
  // };

  const QuestionBody = (): JSX.Element => {
    return (
      <>
        <DialogTitle>{questionConfig.title} </DialogTitle>
        <DialogContent>
          {questionConfig.description && (
            <Typography mb={2}>{questionConfig.description}</Typography>
          )}
          <QuestionImage src={questionConfig.imgUrl}></QuestionImage>

          {/* INFO: Options */}
          {!isInPrison && (
            <List>
              {questionConfig?.options?.map((answerOption: IAnswer, key) => (
                <ListItem disablePadding key={key}>
                  <ListItemButton onClick={() => handleAnswerOptionClick(answerOption)}>
                    <ListItemText primary={`${key + 1}) ${answerOption.title}`} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}
        </DialogContent>

      </>
    );
  };

  return (
    <Box>
      {showResultAnswer ? (
        <QuestionResultAnswer isWrongAnswer={!isCorrectAnswer} />
      ) : (
        <QuestionBody></QuestionBody>
      )}

    </Box>
  );
}
