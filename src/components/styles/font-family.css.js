// @flow
import { injectGlobal } from 'styled-components'
import zousanFont from '../assets/fonts/zousan.otf'

export const fontFace = `
  @font-face {
    font-family: 'zousan';
    src: url(${zousanFont}) format('truetype');
  }
`

injectGlobal`${fontFace}`

export const FONT_FAMILY = {
  ZOUSAN: `font-family: 'zousan';`,
  YUGOTHIC: `font-family: "游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", "メイリオ", "Meiryo", "sans-serif";`,
  TOPPANBUNKYU: `font-family: "Toppan Bunkyu Midashi Gothic";`,
  OBLIQUE: `font-family: oblique;`,
  AVENIR: 'font-family: Avenir;'
}
