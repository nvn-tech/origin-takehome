import { FinancialGoals } from './enums';
import { icons } from './icons';

import useStyles from './styles';

type Props = {
  goal: FinancialGoals;
};

const generateFriendlyTitle = (goal: FinancialGoals) => {
  const str = goal.replaceAll('-', ' ');
  const friendlyTitle = str.charAt(0).toUpperCase() + str.slice(1);
  return friendlyTitle;
};

const SavingGoalTitle = ({ goal }: Props): React.ReactElement => {
  const classes = useStyles();
  const Icon = icons[goal];

  return (
    <div className={classes.container}>
      <div className={classes.headers}>
        <Icon />
        <div className={classes.textArea}>
          <h2 className={classes.title}>{generateFriendlyTitle(goal)}</h2>
          <p className={classes.subtitle}>Saving goal</p>
        </div>
      </div>
    </div>
  );
};

export { SavingGoalTitle };
