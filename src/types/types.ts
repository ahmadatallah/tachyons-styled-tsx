import { StylesProps, SpaceProps, ColorProps, ThemeValue, ResponsiveValue } from "styled-system";

export type IntrinsicSpaceShorthandAttributes = {
  [key in keyof SpaceProps]?:
    | Pick<SpaceProps, key>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | ResponsiveValue<ThemeValue<string, any>>;
};

export type IntrinsicColorShorthandAttributes = {
  [key in keyof ColorProps]?:
    | Pick<ColorProps, key>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | ResponsiveValue<ThemeValue<string, any>>;
};

export type IntrinsicStylesAttributes = {
  [key in keyof StylesProps]?:
    | Pick<StylesProps, key>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | ResponsiveValue<ThemeValue<string, any>>;
};

export type IntrinsicTachyonsAttributes = IntrinsicSpaceShorthandAttributes &
  IntrinsicStylesAttributes &
  IntrinsicColorShorthandAttributes;
