import { globalFontFace } from '@vanilla-extract/css';

const inter = 'Inter';
globalFontFace(inter, {
  src: 'local("Inter"), local("Inter"), url("https://fonts.googleapis.com/css?family=Inter")',
});

// https://github.com/chakra-ui/chakra-ui/blob/05b19899b02e17b4ee16045c9e5065fa835f0159/packages/components/theme/src/foundations/typography.ts#L1-L64
const typography = {
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },

  lineHeights: {
    unset: 'unset',
    normal: 'normal',
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: '2',
    '3': '.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    '9': '2.25rem',
    '10': '2.5rem',
  },

  fontWeights: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    black: '900',
  },

  fonts: {
    heading: `${inter}, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `${inter}, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
  },

  fontSizes: {
    '3xs': '0.45rem',
    '2xs': '0.625rem',
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
} as const;

const space = {
  auto: 'auto',
  none: 'none',
  unset: 'unset',
  xs: '0.25rem',
  sm: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.5rem',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
} as const;

// https://github.com/chakra-ui/chakra-ui/blob/05b19899b02e17b4ee16045c9e5065fa835f0159/packages/components/theme/src/foundations/shadows.ts#L17
const shadows = {
  xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0px 2px 5px 0px rgba(0, 0, 0, 0.15)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  outline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
  inner: 'inset 0px 4px 4px rgba(111, 111, 111, 0.1)',
  focus: '0px 4px 10px rgba(0, 0, 0, 0.15)',
  none: 'none',
  'dark-lg': 'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px',
  valid: '0 0 15px rgba(30, 211, 81, 0.7)',
  error: '0 0 15px rgba(255, 32, 32, 0.7)',
} as const;

// https://github.com/chakra-ui/chakra-ui/blob/05b19899b02e17b4ee16045c9e5065fa835f0159/packages/components/theme/src/foundations/z-index.ts#L1-L15
const zIndices = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const;

const sizes = ['auto', '0', '50px', '0%', '25%', '50%', '75%', '100%', '100vh', '100vw'] as const;

const colors = {
  blueKombo: '#208CFB',
  yellowKombo: '#FFD720',
  greyStroke: '#DEE7F4',
  lightBlue: '#DBEDFE',
  mediumBlue: '#0167D0',
  orangeKombo: '#EA7002',
  mediumGoodGreen: '#59AD6C',
  goodGreen: '#178737',
  mediumRedError: '#D8494B',
  redError: '#E60000',
  lightGrey: '#f1f3f6',
  grey1: '#DFE1E4',
  grey2: '#B1B1B1',
  grey3: '#838383',
  grey4: '#424244',
  deepBlue: '#132968',
  white: '#FFFFFF',
  offWhite: '#FEFCF9',
  subtleBlue: '#EBF4FD',
  subtleBlueBackground: '#F3F6FC',
  subtleGreen: '#F3F5F4',
  subtleRed: '#FBF0F2',
  subtleOrange: '#FBF4F2',
  yellowKomboDarker: '#F3CC16',
  magentaOuiGo: '#C62C7F',
  yellowOuiGo: '#FFBC40',
  inherit: 'inherit',
} as const;

const radius = {
  none: '0',
  sm: '0.125rem',
  base: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
};

export const theme = {
  colors,
  sizes,
  typography,
  space,
  shadows,
  zIndices,
  radius,
};
