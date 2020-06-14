import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { color, ColorProps } from "styled-system";

type DefaultProps = {
  fill?: string;
};

export type PolylineProps = DefaultProps & ColorProps;
const Polyline = styled("polyline", { shouldForwardProp })<PolylineProps | DefaultProps>(color, {
  boxSizing: "border-box",
});

Polyline.defaultProps = {
  fill: "currentcolor",
};

export default Polyline;
