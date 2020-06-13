import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  space,
  SpaceProps,
  width,
  WidthProps,
  display,
  DisplayProps,
  fontSize,
  FontSizeProps,
  color,
  BackgroundColorProps,
  OpacityProps,
  textStyle,
  TextStyleProps,
} from "styled-system";

type EmProps = SpaceProps &
  WidthProps &
  DisplayProps &
  FontSizeProps &
  BackgroundColorProps &
  OpacityProps &
  TextStyleProps;

const Em = styled("em", { shouldForwardProp })<EmProps>(space, width, display, fontSize, color, textStyle, {});

export default Em;
