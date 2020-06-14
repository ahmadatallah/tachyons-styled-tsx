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
  borders,
  BordersProps,
  borderColor,
  BorderColorProps,
  borderRadius,
  BorderRadiusProps,
} from "styled-system";

export type PreProps = SpaceProps &
  WidthProps &
  FontSizeProps &
  BackgroundColorProps &
  OpacityProps &
  BordersProps &
  BorderColorProps &
  BorderRadiusProps;

const Pre = styled("pre", { shouldForwardProp })<PreProps>(
  space,
  width,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: "border-box",
    fontFamily: "monaco, monospace",
  }
);

export default Pre;
