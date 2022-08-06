import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { useState } from 'react';
import { IQuestion } from '../interfaces/questions';
import QuestionModal from './modal/QuestionModal';

interface IProps {
  questionConfig: IQuestion[];
  prisonConfig: IQuestion[];
}

export default function Road({ questionConfig, prisonConfig }: IProps): JSX.Element {
  const [isInPrison, setIsInPrison] = useState(false);

  const [open, setOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState<IQuestion>(questionConfig[0]);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  console.log(prisonConfig);
  return (
    <Box>
      <Button variant="contained" onClick={handleOpen}>
        Open modal
      </Button>
      <QuestionModal
        open={open}
        handleClose={handleClose}
        questionConfig={activeQuestion}
      ></QuestionModal>
      <Button onClick={() => setActiveQuestion(prisonConfig[0])}>setActiveQuestion</Button>

      <Box>{isInPrison ? `${prisonConfig}` : `${questionConfig}`}</Box>
      <Button onClick={() => setIsInPrison(!isInPrison)}>Move to prison</Button>
    </Box>
  );
}
