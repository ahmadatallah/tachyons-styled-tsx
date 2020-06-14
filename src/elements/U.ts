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
  color,
  BackgroundColorProps,
  OpacityProps,
} from "styled-system";

export type UProps = SpaceProps & WidthProps & FontSizeProps & FontWeightProps & BackgroundColorProps & OpacityProps;

const U = styled("u", { shouldForwardProp })<UProps>(space, width, fontSize, fontWeight, color, {});

export default U;
