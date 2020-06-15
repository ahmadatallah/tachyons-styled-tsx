import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { color, display, width, maxWidth, MaxWidthProps, height } from "styled-system";

type DefaultProps = {
  fill?: string;
};

export type SvgProps = DefaultProps & MaxWidthProps;

const Svg = styled("svg", { shouldForwardProp })<SvgProps>(color, display, width, maxWidth, height, {
  boxSizing: "border-box",
});

Svg.defaultProps = {
  fill: "currentcolor",
};

export default Svg;
