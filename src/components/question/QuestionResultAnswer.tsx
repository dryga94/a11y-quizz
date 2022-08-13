import { Box, Typography } from '@mui/material';
import QuestionImage from './QuestionImage';

interface QuestionImageModalProps {
  isCorrectAnswer: boolean;
}

export default function QuestionResultAnswer({isCorrectAnswer}: QuestionImageModalProps): JSX.Element {
const srcImg = isCorrectAnswer ? '/img/win.gif' : '/img/bad.gif';
const title = isCorrectAnswer ? 'YEEEEEEEEEEEEEEEES' : 'NOOOOOOOOOOOOOOOO';

  return (
    <>
      <Typography variant="h1" textOverflow="ellipsis" overflow="hidden" mb={10}>{title}</Typography>
      <Box>
        <QuestionImage src={srcImg}></QuestionImage>
      </Box>
    </>
  );
}
