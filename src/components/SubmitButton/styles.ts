import { createUseStyles } from 'react-jss';
import { Theme } from '../../theming/ThemeProvider';

export default createUseStyles((theme: typeof Theme) => ({
  container: {
    backgroundColor: theme.palette.primary,
    width: '320px',
    height: '56px',
    borderRadius: '32px',
    color: 'white',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '20px',
    marginTop: '32px',
    alignSelf: 'center',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
  },
}));
