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
import { IQuestion } from '../../interfaces/questions';
import QuestionImageModal from './QuestionImageModal';

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
        fullWidth={true}
        maxWidth="md"
      >
        <DialogTitle>
          {questionConfig.title}
        </DialogTitle>
        <DialogContent>
          {questionConfig.description && <Typography mb={2}>{questionConfig.description}</Typography>}
          <QuestionImageModal src={questionConfig.imgUrl}></QuestionImageModal>

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
