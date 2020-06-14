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
} from "styled-system";

export type LabelProps = SpaceProps &
  WidthProps &
  MaxWidthProps &
  DisplayProps &
  FontSizeProps &
  FontWeightProps &
  LineHeightProps &
  TextAlignProps &
  TextStyleProps &
  BackgroundColorProps &
  OpacityProps;

const Label = styled("label", { shouldForwardProp })<LabelProps>(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  textStyle,
  color,
  {}
);

export default Label;
