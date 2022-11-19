import React from 'react';
import { ThemeProvider as Provider } from 'react-jss';
import { mediaQueries } from './breakpoints';

export const Theme = {
  typography: {
    small: {
      heading1: {
        fontFamily: "'Rubik', sans-serif",
        fontWeight: 500,
        fontSize: '24px',
        lineHeight: '120%',
      },
      heading2: {
        fontFamily: "'Rubik', sans-serif",
        fontSize: '20px',
        fontWeight: 500,
        lineHeight: '120%',
      },
      heading3: {
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: '120%',
      },
      paragraph: {
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '150%',
      },
      subtitle: {
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '150%',
      },
      subtitleBold: {
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '150%',
      },
    },
    medium: {
      heading1: {
        fontSize: '32px',
      },
      heading2: {
        fontSize: '20px',
      },
      heading3: {
        fontSize: '20px',
      },
      paragraph: {
        fontSize: '14px',
      },
      subtitle: {
        fontSize: '16px',
      },
      subtitleBold: {
        fontSize: '16px',
      },
    },
  },
  palette: {
    primary: '#1B31A8',
    secondary: '#0079FF',
    text: {
      primary: '#1E2A32',
      secondary: '#708797',
      blue: '#4D6475',
      grey: '#1C1E1F',
    },
  },
  mediaQueries,
};

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => <Provider theme={Theme}>{children}</Provider>;
