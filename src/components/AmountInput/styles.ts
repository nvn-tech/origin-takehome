import { createUseStyles } from 'react-jss';
import { Theme } from '../../theming/ThemeProvider';

export default createUseStyles((theme: typeof Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    minHeight: '56px',
  },

  inputArea: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '4px',
    padding: '16px 4px',
  },

  invisible: {
    position: 'absolute',
    border: 'none',
    width: 0,
    height: 0,
  },

  title: {
    color: theme.palette.text.primary,
    ...theme.typography.small.paragraph,
  },

  input: {
    ...theme.typography.small.heading2,
    color: theme.palette.text.blue,
    marginLeft: '8px',
  },

  [theme.mediaQueries.medium]: {
    title: {
      ...theme.typography.medium.paragraph,
    },

    input: {
      fontSize: '24px',
    },
  },
}));
