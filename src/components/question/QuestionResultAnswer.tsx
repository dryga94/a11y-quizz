import { Box, Typography } from '@mui/material';
import QuestionImage from './QuestionImage';

interface QuestionImageModalProps {
  isCorrectAnswer: boolean;
  character?: JSX.Element;
}

export default function QuestionResultAnswer({isCorrectAnswer, character}: QuestionImageModalProps): JSX.Element {
  const textStyles = {
    WebkitTextStrokeWidth: "1px",
    WebkitTextStrokeColor: "black",
    textFillColor: "#EDE7E2",
  }
  const srcImg = isCorrectAnswer ? '/img/good.gif' : '/img/bad.gif';
  const title = isCorrectAnswer ? <Box>Gooood <Box sx={{...textStyles, display: 'inline'}}>job</Box></Box> : <Box>Wroooon<Box sx={{...textStyles, display: 'inline'}}>g</Box></Box>;

  return (
    <>
      <Typography variant="h1" fontSize={100} fontWeight={500} textOverflow="ellipsis" overflow="hidden" mb={2}>
        {title}
      </Typography>
      {character}
      <Box>
        <QuestionImage src={srcImg}></QuestionImage>
      </Box>
    </>
  );
}
