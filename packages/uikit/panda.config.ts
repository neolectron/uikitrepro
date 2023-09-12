import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  // Where to look for your css declarations
  include: [],
  // Files to exclude
  exclude: [],
  theme: {
    tokens: {
      colors: {
        blueKombo: { value: '#208CFB' },
        yellowKombo: { value: '#FFD720' },
        greyStroke: { value: '#DEE7F4' },
        lightBlue: { value: '#DBEDFE' },
        mediumBlue: { value: '#0167D0' },
        orangeKombo: { value: '#EA7002' },
        mediumGoodGreen: { value: '#59AD6C' },
        goodGreen: { value: '#178737' },
        mediumRedError: { value: '#D8494B' },
        redError: { value: '#E60000' },
        lightGrey: { value: '#f1f3f6' },
        grey1: { value: '#DFE1E4' },
        grey2: { value: '#B1B1B1' },
        grey3: { value: '#838383' },
        grey4: { value: '#424244' },
        deepBlue: { value: '#132968' },
        white: { value: '#FFFFFF' },
        offWhite: { value: '#FEFCF9' },
        subtleBlue: { value: '#EBF4FD' },
        subtleBlueBackground: { value: '#F3F6FC' },
        subtleGreen: { value: '#F3F5F4' },
        subtleRed: { value: '#FBF0F2' },
        subtleOrange: { value: '#FBF4F2' },
        yellowKomboDarker: { value: '#F3CC16' },
        magentaOuiGo: { value: '#C62C7F' },
        yellowOuiGo: { value: '#FFBC40' },
      },
      fonts: {
        Inter: { value: 'Inter' }
      }
    },
    extend: {
      tokens: {
        shadows: {
          valid: { value: '0 0 15px rgba(30, 211, 81, 0.7)' },
          error: { value: '0 0 15px rgba(255, 32, 32, 0.7)' },
        }
      }
    }
  },
  // The output directory for your css system
  outdir: "styled-system",
})