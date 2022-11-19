import { createUseStyles } from 'react-jss';
import type { Theme } from '../../theming/ThemeProvider';

export default createUseStyles((theme: typeof Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },

  headers: {
    display: 'flex',
    alignItems: 'center',
  },

  textArea: {
    marginLeft: '15px',
  },

  title: {
    ...theme.typography.small.heading2,
    color: theme.palette.text.primary,
  },

  subtitle: {
    ...theme.typography.small.subtitle,
    color: theme.palette.text.secondary,
    marginTop: '4px',
  },

  [theme.mediaQueries.medium]: {
    title: {
      ...theme.typography.medium.heading2,
    },
    subtitle: {
      ...theme.typography.medium.subtitle,
    },
  },
}));
