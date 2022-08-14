import { Box, Typography } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { QUESTION_FOOTER_SIZE } from '../constants/battle-field-size';



export default function Rules(): JSX.Element {
  const bodtStyles = {
    maxHeight: `calc(100vh - ${QUESTION_FOOTER_SIZE}px)`,
    p: (theme: Theme) => theme.spacing(7, 0, 7, 7),
    overflow: 'auto',
  }

  return (
    <Box sx={{ ...bodtStyles }}>
      <Box pr={7}>
        <Typography variant="h1" mb={4}>How it work ?</Typography>
        <Typography variant="h6" mb={3}>Суть игры в том, чтобы дойти до финиша ответив на максимально большое количество вопросов.</Typography>
        <Typography variant="subtitle1">Ход игры:</Typography>
        <Box component="ol" mb={3}>
          <Box component="li">Участники ходят по очереди, отвечая на вопрос при перемещении на новую клеточку.</Box>
          <Box component="li">Если участник ответит на вопрос неверно он перемещается в тюрьму до конца итерации. Если он ответил верно он остается на своей клеточке и ему засчитывается бал.</Box>
          <Box component="li">Если участник находится в тюрьме когда к нему пришел ход, он отвечает на вопрос, что бы выйти из тюрьмы. Если он дал верный ответ, он выходит с тюрьмы и может сделать свой ход. Если он ответил не верно, он выходит с тюрьмы, но пропускает свой ход (итерацию).</Box>
          <Box component="li">Ходы идут по кругу пока кто-то из участников не дойдет до финиша. Кто первый дошел до финиша тот и победил!</Box>
        </Box>

        <Typography variant="subtitle1">Доп. информация:</Typography>

        <Box component="ul" mb={3}>
          <Box component="li">У каждого участника есть 1-на тайная клеточка с вопросом.</Box>
          <Box component="li">Вопросы, которые помогают выйти из тюрьмы сложнее в виде ответа. (Так как нужно будет дать либо развернутый ответ, либо написать код.</Box>
        </Box>
        </Box>
    </Box>
  );
}
