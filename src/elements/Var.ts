import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  space,
  SpaceProps,
  width,
  WidthProps,
  fontSize,
  FontSizeProps,
  color,
  BackgroundColorProps,
  OpacityProps,
} from "styled-system";

export type VarProps = SpaceProps & WidthProps & FontSizeProps & BackgroundColorProps & OpacityProps;
const Var = styled("var", { shouldForwardProp })<VarProps>(space, width, fontSize, color, {
  fontFamily: "monaco, monospace",
});

export default Var;
