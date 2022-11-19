import { FinancialGoals } from './enums';

import { ReactComponent as BuildAnEmergencyFund } from '../../assets/icons/build-an-emergency-fund.svg';
import { ReactComponent as BuyACar } from '../../assets/icons/buy-a-car.svg';
import { ReactComponent as BuyAHouse } from '../../assets/icons/buy-a-house.svg';
import { ReactComponent as GoToCollege } from '../../assets/icons/go-to-college.svg';
import { ReactComponent as HaveABaby } from '../../assets/icons/have-a-baby.svg';
import { ReactComponent as TakeAVacation } from '../../assets/icons/take-a-vacation.svg';
import { ReactComponent as ThrowAWeddingParty } from '../../assets/icons/throw-a-wedding-party.svg';

/*
  Note: This would obviously be leveraging Suspense and React.lazy to load those modules dynamically,
  but since this would require an update in webpack an is outside the scope of the proposed activity we're leaving it static.
*/
const icons: Record<FinancialGoals, React.FC> = {
  [FinancialGoals.BUILD_AN_EMERGENCY_FUND]: BuildAnEmergencyFund,
  [FinancialGoals.BUY_A_CAR]: BuyACar,
  [FinancialGoals.BUY_A_HOUSE]: BuyAHouse,
  [FinancialGoals.GO_TO_COLLEGE]: GoToCollege,
  [FinancialGoals.HAVE_A_BABY]: HaveABaby,
  [FinancialGoals.TAKE_A_VACATION]: ThrowAWeddingParty,
  [FinancialGoals.THROW_A_WEDDING_PARTY]: TakeAVacation,
};

export { icons };
