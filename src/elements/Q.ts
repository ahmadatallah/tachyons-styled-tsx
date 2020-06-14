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
  color,
  BackgroundColorProps,
  OpacityProps,
} from "styled-system";

export type QProps = SpaceProps & WidthProps & FontSizeProps & FontWeightProps & BackgroundColorProps & OpacityProps;

const Q = styled("q", { shouldForwardProp })<QProps>(space, width, fontSize, fontWeight, lineHeight, color, {});

export default Q;
