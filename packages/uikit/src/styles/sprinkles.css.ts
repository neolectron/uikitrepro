import { createSprinkles } from '@vanilla-extract/sprinkles';
import { colorProperties, displayProperties, textProperties, borderProperties, shadowProperties } from './theme.css';

export const sprinkles = createSprinkles(
  displayProperties,
  colorProperties,
  textProperties,
  borderProperties,
  shadowProperties,
);
