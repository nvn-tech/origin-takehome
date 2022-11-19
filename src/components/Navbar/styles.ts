import { createUseStyles } from 'react-jss';
import { mediaQueries } from '../../theming/breakpoints';

export default createUseStyles({
  container: {
    height: '56px',
    padding: '16px',
  },
  [mediaQueries.medium]: {
    container: {
      height: '80px',
      padding: '24px 56px',
    },
  },
});
