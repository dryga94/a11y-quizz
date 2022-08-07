import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { useEffect, useState } from 'react';
import { FIELD_HEIGHT_VH } from '../constants/battle-field-size';
import { IQuestion } from '../interfaces/questions';
import Character from './Character';
import QuestionModal from './modal/QuestionModal';

interface IProps {
  questionConfig: IQuestion[];
  prisonConfig: IQuestion[];
  isActive: boolean;
}

export default function Road({ questionConfig, prisonConfig, isActive }: IProps): JSX.Element {
  const [step, setStep] = useState(0);
  const [isInPrison, setIsInPrison] = useState(false);
  const [isAbleToAnswer, setIsAbleToAnswer] = useState(true);

  const [open, setOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState<IQuestion>(questionConfig[0]);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  useEffect(() => {
    if (isActive && isAbleToAnswer) {
      if (!isInPrison) {
        setStep((prev) => prev + 1);
      }
      setTimeout(() => setOpen(true), 1000);
    }
  }, [isActive, isInPrison]);

  useEffect(() => {
    if (!isActive) {
      setIsAbleToAnswer(true);
    }
    if (step > 0) {
      setActiveQuestion(isInPrison ? prisonConfig[step - 1] : questionConfig[step - 1]);
    }
  }, [step, isInPrison, isActive]);

  return (
    <Box bgcolor={isActive ? 'secondary.light' : 'transparent'}>
      <Box position="relative">
        <Stack>
          {Array.from(Array(8).keys())
            .reverse()
            .map((stepNum) => (
              <Box
                boxSizing="border-box"
                width={1}
                height={`${FIELD_HEIGHT_VH}vh`}
                border="1px solid red"
                key={stepNum}
              >
                Step {stepNum}
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
        setIsAbleToAnswer={setIsAbleToAnswer}
        handleClose={handleClose}
        setIsInPrison={setIsInPrison}
        questionConfig={activeQuestion || questionConfig[0]}
      ></QuestionModal>
    </Box>
  );
}
