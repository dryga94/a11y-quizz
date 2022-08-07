import Box from '@mui/material/Box';

interface QuestionImageModalProps {
  src: string | undefined;
}

export default function QuestionImageModal({src}: QuestionImageModalProps): JSX.Element {


  return (
    <Box
      component="img"
      src={src}
      alt=""
      sx={{
        display: 'flex',
        maxWidth: 1,
        maxHeight: 400,
        mx: "auto",
      }}
    />
  );
}
