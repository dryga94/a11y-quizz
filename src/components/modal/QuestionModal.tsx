import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { IAnswer, IQuestion } from '../../interfaces/questions';

interface QestionModalProps {
  open: boolean;
  handleClose(): void;
  questionConfig: IQuestion;
}

export default function QuestionModal({open, handleClose, questionConfig}: QestionModalProps): JSX.Element {
console.log('fff', questionConfig.options)

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
          <List>
            {questionConfig?.options?.map((answerOption, key) => (
              <ListItem disablePadding key={key}>
                <ListItemButton>
                  <ListItemText primary={answerOption.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </DialogContent>

        <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>Wrong answer</Button>
          <Button variant="contained" color="success" onClick={handleClose} autoFocus>
            Correct answer
          </Button>
        </DialogActions>
      </Dialog>
  );
}
