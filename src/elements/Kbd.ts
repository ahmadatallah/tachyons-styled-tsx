import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  space,
  SpaceProps,
  width,
  fontSize,
  FontSizeProps,
  textStyle,
  TextStyleProps,
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

type KbdProps = SpaceProps &
  FontSizeProps &
  TextStyleProps &
  BordersProps &
  BorderColorProps &
  BorderRadiusProps &
  BackgroundColorProps &
  OpacityProps;
const Kbd = styled("code", { shouldForwardProp })<KbdProps>(
  space,
  width,
  fontSize,
  textStyle,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: "border-box",
    fontFamily: "monospace, monospace",
  }
);

Kbd.defaultProps = {
  fontSize: 2,
};

export default Kbd;
