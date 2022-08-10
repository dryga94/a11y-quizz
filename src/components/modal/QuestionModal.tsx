import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import { IAnswer, IQuestion } from '../../interfaces/questions';
import QuestionImageModal from './QuestionImageModal';
import QuestionResultAnswerModal from './QuestionResultAnswerModal';

interface QestionModalProps {
  open: boolean;
  isInPrison: boolean;
  isAbleToAnswer?: boolean;
  questionConfig: IQuestion;
  handleClose(): void;
  setIsAbleToAnswer(e: boolean): void;
  setIsInPrison(e: boolean): void;
}

export default function QuestionModal({
  open,
  questionConfig,
  isInPrison,
  setIsAbleToAnswer,
  handleClose,
  setIsInPrison,
}: QestionModalProps): JSX.Element {
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

  const handleHardAnswerOptionClick = (isCorrect: boolean): void => {
    if (isCorrect) {
      setIsInPrison(false);
      setIsAbleToAnswer(true);
      setIsCorrectAnswer(true);
      setShowResultAnswer(true);
      setTimeout(() => {
        handleClose();
      }, 2000);
    } else {
      setIsInPrison(false);
      setIsAbleToAnswer(false);
      setIsCorrectAnswer(false);
      setShowResultAnswer(true);
      setTimeout(() => {
        handleClose();
      }, 2000);
    }
  };

  const ModalBody = (): JSX.Element => {
    return (
      <>
        <DialogTitle>{questionConfig.title} </DialogTitle>
        <DialogContent>
          {questionConfig.description && (
            <Typography mb={2}>{questionConfig.description}</Typography>
          )}
          <QuestionImageModal src={questionConfig.imgUrl}></QuestionImageModal>

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

        {isInPrison && (
          <DialogActions>
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
          </DialogActions>
        )}
      </>
    );
  };

  return (
    <Dialog
      open={open}
      fullWidth={true}
      maxWidth="md"
      disableEscapeKeyDown
      onBackdropClick={(e) => e.preventDefault()}
    >
      {showResultAnswer ? (
        <QuestionResultAnswerModal isWrongAnswer={!isCorrectAnswer} />
      ) : (
        <ModalBody />
      )}
    </Dialog>
  );
}
