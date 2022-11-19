import useStyles from './styles';

const SubmitButton = (): React.ReactElement => {
  const classes = useStyles();
  return <button className={classes.container}>Confirm</button>;
};

export { SubmitButton };
