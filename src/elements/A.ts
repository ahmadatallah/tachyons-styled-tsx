import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  space,
  SpaceProps,
  width,
  WidthProps,
  maxWidth,
  MaxWidthProps,
  display,
  DisplayProps,
  alignItems,
  AlignItemsProps,
  justifyContent,
  JustifyContentProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  textAlign,
  TextAlignProps,
  color,
  BackgroundColorProps,
  OpacityProps,
  borders,
  BordersProps,
  borderColor,
  BorderColorProps,
  borderRadius,
  BorderRadiusProps,
  textStyle,
  TextStyleProps,
} from "styled-system";

export type AProps = SpaceProps &
  WidthProps &
  MaxWidthProps &
  DisplayProps &
  FontSizeProps &
  FontWeightProps &
  TextAlignProps &
  BackgroundColorProps &
  OpacityProps &
  TextStyleProps &
  AlignItemsProps &
  JustifyContentProps &
  BordersProps &
  BorderColorProps &
  BorderRadiusProps;

const A = styled("a", { shouldForwardProp })<AProps>(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  fontWeight,
  textAlign,
  textStyle,
  color,
  alignItems,
  justifyContent,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: "border-box",
    textDecoration: "none",
    ":hover": {
      cursor: "pointer",
    },
  }
);

A.defaultProps = {
  display: "inline-block",
  bg: "transparent",
};

export default A;
