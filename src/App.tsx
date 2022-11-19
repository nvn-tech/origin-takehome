import SavingPlanSimulator from './pages/SavingPlanSimulator';
import { ThemeProvider } from './theming/ThemeProvider';
import './globals.css';
import { Navbar } from './components';

export function App(): JSX.Element {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <SavingPlanSimulator />
      </main>
    </ThemeProvider>
  );
}
