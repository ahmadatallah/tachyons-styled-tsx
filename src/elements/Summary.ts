import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  space,
  SpaceProps,
  display,
  DisplayProps,
  width,
  WidthProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  textAlign,
  color,
  BackgroundColorProps,
  OpacityProps,
} from "styled-system";

export type SummaryProps = SpaceProps &
  DisplayProps &
  WidthProps &
  FontSizeProps &
  FontWeightProps &
  BackgroundColorProps &
  OpacityProps;

const Summary = styled("summary", { shouldForwardProp })<SummaryProps>(
  space,
  display,
  width,
  fontSize,
  fontWeight,
  textAlign,
  color,
  {}
);

export default Summary;
