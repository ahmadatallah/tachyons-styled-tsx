import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  space,
  SpaceProps,
  width,
  WidthProps,
  maxWidth,
  MaxWidthProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  textAlign,
  TextAlignProps,
  color,
  BackgroundColorProps,
  OpacityProps,
  borders,
  BordersProps,
  borderColor,
  BorderColorProps,
} from "styled-system";

export type TdProps = SpaceProps &
  WidthProps &
  MaxWidthProps &
  FontSizeProps &
  FontWeightProps &
  TextAlignProps &
  BackgroundColorProps &
  OpacityProps &
  BordersProps &
  BorderColorProps;

const Td = styled("td", { shouldForwardProp })<TdProps>(
  space,
  width,
  maxWidth,
  fontSize,
  fontWeight,
  textAlign,
  color,
  borders,
  borderColor,
  {}
);

export default Td;
