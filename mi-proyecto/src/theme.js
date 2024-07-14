// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff5722', // Color principal del proyecto
    },
    secondary: {
      main: '#03a9f4', // Color secundario del proyecto
    },
  },
  typography: {
    h6: {
      flexGrow: 1,
    },
  },
});

export default theme;
