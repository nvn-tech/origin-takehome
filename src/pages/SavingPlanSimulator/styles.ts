import { createUseStyles } from 'react-jss';
import { Theme } from '../../theming/ThemeProvider';

export default createUseStyles((theme: typeof Theme) => ({
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '32px',
  },

  title: {
    ...theme.typography.small.heading3,
    color: theme.palette.primary,
  },

  container: {
    width: '100%',
    padding: '31px 24px 40px 24px',
    marginTop: '24px',
    boxShadow: '0px 16px 32px rgba(30, 42, 50, 0.08)',
    borderRadius: '8px',
  },

  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '16px',
  },

  [theme.mediaQueries.medium]: {
    title: {
      ...theme.typography.medium.heading3,
    },

    wrapper: {
      marginTop: '48px',
    },

    container: {
      maxWidth: '560px',
    },
    inputContainer: {
      flexDirection: 'row',
      marginTop: '24px',
    },
  },
}));
