import BattleField from './components/BattleField';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from './theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BattleField />
    </ThemeProvider>
  );
}

export default App;
