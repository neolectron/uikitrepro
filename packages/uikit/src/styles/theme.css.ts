import { globalStyle } from '@vanilla-extract/css';
import { defineProperties } from '@vanilla-extract/sprinkles';
import { theme } from './vars.css';

globalStyle('*, *::before, *::after', {
  fontSize: 'inherit',
  fontWeight: 'inherit',
  // boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  border: '0 solid',
  fontFamily: theme.typography.fonts.body,
});

globalStyle('button, a', {
  border: 'none',
  boxSizing: 'border-box',
  backgroundColor: 'transparent',
  cursor: 'pointer',
});

// remove default focus-visible style
globalStyle('button:focus-visible', {
  outline: 'none',
});

// remove default link style
globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});
// remove autocomplete style
globalStyle('input:-webkit-autofill', {
  WebkitBackgroundClip: 'text',
});

export const displayProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    position: ['absolute', 'relative'],
    width: theme.sizes,
    height: theme.sizes,
    maxWidth: theme.sizes,
    display: ['none', 'flex', 'block', 'inline', 'grid', 'inline-flex'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
      'repeat(4, 1fr)',
      'repeat(5, 1fr)',
      'repeat(6, 1fr)',
      'repeat(7, 1fr)',
    ],
    flexDirection: ['row', 'column'],
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    alignSelf: ['stretch', 'flex-start', 'center', 'flex-end'],
    flexWrap: ['wrap', 'nowrap'],
    flexBasis: theme.sizes,
    flexGrow: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    flexShrink: [0, 1],
    paddingTop: theme.space,
    paddingBottom: theme.space,
    paddingLeft: theme.space,
    paddingRight: theme.space,
    marginTop: theme.space,
    marginBottom: theme.space,
    marginLeft: theme.space,
    marginRight: theme.space,
    gap: theme.space,
  },
  shorthands: {
    pos: ['position'],
    d: ['display'],
    w: ['width'],
    h: ['height'],
    maxW: ['maxWidth'],
    boxSize: ['width', 'height'],
    m: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginLeft', 'marginRight'],
    p: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    placeItems: ['justifyContent', 'alignItems'],
    gridCol: ['gridTemplateColumns'],
  },
});

export const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'lightMode',
  properties: {
    color: theme.colors,
    background: theme.colors,
  },
});

export const textProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    fontFamily: theme.typography.fonts,
    fontSize: theme.typography.fontSizes,
    fontWeight: theme.typography.fontWeights,
    lineHeight: theme.typography.lineHeights,
    letterSpacing: theme.typography.letterSpacings,
    textAlign: ['left', 'center', 'right'],
  },
  shorthands: {
    font: ['fontFamily'],
    fs: ['fontSize'],
    fw: ['fontWeight'],
    lh: ['lineHeight'],
    ls: ['letterSpacing'],
    ta: ['textAlign'],
  },
});

export const borderProperties = defineProperties({
  properties: {
    borderStyle: ['solid', 'none'],
    borderBottomWidth: [0, 0.5, 1, 1.3, 1.5, 2, 4, 8],
    borderTopWidth: [0, 0.5, 1, 1.3, 1.5, 2, 4, 8],
    borderLeftWidth: [0, 0.5, 1, 1.3, 1.5, 2, 4, 8],
    borderRightWidth: [0, 0.5, 1, 1.3, 1.5, 2, 4, 8],
    borderWidth: [0, 0.5, 1, 1.3, 1.5, 2, 4, 8],
    borderColor: theme.colors,
    borderRadius: theme.radius,
  },
});

export const shadowProperties = defineProperties({
  properties: {
    boxShadow: theme.shadows,
  },
});
