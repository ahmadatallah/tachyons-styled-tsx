import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { color, ColorProps } from "styled-system";

type DefaultProps = {
  fill?: string;
};

export type CircleProps = DefaultProps & ColorProps;

const Circle = styled("circle", { shouldForwardProp })<CircleProps | DefaultProps>(color, {
  boxSizing: "border-box",
});

Circle.defaultProps = {
  fill: "currentcolor",
};

export default Circle;
