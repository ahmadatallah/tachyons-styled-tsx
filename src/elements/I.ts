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
  textStyle,
  TextStyleProps,
  color,
  BackgroundColorProps,
  OpacityProps,
} from "styled-system";

export type IProps = SpaceProps &
  WidthProps &
  FontSizeProps &
  FontWeightProps &
  TextStyleProps &
  BackgroundColorProps &
  OpacityProps;

const I = styled("i", { shouldForwardProp })(space, width, fontSize, fontWeight, color, textStyle, {});

export default I;
