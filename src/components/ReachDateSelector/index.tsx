import { useEffect, useRef, useState } from 'react';

import { ReactComponent as ChevronLeft } from '../../assets/icons/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../../assets/icons/chevron-right.svg';

import { months } from '../../common/constants';

import useStyles from './styles';

type Props = {
  iterations: number;
  setIterations: React.Dispatch<React.SetStateAction<number>>;
};

const ReachDateSelector = ({
  iterations,
  setIterations,
}: Props): React.ReactElement => {
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const classes = useStyles();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      setFocused(Boolean(ref.current?.contains(e.target as Node)));
    };

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'ArrowLeft': {
          if (iterations > new Date().getMonth() + 1)
            setIterations((i) => i - 1);
          break;
        }

        case 'ArrowRight': {
          setIterations((i) => i + 1);
          break;
        }

        default:
          break;
      }
    };

    if (focused) {
      document.addEventListener('keydown', handleKeyPress);
    } else {
      document.removeEventListener('keydown', handleKeyPress);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [focused, setIterations, iterations]);

  const handleMonthDecrease = () => {
    setIterations((i) => i - 1);
  };

  const handleMonthIncrease = () => {
    setIterations((i) => i + 1);
  };

  const isDecreaseDisabled = iterations <= new Date().getMonth() + 1;
  const year =
    new Date().getFullYear() + Math.floor(iterations / months.length);

  return (
    <div ref={ref} className={classes.container}>
      <h3 className={classes.title}>Reach goal by</h3>
      <div className={classes.picker}>
        <div
          className={classes.pickerContainer}
          data-testid="reach-date-selector"
        >
          <button
            className={classes.controller}
            onClick={handleMonthDecrease}
            disabled={isDecreaseDisabled}
          >
            <ChevronLeft />
          </button>
          <div className={classes.titleContainer}>
            <p className={classes.month}>
              {months[iterations % months.length]}
            </p>
            <p className={classes.year}>{year}</p>
          </div>
          <button className={classes.controller} onClick={handleMonthIncrease}>
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export { ReachDateSelector };
