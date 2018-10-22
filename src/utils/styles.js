// @flow
export type BreakpointKeys = "medium" | "large";
export const Breakpoints: { [BreakpointKeys]: number } = {
  medium: 768,
  large: 1024
}

const px2em = (px: number): number => px / 16

export const media = {
  small: `screen and (max-width: ${px2em(Breakpoints.medium - 1)}em)`,
  medium: `screen and (min-width: ${px2em(Breakpoints.medium)}em)`,
  large: `screen and (min-width: ${px2em(Breakpoints.large)}em)`,
}
