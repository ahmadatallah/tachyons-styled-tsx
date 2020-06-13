import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  space,
  SpaceProps,
  width,
  WidthProps,
  maxWidth,
  MaxWidthProps,
  display,
  DisplayProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
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
  BackgroundColorProps,
  OpacityProps,
} from "styled-system";

type ButtonProps = SpaceProps &
  WidthProps &
  MaxWidthProps &
  DisplayProps &
  FontSizeProps &
  FontWeightProps &
  LineHeightProps &
  TextAlignProps &
  BordersProps &
  BorderColorProps &
  BorderRadiusProps &
  TextStyleProps &
  BackgroundColorProps &
  OpacityProps;

const Button = styled("button", { shouldForwardProp })<ButtonProps>(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
  textStyle,
  {
    boxSizing: "border-box",
    fontFamily: "inherit",
    overflow: "visible",
    textTransform: "none",
    webkitAppearance: "button",
    whiteSpace: "nowrap",
  }
);

Button.defaultProps = {
  fontSize: "100%",
  lineHeight: 1.25,
  m: 0,
  textAlign: "center",
};

export default Button;
