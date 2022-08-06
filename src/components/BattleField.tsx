import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { serhiiConfig } from '../configs/serhiiSQuestionConfig';
import Road from './Road';

export default function BattleField(): JSX.Element {
  return (
    <Container>
      <Road prisonConfig={serhiiConfig} questionConfig={serhiiConfig} />
      <Box>THis is for field</Box>
    </Container>
  );
}
