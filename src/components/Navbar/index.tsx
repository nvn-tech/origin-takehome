import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

import useStyles from './styles';

const Navbar = (): React.ReactElement => {
  const classes = useStyles();
  return (
    <nav className={classes.container} data-testid="navbar">
      <Logo />
    </nav>
  );
};

export { Navbar };
