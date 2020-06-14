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
  color,
  BackgroundColorProps,
  OpacityProps,
  borders,
  BordersProps,
  borderColor,
  BorderColorProps,
  borderRadius,
  BorderRadiusProps,
} from "styled-system";

export type SampProps = SpaceProps &
  WidthProps &
  FontSizeProps &
  FontWeightProps &
  LineHeightProps &
  BackgroundColorProps &
  OpacityProps &
  BordersProps &
  BorderColorProps &
  BorderRadiusProps;

const Samp = styled("samp", { shouldForwardProp })<SampProps>(
  space,
  width,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: "border-box",
    fontFamily: "monospace, monospace",
  }
);

Samp.defaultProps = {
  fontSize: 2,
};

export default Samp;
