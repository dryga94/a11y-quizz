import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { IQuestion } from '../interfaces/questions';

interface IProps {
  questionConfig: IQuestion[];
  prisonConfig: IQuestion[];
}

export default function Road({ questionConfig, prisonConfig }: IProps): JSX.Element {
  const [isInPrison, setIsInPrison] = useState(false);
  return (
    <Box>
      <Box>{isInPrison ? `${prisonConfig}` : `${questionConfig}`}</Box>
      <Button onClick={() => setIsInPrison(!isInPrison)}>Move to prison</Button>
    </Box>
  );
}
