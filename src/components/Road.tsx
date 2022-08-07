import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

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
      setActiveQuestion(isInPrison ? prisonConfig[step] : questionConfig[step]);
      console.log('step,', step - 1);
    }
  }, [step, isInPrison]);

  return (
    <Box>
      <Box position="relative">
        <Stack>
          {Array.from(Array(7).keys())
            .reverse()
            .map((stepNum) => (
              <Box
                boxSizing="border-box"
                width={1}
                height="11vh"
                border="1px solid red"
                key={stepNum + 1}
              >
                Step {stepNum + 1}
              </Box>
            ))}
        </Stack>
        <Character isInPrison={isInPrison} activeStep={step} />
      </Box>
      <Stack direction="row">
        <Button variant="contained" onClick={handleOpen}>
          OM
        </Button>

        <Button onClick={() => setIsInPrison(!isInPrison)}>SP</Button>
        <Button onClick={() => setStep((prev) => (prev < 7 ? (isInPrison ? prev : prev + 1) : 0))}>
          NS
        </Button>
      </Stack>

      <QuestionModal
        open={open}
        isInPrison={isInPrison}
        step={step}
        setStep={setStep}
        handleClose={handleClose}
        setIsInPrison={setIsInPrison}
        questionConfig={activeQuestion || questionConfig[0]}
      ></QuestionModal>
    </Box>
  );
}
