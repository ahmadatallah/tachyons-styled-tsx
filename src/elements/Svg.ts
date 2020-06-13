import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  color,
  ColorProps,
  display,
  DisplayProps,
  width,
  WidthProps,
  maxWidth,
  MaxWidthProps,
  height,
  HeightProps,
} from "styled-system";

type DefaultProps = {
  fill?: string;
};

type SvgProps = DefaultProps & ColorProps & DisplayProps & WidthProps & MaxWidthProps & HeightProps;

const Svg = styled("svg", { shouldForwardProp })<SvgProps>(color, display, width, maxWidth, height, {
  boxSizing: "border-box",
});

Svg.defaultProps = {
  fill: "currentcolor",
};

export default Svg;
