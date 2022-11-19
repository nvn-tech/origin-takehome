import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { ThemeProvider } from '../../theming/ThemeProvider';
import SavingPlanSimulator from '../../pages/SavingPlanSimulator';

describe('Component > AmountInput', () => {
  it('should accept only numbers', async () => {
    // The formatting depends on internal state, we need to render the parent node.
    render(
      <ThemeProvider>
        <SavingPlanSimulator />
      </ThemeProvider>
    );

    const element = screen.getByTestId('amount-input');
    const input = element.getElementsByTagName('input')[0];
    const paragraph = element.getElementsByTagName('p')[0];
    userEvent.type(input, 'F');
    userEvent.type(input, '2');
    expect(paragraph.textContent).toBe('2.00');
  });

  it('should display in currency format', async () => {
    render(
      <ThemeProvider>
        <SavingPlanSimulator />
      </ThemeProvider>
    );

    const element = screen.getByTestId('amount-input');
    const input = element.getElementsByTagName('input')[0];
    const paragraph = element.getElementsByTagName('p')[0];
    userEvent.type(input, '3500.45');
    expect(paragraph.textContent).toBe('3,500.45');
  });
});
