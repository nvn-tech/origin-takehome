import { useState } from 'react';

import { FinancialGoals } from '../../components/SavingGoalTitle/enums';

import {
  AmountInput,
  MonthlyAmount,
  ReachDateSelector,
  SavingGoalTitle,
  SubmitButton,
} from '../../components';

import useStyles from './styles';

const SavingPlanSimulator = (): React.ReactElement => {
  const [goal] = useState<FinancialGoals>(FinancialGoals.BUY_A_HOUSE);
  const [iterations, setIterations] = useState<number>(
    new Date().getMonth() + 1
  );
  const [amount, setAmount] = useState<number>(0);

  const classes = useStyles();
  return (
    <section className={classes.wrapper}>
      <h1 className={classes.title}>
        Let&apos;s plan your <strong>saving goal.</strong>
      </h1>
      <div className={classes.container}>
        <SavingGoalTitle goal={goal} />
        <div className={classes.inputContainer}>
          <AmountInput amount={amount} setAmount={setAmount} />
          <ReachDateSelector
            iterations={iterations}
            setIterations={setIterations}
          />
        </div>
        <MonthlyAmount amount={amount} iterations={iterations} />
      </div>
      <SubmitButton />
    </section>
  );
};

export default SavingPlanSimulator;
