import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom';
import { ThemeProvider } from '../../theming/ThemeProvider';
import SavingPlanSimulator from '../../pages/SavingPlanSimulator';

describe('Component > ReachDateSelector', () => {
  it('should allow arrows navigation when focused', async () => {
    // The formatting depends on internal state, we need to render the parent node.
    render(
      <ThemeProvider>
        <SavingPlanSimulator />
      </ThemeProvider>
    );

    const element = screen.getByTestId('reach-date-selector');
    const [monthDisplay] = Array.from(element.getElementsByTagName('p'));
    const date = new Date();
    const year = date.getFullYear();
    const nextMonthIndex = date.getMonth() + 1 > 11 ? 0 : date.getMonth() + 1;
    const nextMonth = new Date(year, nextMonthIndex).toLocaleString('default', {
      month: 'long',
    });
    const twoMonthsAhead = new Date(year, nextMonthIndex + 1).toLocaleString(
      'default',
      {
        month: 'long',
      }
    );

    // Without focus nothing changes
    fireEvent.keyDown(monthDisplay, { code: 'ArrowRight' });
    expect(monthDisplay.textContent).toBe(nextMonth);

    // Focusing and iterating forward one time
    userEvent.click(monthDisplay);
    fireEvent.keyDown(monthDisplay, { code: 'ArrowRight' });
    expect(monthDisplay.textContent).toBe(twoMonthsAhead);

    // Backing one month
    fireEvent.keyDown(monthDisplay, { code: 'ArrowLeft' });
    expect(monthDisplay.textContent).toBe(nextMonth);
  });

  it('should allow only future months', async () => {
    // The formatting depends on internal state, we need to render the parent node.
    render(
      <ThemeProvider>
        <SavingPlanSimulator />
      </ThemeProvider>
    );

    const element = screen.getByTestId('reach-date-selector');
    const [monthDisplay] = Array.from(element.getElementsByTagName('p'));
    const date = new Date();
    const year = date.getFullYear();
    const nextMonthIndex = date.getMonth() + 1 > 11 ? 0 : date.getMonth() + 1;
    const nextMonth = new Date(year, nextMonthIndex).toLocaleString('default', {
      month: 'long',
    });

    // Focusing and iterating forward one time
    userEvent.click(monthDisplay);
    fireEvent.keyDown(monthDisplay, { code: 'ArrowLeft' });
    expect(monthDisplay.textContent).toBe(nextMonth);
  });

  it('should allow mouse navigation', async () => {
    // The formatting depends on internal state, we need to render the parent node.
    render(
      <ThemeProvider>
        <SavingPlanSimulator />
      </ThemeProvider>
    );

    const element = screen.getByTestId('reach-date-selector');
    const [left, right] = Array.from(element.getElementsByTagName('button'));
    const [monthDisplay] = Array.from(element.getElementsByTagName('p'));
    const date = new Date();
    const year = date.getFullYear();
    const nextMonthIndex = date.getMonth() + 1 > 11 ? 0 : date.getMonth() + 1;
    const nextMonth = new Date(year, nextMonthIndex).toLocaleString('default', {
      month: 'long',
    });
    const twoMonthsAhead = new Date(year, nextMonthIndex + 1).toLocaleString(
      'default',
      {
        month: 'long',
      }
    );

    // Only future months remember?
    userEvent.click(left);
    expect(monthDisplay.textContent).toBe(nextMonth);

    // Iterating forward one time
    userEvent.click(right);
    expect(monthDisplay.textContent).toBe(twoMonthsAhead);
  });
});
