import { css } from 'styled-components'

export const FONT = {
  SIZE: {
    REGULAR: '1em',
    SMALL: '0,8em',
    MEDIUM: '1.2em',
    LARGE: '2em'
  }
}

export const Colors = {
  BLACK: '#212121',
  AQUA_MARINE: '#50c9c3',
  PINKISH: '#e2608b',
  ICE_BLUE: '#f7fcfc',
  DARK_LILAC: '#ab629f',
  BLUSH_PINK: '#f99192',
  SALMON: '#f97171',
  LIGHT_TEAL: '#96deda',
  DUCK_EGG_BLUE: '#caeeec',
  BROWNISH_GREY: '#757575',
  BROWN_GREY: '#9e9e9e',
  VERY_LIGHT_PINK: '#f0f0f0',
  WHITE: '#f7f7f7',
  VERY_LIGHT_PINK_2: '#e0e0e0',
  WHITE_2: '#fafafa',
  LIGHT_BACKGROUND: 'rgba(240, 250, 248, 0.5)'
}

export const WINDOW_SIZES = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}

export const MEDIA = Object.keys(WINDOW_SIZES).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${WINDOW_SIZES[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})
