import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { color, ColorProps } from "styled-system";

type DefaultProps = {
  fill?: string;
};

type RectProps = DefaultProps & ColorProps;

const Rect = styled("rect", { shouldForwardProp })<RectProps>(color, {
  boxSizing: "border-box",
});

Rect.defaultProps = {
  fill: "currentcolor",
};

export default Rect;
