import { createUseStyles } from 'react-jss';
import { Theme } from '../../theming/ThemeProvider';

export default createUseStyles((theme: typeof Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '16px',
  },

  title: {
    color: theme.palette.text.primary,
    ...theme.typography.small.paragraph,
  },

  picker: {
    marginTop: '4px',
    cursor: 'pointer',
  },

  pickerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    minHeight: '56px',
  },

  controller: {
    background: 'none',
    border: 'none',
    padding: 10,
    cursor: 'pointer',
    outline: 'none',
  },

  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  month: {
    ...theme.typography.small.subtitleBold,
    color: theme.palette.text.primary,
  },

  year: {
    ...theme.typography.small.subtitle,
    color: theme.palette.text.secondary,
  },

  [theme.mediaQueries.medium]: {
    container: {
      minWidth: '192px',
      marginTop: '0',
      marginLeft: '16px',
    },

    title: {
      ...theme.typography.medium.paragraph,
    },
    month: {
      ...theme.typography.medium.subtitleBold,
    },
    year: {
      ...theme.typography.medium.subtitle,
    },
  },
}));
