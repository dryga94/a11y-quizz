import { Box, Typography } from '@mui/material';
import QuestionImage from './QuestionImage';

interface QuestionImageModalProps {
  isWrongAnswer: boolean;
}

export default function QuestionResultAnswer({isWrongAnswer}: QuestionImageModalProps): JSX.Element {
const srcImg = isWrongAnswer ? '/img/bad.gif' : '/img/win.gif';
const title = isWrongAnswer ? 'NOOOOOOOOOOOOOOOO' : 'YEEEEEEEEEEEEEEEES';

  return (
    <>
      <Typography variant="h1">{title}</Typography>
      <Box>
        <QuestionImage src={srcImg}></QuestionImage>
      </Box>
    </>
  );
}
