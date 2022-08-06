import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { serhiiConfig, serhiiProConfig } from '../configs/serhiiSQuestionConfig';
import Road from './Road';

export default function BattleField(): JSX.Element {
  return (
    <Container>
      <Road prisonConfig={serhiiProConfig} questionConfig={serhiiConfig} />
      <Box>THis is for field</Box>
    </Container>
  );
}
