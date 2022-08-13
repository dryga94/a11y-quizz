import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { useEffect, useState } from 'react';
import { FIELDS_COUNT } from '../constants/battle-field-size';
import { ICharacter } from '../interfaces/character';
import { IUserState } from '../interfaces/roads';
import Character from './Character';

interface IProps {
  isActive: boolean;
  color?: string;
  position?: 'left' | 'right';
  activeRoad: number;
  isInPrison: boolean;
  character: ICharacter;
  setUserState(activeRoad: number, userState: IUserState): void;
}

export default function Road({
  color,
  position,
  isActive,
  isInPrison,
  activeRoad,
  character,
  setUserState,
}: IProps): JSX.Element {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (isActive) {
      if (!isInPrison) {
        setStep((prev) => prev + 1);
      }
    }
  }, [isActive, isInPrison]);

  useEffect(() => {
    if (step > 0) {
      setUserState(activeRoad, {
        isInPrison,
        activeStep: step - 1,
      });
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
        <Character isInPrison={isInPrison} activeStep={step} character={character} />
      </Box>
    </Box>
  );
}
