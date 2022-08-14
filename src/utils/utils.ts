import { ICharacter } from './../interfaces/character';

export const getRoadPosition = (index: number, arr: ICharacter[]): 'left' | 'right' | undefined => {
  if (index === 0) return 'left';
  if (index === arr.length) return 'right';
  return
};
