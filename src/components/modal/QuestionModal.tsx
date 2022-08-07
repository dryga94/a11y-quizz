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

interface QestionModalProps {
  open: boolean;
  isInPrison: boolean;
  step: number;
  questionConfig: IQuestion;
  handleClose(): void;
  setStep(e: number): void;
  setIsInPrison(e: boolean): void;
}

export default function QuestionModal({open, questionConfig, isInPrison, step, setStep, handleClose, setIsInPrison}: QestionModalProps): JSX.Element {
// console.log('fff', questionConfig.options);
// const [isInPrison, setIsInPrison] = useState(false);


const handleAnswerOptionClick = (isCorrect: boolean): void => {
    if (isCorrect) {
      handleClose();
      setStep(step + 1);
      console.log('normal ok');
    } else {
      handleClose();
      setIsInPrison(true);
      console.log('no ok');
  }
}

const handleHardAnswerOptionClick = (isCorrect: boolean): void => {
  if (isCorrect) {
    handleClose();
    setStep(step + 1);
    setIsInPrison(false);
    console.log('hard ok');
  } else {
    handleClose();
    setIsInPrison(false);
    console.log('hard No ok');
}
}

  return (
    <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          {questionConfig.title}
        </DialogTitle>
        <DialogContent>
          {questionConfig.description}
          <img src={questionConfig.imgUrl} ></img>

          {/* INFO: Options */}
          {!isInPrison && (
            <List>
              {questionConfig?.options?.map((answerOption, key) => (
                <ListItem disablePadding key={key}>
                  <ListItemButton onClick={() => handleAnswerOptionClick(answerOption.isCorrect!)}>
                    <ListItemText primary={`${key + 1}) ${answerOption.title}`} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}
        </DialogContent>

        {isInPrison && (
          <DialogActions>
            <Button variant="contained" color="error" onClick={() => handleHardAnswerOptionClick(false)}>Wrong answer</Button>
            <Button variant="contained" color="success" onClick={() => handleHardAnswerOptionClick(true)} autoFocus>
              Correct answer
            </Button>
          </DialogActions>
        )}
    </Dialog>
  );
}
