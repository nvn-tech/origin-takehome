import { createUseStyles } from 'react-jss';
import { Theme } from '../../theming/ThemeProvider';

export default createUseStyles((theme: typeof Theme) => ({
  container: {
    marginTop: '24px',
    padding: '24px 32px',
  },

  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    color: theme.palette.text.primary,
    ...theme.typography.small.heading3,
  },

  amount: {
    color: theme.palette.secondary,
    ...theme.typography.small.heading1,
  },

  footer: {
    marginTop: '16px',
    color: theme.palette.text.grey,
    fontWeight: 400,
    lineHeight: '150%',
    fontSize: '12px',
    textAlign: 'center',
  },

  [theme.mediaQueries.medium]: {
    footer: {
      marginTop: '25px',
      textAlign: 'left',
    },

    title: {
      ...theme.typography.medium.heading3,
    },

    amount: {
      ...theme.typography.medium.heading1,
    },
  },
}));
