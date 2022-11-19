export const breakpoints = {
  small: 592,
  medium: 768,
  large: 992,
  extraLarge: 1440,
};

export const mediaQueries = {
  small: `@media screen and (min-width: ${breakpoints.small}px)`,
  medium: `@media screen and (min-width: ${breakpoints.medium}px)`,
  large: `@media screen and (min-width: ${breakpoints.large}px)`,
  extraLarge: `@media screen and (min-width: ${breakpoints.extraLarge}px)`,
};
