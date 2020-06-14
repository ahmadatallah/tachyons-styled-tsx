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
  lineHeight,
  LineHeightProps,
  textAlign,
  TextAlignProps,
  textStyle,
  TextStyleProps,
  color,
  BackgroundColorProps,
  OpacityProps,
  borders,
  BordersProps,
  borderColor,
  BorderColorProps,
} from "styled-system";

export type H2Props = SpaceProps &
  WidthProps &
  MaxWidthProps &
  DisplayProps &
  AlignItemsProps &
  JustifyContentProps &
  FontSizeProps &
  FontWeightProps &
  LineHeightProps &
  TextAlignProps &
  TextStyleProps &
  BackgroundColorProps &
  OpacityProps &
  BordersProps &
  BorderColorProps;

const H2 = styled("h2", { shouldForwardProp })<H2Props>(
  space,
  width,
  maxWidth,
  display,
  alignItems,
  justifyContent,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  textStyle,
  color,
  borders,
  borderColor,
  {
    boxSizing: "border-box",
  }
);

export default H2;
