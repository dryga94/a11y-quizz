import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import QuestionImageModal from './QuestionImageModal';

interface QuestionImageModalProps {
  isWrongAnswer: boolean;
}

export default function QuestionResultAnswerModal({isWrongAnswer}: QuestionImageModalProps): JSX.Element {
const srcImg = isWrongAnswer ? '/img/bad.gif' : '/img/win.gif';
const title = isWrongAnswer ? 'NOOOOOOOOOOOOOOOO' : 'YEEEEEEEEEEEEEEEES';

  return (
    <>
      <DialogTitle sx={{textAlign: 'center'}}>{title}</DialogTitle>
      <DialogContent>
        <QuestionImageModal src={srcImg}></QuestionImageModal>
      </DialogContent>
    </>
  );
}
