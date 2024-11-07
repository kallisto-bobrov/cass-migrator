export const breakpoints = {
  xs: 575,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
};

const mq = {
  xs: `max-width: ${breakpoints.sm - 1}px`,
  smUp: `min-width: ${breakpoints.sm}px`,
  sm: `min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md - 1}px`,
  smDown: `max-width: ${breakpoints.md - 1}px`,
  smTillmd: `min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.lg - 1}px`,
  mdUp: `min-width: ${breakpoints.md}px`,
  md: `min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg - 1}px`,
  mdDown: `max-width: ${breakpoints.lg - 1}px`,
  lgUp: `min-width: ${breakpoints.lg}px`,
  lg: `min-width: ${breakpoints.lg}px) and (max-width: ${breakpoints.xl - 1}px`,
  lgDown: `max-width: ${breakpoints.xl - 1}px`,
  xl: `min-width: ${breakpoints.xl}px) and (max-width: ${breakpoints.xxl - 1}px`,
  xlUp: `min-width: ${breakpoints.xl}px`,
  xxl: `min-width: ${breakpoints.xxl}px`,
};

export default mq;
