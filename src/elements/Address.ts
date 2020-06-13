import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  space,
  SpaceProps,
  display,
  DisplayProps,
  width,
  WidthProps,
  fontSize,
  FontSizeProps,
  lineHeight,
  LineHeightProps,
  textAlign,
  TextAlignProps,
  color,
  borders,
  BordersProps,
  borderColor,
  BorderColorProps,
  borderRadius,
  BorderRadiusProps,
  textStyle,
  TextStyleProps,
} from "styled-system";

type AddressProps = SpaceProps &
  DisplayProps &
  WidthProps &
  FontSizeProps &
  LineHeightProps &
  TextAlignProps &
  BordersProps &
  BorderColorProps &
  BorderRadiusProps &
  TextStyleProps;

const Address = styled("address", { shouldForwardProp })<AddressProps>(
  space,
  display,
  width,
  fontSize,
  lineHeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
  textStyle,
  {}
);

export default Address;
