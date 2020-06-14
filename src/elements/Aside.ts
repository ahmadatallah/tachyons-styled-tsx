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
  BackgroundColorProps,
} from "styled-system";

export type AsideProps = SpaceProps &
  WidthProps &
  MaxWidthProps &
  DisplayProps &
  FontSizeProps &
  LineHeightProps &
  TextAlignProps &
  BackgroundColorProps &
  BordersProps &
  BorderColorProps &
  BorderRadiusProps;

const Aside = styled("aside", { shouldForwardProp })<AsideProps>(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  lineHeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: "border-box",
  }
);

export default Aside;
