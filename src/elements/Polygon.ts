import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { color, ColorProps } from "styled-system";

type DefaultProps = {
  fill?: string;
};

export type PolygonProps = DefaultProps & ColorProps;

const Polygon = styled("polygon", { shouldForwardProp })<PolygonProps | DefaultProps>(color, {
  boxSizing: "border-box",
});

Polygon.defaultProps = {
  fill: "currentcolor",
};

export default Polygon;
