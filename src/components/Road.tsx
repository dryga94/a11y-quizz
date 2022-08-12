import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { useEffect, useState } from 'react';
import { FIELDS_COUNT } from '../constants/battle-field-size';
import { ICharacter } from '../interfaces/character';
import { IQuestion } from '../interfaces/questions';
import Character from './Character';
import QuestionModal from './modal/QuestionModal';

interface IProps {
  questionConfig: IQuestion[];
  prisonConfig: IQuestion[];
  isActive: boolean;
  color?: string;
  position?: 'left' | 'right';
  character: ICharacter;
}

export default function Road({
  questionConfig,
  prisonConfig,
  color,
  position,
  isActive,
  character,
}: IProps): JSX.Element {
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
      setTimeout(handleOpen, 1000);
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
          {Array.from(Array(FIELDS_COUNT).keys())
            .reverse()
            .map((stepNum) => (
              <Box
                boxSizing="border-box"
                width={1}
                height={`${100 / FIELDS_COUNT}vh`}
                key={stepNum}
                bgcolor={stepNum > step ? '#F1ECE9' : color}
                sx={{
                  fontSize: 40,
                  justifyContent: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  color: '#787878',
                  border: '0.5px solid #000',
                  borderLeftWidth: position === 'left' ? '0' : '0.5px',
                  borderRightWidth: position === 'right' ? '0' : '0.5px',
                }}
              >
                {stepNum}
              </Box>
            ))}
        </Stack>
        <Character isInPrison={isInPrison} activeStep={step}  character={character}/>
      </Box>

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
