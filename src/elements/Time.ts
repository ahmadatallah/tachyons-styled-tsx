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
  textAlign,
  TextAlignProps,
  color,
  BackgroundColorProps,
  OpacityProps,
  borders,
  BordersProps,
  borderColor,
  BorderColorProps,
} from "styled-system";

export type TimeProps = SpaceProps &
  WidthProps &
  DisplayProps &
  FontSizeProps &
  FontWeightProps &
  TextAlignProps &
  BackgroundColorProps &
  OpacityProps &
  BordersProps &
  BorderColorProps;

const Time = styled("time", { shouldForwardProp })<TimeProps>(
  space,
  width,
  display,
  fontSize,
  fontWeight,
  textAlign,
  color,
  borders,
  borderColor,
  {}
);

export default Time;
