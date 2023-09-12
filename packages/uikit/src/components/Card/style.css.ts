import { style } from '@vanilla-extract/css';
import { theme } from '../../styles/vars.css';

export const card = style({
  margin: '11px auto',
  width: '100%',
  maxWidth: 'calc(100vw - 32px)',
  backgroundColor: theme.colors.white,
  boxShadow: theme.shadows.base,
  borderRadius: '13px',
  zIndex: '2',

  '@media': {
    'screen and (min-width: 993px)': {
      maxWidth: '420px',
    },
  },
});

export const cardContent = style({
  margin: '0 auto',
  padding: '16px',
  maxHeight: 'fit-content',
  width: 'calc(100% - 32px)',
  position: 'relative',
  overflowY: 'auto',
});

export const cardTitle = style({
  padding: '8px',
  textAlign: 'center',
  borderBottom: `1px solid ${theme.colors.lightGrey}`,
});
