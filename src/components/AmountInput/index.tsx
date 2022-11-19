import type { ChangeEventHandler } from 'react';
import { useRef } from 'react';

import { ReactComponent as DollarSign } from '../../assets/icons/dollar-sign.svg';

import useStyles from './styles';

type Props = {
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
};

const AmountInput = ({ amount, setAmount }: Props): React.ReactElement => {
  const ref = useRef<HTMLInputElement>(null);
  const classes = useStyles();

  const handleAmountChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setAmount(+e.target.value);
  };

  const formatCurrency = (amount: number) => {
    return amount
      .toLocaleString('en-GB', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 2,
      })
      .substring(1);
  };

  const handleInputClick = () => {
    ref.current?.focus();
  };

  return (
    <div className={classes.container}>
      <h3 className={classes.title}>Total amount</h3>
      <div className={classes.inputArea} data-testid="amount-input">
        <DollarSign />
        <input
          ref={ref}
          type="number"
          min="0"
          value={amount}
          onChange={handleAmountChange}
          className={classes.invisible}
        />
        <p className={classes.input} onClick={handleInputClick}>
          {formatCurrency(amount)}
        </p>
      </div>
    </div>
  );
};

export { AmountInput };
