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
  textStyle,
  TextStyleProps,
  OpacityProps,
} from "styled-system";

export type SProps = SpaceProps & WidthProps & FontSizeProps & BackgroundColorProps & OpacityProps & TextStyleProps;

const S = styled("s", { shouldForwardProp })<SProps>(space, width, fontSize, color, textStyle, {});

S.defaultProps = {
  textStyle: "line-through",
};
export default S;
