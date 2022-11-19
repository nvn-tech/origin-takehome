import { months } from '../../common/constants';

import useStyles from './styles';

type Props = {
  amount: number;
  iterations: number;
};

const MonthlyAmount = ({ amount, iterations }: Props): React.ReactElement => {
  const classes = useStyles();

  const monthlyAmount = amount / (iterations - new Date().getMonth());
  const year =
    new Date().getFullYear() + Math.floor(iterations / months.length);
  const installments = iterations - new Date().getMonth();

  return (
    <div className={classes.container} data-testid="montly-amount">
      <div className={classes.content}>
        <h3 className={classes.title}>Monthly Amount</h3>
        <h2 className={classes.amount}>${monthlyAmount.toFixed(2)}</h2>
      </div>
      <p className={classes.footer}>
        You&apos;re planning <strong>{installments} monthly deposits</strong> to
        reach your <strong>${amount}</strong> goal by{' '}
        {months[iterations % months.length]} {year}.
      </p>
    </div>
  );
};

export { MonthlyAmount };
