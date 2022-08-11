import Box from '@mui/material/Box';

interface QuestionImageProps {
  src: string | undefined;
}

export default function QuestionImage({src}: QuestionImageProps): JSX.Element {


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
