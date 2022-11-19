import { render, screen } from '@testing-library/react';
import { MonthlyAmount } from '.';
import { ThemeProvider } from '../../theming/ThemeProvider';

describe('Component > MonthlyAmount', () => {
  it('should display the correct installments', async () => {
    render(
      <ThemeProvider>
        <MonthlyAmount amount={30000} iterations={13} />
      </ThemeProvider>
    );

    const element = screen.getByTestId('montly-amount');
    const amount = element.getElementsByTagName('h2')[0];

    expect(amount.textContent).toBe('$10000.00');
  });
});
