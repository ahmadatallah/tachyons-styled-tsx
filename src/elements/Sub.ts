import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  space,
  SpaceProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  lineHeight,
  LineHeightProps,
  color,
  BackgroundColorProps,
  OpacityProps,
} from "styled-system";

export type SubProps = SpaceProps &
  FontSizeProps &
  FontWeightProps &
  LineHeightProps &
  BackgroundColorProps &
  OpacityProps;

const Sub = styled("sub", { shouldForwardProp })<SubProps>(space, fontSize, fontWeight, lineHeight, color, {});

export default Sub;
