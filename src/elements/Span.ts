import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  space,
  SpaceProps,
  width,
  WidthProps,
  display,
  DisplayProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  fontFamily,
  FontFamilyProps,
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
  borderRadius,
  BorderRadiusProps,
} from "styled-system";

export type SpanProps = SpaceProps &
  WidthProps &
  DisplayProps &
  FontSizeProps &
  FontWeightProps &
  FontFamilyProps &
  LineHeightProps &
  TextAlignProps &
  TextStyleProps &
  BackgroundColorProps &
  OpacityProps &
  BordersProps &
  BorderRadiusProps;

const Span = styled("span", { shouldForwardProp })<SpanProps>(
  space,
  width,
  display,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  textStyle,
  color,
  borders,
  borderRadius,
  {}
);

Span.defaultProps = {
  color: "currentcolor",
};

export default Span;
