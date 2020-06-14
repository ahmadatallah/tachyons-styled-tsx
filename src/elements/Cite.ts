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
  lineHeight,
  LineHeightProps,
  textAlign,
  TextAlignProps,
  textStyle,
  TextStyleProps,
  color,
  BackgroundColorProps,
  OpacityProps,
  borders,
  BordersProps,
  borderColor,
  BorderColorProps,
} from "styled-system";

export type CiteProps = SpaceProps &
  WidthProps &
  DisplayProps &
  FontSizeProps &
  LineHeightProps &
  TextAlignProps &
  TextStyleProps &
  BackgroundColorProps &
  OpacityProps &
  BordersProps &
  BorderColorProps;

const Cite = styled("cite", { shouldForwardProp })<CiteProps>(
  space,
  width,
  display,
  fontSize,
  lineHeight,
  textAlign,
  textStyle,
  color,
  borders,
  borderColor,
  {}
);

export default Cite;
