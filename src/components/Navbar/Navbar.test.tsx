import { render, screen } from '@testing-library/react';
import { Navbar } from '.';
import { ThemeProvider } from '../../theming/ThemeProvider';

describe('Component > Navbar', () => {
  it('should load the logo', async () => {
    render(
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    );

    const element = screen.getByTestId('navbar');
    const logo = element.getElementsByTagName('svg')[0];

    expect(logo).toBeDefined();
  });
});
