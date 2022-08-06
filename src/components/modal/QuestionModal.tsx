import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IQuestion } from '../../interfaces/questions';

interface QestionModalProps {
  open: boolean;
  handleClose(): void;
  questionConfig: IQuestion;
}

export default function QuestionModal({open, handleClose, questionConfig}: QestionModalProps): JSX.Element {
console.log('fff', questionConfig)

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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
  );
}
