import { Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { serhiiConfig, serhiiProConfig } from '../configs/serhiiSQuestionConfig';
import Road from './Road';

export default function BattleField(): JSX.Element {
  return (
    <Container>
      <Typography variant="h3">This is the battlefield</Typography>
      <Stack
        minHeight="88vh"
        display="grid"
        gridTemplateColumns="repeat(3, 14vw)"
        justifyContent="center"
        gap={3}
      >
        <Road prisonConfig={serhiiProConfig} questionConfig={serhiiConfig} />
      </Stack>
    </Container>
  );
}
