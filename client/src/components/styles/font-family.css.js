// @flow
import { injectGlobal } from 'styled-components'
import zousanFont from '../assets/fonts/zousan.otf'

const fontFace = `
  @font-face {
    font-family: 'zousan';
    src: url(${zousanFont}) format('truetype');
  }
`

injectGlobal`${fontFace}`

export const zousan = `font-family: 'zousan';`

export const YuGothic = `font-family: "游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", "メイリオ", "Meiryo", "sans-serif";`
