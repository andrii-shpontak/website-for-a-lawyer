import { createTheme } from '@mui/material';

export const AccordionTheme = createTheme({
  components: {
    MuiAccordionSummary: {
      styleOverrides: {
        expandIconWrapper: {
          transform: 'rotate(45deg)',
        },
      },
    },
  },
});
