import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { useEffect, useState } from 'react';
import { IQuestion } from '../interfaces/questions';
import Character from './Character';
import QuestionModal from './modal/QuestionModal';

interface IProps {
  questionConfig: IQuestion[];
  prisonConfig: IQuestion[];
}

export default function Road({ questionConfig, prisonConfig }: IProps): JSX.Element {
  const [step, setStep] = useState(0);
  const [isInPrison, setIsInPrison] = useState(false);

  const [open, setOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState<IQuestion>(questionConfig[0]);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  useEffect(() => {
    if (step > 0) {
      setActiveQuestion(isInPrison ? prisonConfig[step - 1] : questionConfig[step - 1]);
    }
  }, [step, isInPrison]);

  return (
    <Box>
      <Button variant="contained" onClick={handleOpen}>
        Open modal
      </Button>
      <QuestionModal
        open={open}
        handleClose={handleClose}
        questionConfig={activeQuestion || questionConfig[0]}
      ></QuestionModal>

      <Typography>{step}</Typography>
      <Button onClick={() => setIsInPrison(!isInPrison)}>Move to prison</Button>
      <Button onClick={() => setStep((prev) => (prev < 7 ? (isInPrison ? prev : prev + 1) : 0))}>
        Go to next step
      </Button>
      <Character isInPrison={isInPrison} activeStep={step} />
    </Box>
  );
}
