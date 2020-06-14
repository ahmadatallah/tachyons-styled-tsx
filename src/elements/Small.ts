import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  space,
  SpaceProps,
  width,
  WidthProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  lineHeight,
  LineHeightProps,
  textStyle,
  TextStyleProps,
  color,
  BackgroundColorProps,
  OpacityProps,
} from "styled-system";

export type SmallProps = SpaceProps &
  WidthProps &
  FontSizeProps &
  FontWeightProps &
  LineHeightProps &
  TextStyleProps &
  BackgroundColorProps &
  OpacityProps;

const Small = styled("small", { shouldForwardProp })<SmallProps>(
  space,
  width,
  fontSize,
  fontWeight,
  lineHeight,
  textStyle,
  color,
  {}
);

export default Small;
